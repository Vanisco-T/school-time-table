import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Genenere =()=>{
    return(
        <div className='container1'> 
        <h4>Choissez Ce Que Vous Allez Genenere Son Emploi</h4>
        <nav>
        <button className='button'><Link to="niveaug" >Niveau</Link></button>
        <button className='button'><Link to="salleg" >Salle</Link></button>
        <button className='button'><Link to="enseignantg" >Enseignant</Link></button>
        <button className='button'><Link to="specialiteg" >Specialite</Link></button>
        </nav>
        <Outlet/>
      </div>
    )
}

export default Genenere