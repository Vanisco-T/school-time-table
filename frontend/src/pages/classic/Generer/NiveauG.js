import React,{useState} from "react";
import Axios from 'axios'
import Emploi from "../../../Emploi";

const NiveauG =()=>{
    const [nom,setNom]=useState('')
    const [filiere,setFiliere]=useState('')
    const [data ,setData]=useState([])
    const [show,setShow]=useState(false)
    const [loading, setLoading] =useState(false)

    const submitNiveau =(e)=>{
        e.preventDefault()
        if(!loading){
            Axios.post("http://localhost:4000/api/select/dispense/niveau",{
                nom:nom,
                filiere: filiere
            }).then((result)=>{
                if(result.data.status !== "error"){
                    setData(result.data)
                    setShow(true)
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
        <>
         <form className='form2' onSubmit={submitNiveau}>
            <div className="inside">
                    <div className="form-group">
                            <label>Nom </label>
                            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Niveau"
                                onChange={(e) => setNom(e.target.value)}
                            />
                    </div>
            
                    <div className="form-group">
                            <label>Filiere</label>
                            <input type="text" required size="1" value={filiere} className="form-control" placeholder="Nom Filiere"
                                onChange={(e) => setFiliere(e.target.value)}
                            />
                            </div>
                    <input type="submit" value="Generer" className="send"/>
            </div>
        </form>
        {show && <Emploi array={data} niveau={nom} show={show}/>}
        </>
    )
}

export default NiveauG