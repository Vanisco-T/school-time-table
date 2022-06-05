import React,{ useState } from 'react'
import Emploi1 from '../../Emplo1'
import Axios from 'axios'

 
const NiveauA = ()=>{
    const [nom,setNom]=useState('')
    const [filiere,setFiliere]=useState('')
    const [show ,setShow] = useState(false)
    const [data ,setData]=useState([])
    const [loading, setLoading] =useState(false)
    

    const submitNiveau =(e)=>{
        e.preventDefault()
        if(!loading){
            Axios.post("http://localhost:4000/api/select/autocomplete",{
                nom:nom,
                filiere: filiere
            }).then((result)=>{
                if(result.data.status !== "error"){
                    setData(result.data)
                    setShow(!show)
                    setLoading(true)
                }else{
                    alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        
    }


    return(
        <div className='niveau'>  
         <form className='form2'>
            <div className="inside">
                    <div className="form-group">
                            <label>Nom </label>
                            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Niveau"
                                onChange={(e) => setNom(e.target.value)}
                            />
                    </div>
            
                    <div className="form-group">
                            <label>Filiere</label>
                            <input type="text" id='fil' required size="1" value={filiere} className="form-control" placeholder="Nom Filiere"
                                onChange={(e) => setFiliere(e.target.value)}
                            />
                            </div>
                    <input type="submit" value="Generer" onClick={submitNiveau} className="send"/>
            </div>
        </form>
            {show && <Emploi1 array={data} />}
        </div>
    )
}

export default NiveauA