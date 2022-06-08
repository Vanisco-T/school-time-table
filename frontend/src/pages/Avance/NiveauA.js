import React,{ useState } from 'react'
import Emploi1 from '../../Emplo1'
import Axios from 'axios'

 
const NiveauA = ()=>{
    const [nom,setNom]=useState('Licence 1')
    const [filiere,setFiliere]=useState('Informatique')
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
                            <select className="form-select" 
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}   >
                                <option title="Licence 1" >Licence 1</option>
                                <option title="Licence 2" >Licence 2</option>
                                <option title="Licence 3" >Licence 3</option>
                                <option title="M1" >M1</option>
                                <option title="M2" >M2</option>
                             </select>
                    </div>
                    <div className="form-group">
                            <label>Filiere </label>
                            <select className="form-select" 
                                value={filiere}
                                onChange={(e) => setFiliere(e.target.value)}   >
                                <option title="Informatique" >Informatique</option>
                                <option title="Mathematique" >Mathematique </option>
                                <option title="Physique" >Physique</option>
                                <option title="Chemie" >Chemie</option>
                                <option title="Bioscience" >Bioscience</option>
                                <option title="Geoscience" >Geoscience</option>
                             </select>
                    </div>
                    <input type="submit" value="Generer" onClick={submitNiveau} className="send"/>
            </div>
        </form>
            {show && <Emploi1 array={data} />}
        </div>
    )
}

export default NiveauA