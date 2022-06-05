import React  from "react";
import {Link,Outlet} from 'react-router-dom'
//Composant Principal Du Mode Classic


const Avance =()=>{
    return(
        <div className="container1">
            <div>
            <h2>Choisir Pour Saisir</h2>
            <button className="button"><Link to="niveaua" >Niveau</Link></button>
            <button className="button"><Link to="enseignanta" >Enseignant</Link></button>
            <button className="button"><Link to="sallea" >Salle</Link></button>
            </div>
            <Outlet/>
        </div>
    );
}

export default Avance