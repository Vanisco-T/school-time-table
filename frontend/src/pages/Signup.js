import React ,{useState,useEffect} from "react";
import * as Icons from "react-icons/fa";
import Axios from 'axios'

function Signup() {
  const [data , setData] = useState([])
  const [data1 , setData1] = useState([])
  const [data2 , setData2] = useState([])
  const [data3 , setData3] = useState([])
  const [data4 , setData4] = useState([])
  const [data5 , setData5] = useState([])
  const [data6 , setData6] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:4000/api/select/salle").then((response)=>{
        setData(response.data)
    })
    Axios.get("http://localhost:4000/api/select/enseignant").then((response)=>{
        setData1(response.data)
    })
    Axios.get("http://localhost:4000/api/select/filiere").then((response)=>{
        setData2(response.data)
    })
    Axios.get("http://localhost:4000/api/select/niveau").then((response)=>{
        setData3(response.data)
    })
    Axios.get("http://localhost:4000/api/select/cours").then((response)=>{
        setData4(response.data)
    })
    Axios.get("http://localhost:4000/api/select/groupe").then((response)=>{
        setData5(response.data)
    })
    Axios.get("http://localhost:4000/api/select/specialite").then((response)=>{
        setData6(response.data)
    })
},[])
  return (
    <div className="dash">
     <div className="over1">
         <div className="inside1">
         <h2><Icons.FaUsers></Icons.FaUsers>
         </h2>
         <h3>{data2.length}</h3>
         <p>Filiere</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaList></Icons.FaList>
         </h2>
         <h3>{data3.length}</h3>
         <p>Niveau</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaChalkboardTeacher></Icons.FaChalkboardTeacher>
         </h2>
         <h3>{data1.length}</h3>
         <p>Enseignant</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaBook></Icons.FaBook>
         </h2>
         <h3>{data4.length}</h3>
         <p>Cours</p>
         </div>
         </div>
         <div className="over1">
         <div className="inside1">
         <h2><Icons.FaUserGraduate></Icons.FaUserGraduate>
         </h2>
         <h3>{data5.length}</h3>
         <p>Groupe</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaUserGraduate></Icons.FaUserGraduate>
         </h2>
        <h3>{data6.length}</h3>
         <p>Specialite</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaHome></Icons.FaHome>
         </h2>
         <h3>{data.length}</h3>
         <p>Salle</p>
         </div>
         <div className="inside1">
         <h2><Icons.FaUsers></Icons.FaUsers>
         </h2>
         <h3>{data2.length}</h3>
         <p>Filiere</p>
         </div>   
        </div>

    </div>
  );
}

export default Signup;
