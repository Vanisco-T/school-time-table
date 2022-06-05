import React  from "react";
import {Link,Outlet} from 'react-router-dom'



//Composant Principal Du Mode Classic
const Classic =()=>{
    return(
        <div className="container1">
            <div>
            <h2>Choisissez Ce Que Vous Voulez Ajouter</h2>
            <button className="button"><Link to="enseignant" >Enseignant</Link></button>
            <button className="button"><Link to="filiere" >Filiere</Link></button>
            <button className="button"><Link to="cour" >Cour</Link></button>
            <button className="button"><Link to="groupe" >Groupe</Link></button>
            <button className="button"><Link to="niveau" >Niveau</Link></button>
            <button className="button"><Link to="salle" >Salle</Link></button>
            <button className="button"><Link to="specialite" >Specialite</Link></button>
            <button className="button"><Link to="occupe" >Dispense</Link></button>
            </div>
            <Outlet/>
        </div>
    );
}

export default Classic