import React,{useState} from "react";
import Axios from 'axios'
import Emploi from "../../../Emploi";

const SpecialiteG =()=>{
    const [nom,setNom]=useState('Licence 1')
    const [filiere,setFiliere]=useState('Informatique')
    const [specialite,setSpecialite]=useState('GL')
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
                            <label>Nom </label>
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
                    <div className="form-group">
                    <select className="form-select" 
                                value={specialite}
                                onChange={(e) => setSpecialite(e.target.value)}   >
                                <option title="gl" >GL</option>
                                <option title="sr" >SR</option>
                                <option title="ds" >DS</option>
                                <option title="sc" >SC</option>
                             </select>
                    </div>
                    <input type="submit" value="Generer" className="send"/>
            </div>
        </form>
        {show && <Emploi array={data} niveau={specialite} show={show}/>}
        </>
    )
}

export default SpecialiteG