import React,{useState} from "react";
import Axios from 'axios'
import Emploi from "../../../Emploi";

const SpecialiteG =()=>{
    const [nom,setNom]=useState('')
    const [filiere,setFiliere]=useState('')
    const [specialite,setSpecialite]=useState('')
    const [data ,setData]=useState([])
    const [show,setShow]=useState(false)
    const [loading, setLoading] =useState(false)

    const submitNiveau =(e)=>{
        e.preventDefault()
        if(!loading){
            Axios.post("http://localhost:4000/api/select/dispense/specialite",{
                nom:nom,
                filiere: filiere,
                specialite:specialite
            }).then((result)=>{
                if(result.data.status !== "error"){
                    setData(result.data)
                    setShow(true)
                    setLoading(true)
                }else{
                    alert(result.data.error)
                }  
            }).catch((error)=>{
                alert(error)
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
                    <div className="form-group">
                            <label>Specialite</label>
                            <input type="text" required size="1" value={specialite} className="form-control" placeholder="Nom Specialite"
                                onChange={(e) => setSpecialite(e.target.value)}
                            />
                    </div>
                    <input type="submit" value="Generer" className="send"/>
            </div>
        </form>
        {show && <Emploi array={data} niveau={specialite} show={show}/>}
        </>
    )
}

export default SpecialiteG