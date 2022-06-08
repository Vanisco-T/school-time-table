import React,{useState,useEffect} from "react";
import Axios from 'axios'
import Emploi from "../../../Emploi";

const SalleG =()=>{
    const [nom,setNom]=useState('A1001')
    const [data ,setData]=useState([])
    const [show,setShow]=useState(false)
    const [loading, setLoading] =useState(false)
    const [data2 ,setData2]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/salle").then((response)=>{
            setData2(response.data)
        })
        
    },[])

    const submitNiveau =(e)=>{
        e.preventDefault()
        if(!loading){
            Axios.post("http://localhost:4000/api/select/dispense/salle",{
                nom:nom
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
            <label>Nom</label>
            <select className="form-select" 
                value={nom}
                onChange={(e) => setNom(e.target.value)}   >
              {
       data2.map((resul)=>(<option title={resul.IdSalle} >{resul.NomSalle}</option>))
      }
            </select>
                    </div>
                    <input type="submit" value="Generer" className="send"/>
            </div>
        </form>
        {show && <Emploi array={data} niveau={nom} show={show}/>}
        </>
    )
}

export default SalleG