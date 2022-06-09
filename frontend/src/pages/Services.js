import React,{useState,useEffect} from "react";
import Axios from 'axios'

function Services() {
  const [data , setData] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:4000/api/select/salle").then((response)=>{
        setData(response.data)
    })
},[])
  return (
    <>
    <div className="main1">
    {
       data.map((resul)=>(<div className="div"><p>{resul.NomSalle}</p><p>{resul.Capacite}</p></div>))
      }
     
    </div>
   
    </>
  );
}

export default Services;
