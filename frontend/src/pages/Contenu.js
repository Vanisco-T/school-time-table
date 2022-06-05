import React from 'react'
 import {Link,Outlet} from 'react-router-dom'

 const Contenu =() =>{
     return(
         <div className='container1'> 
        <nav>
        <button className='button'><Link to="classic" >Remplir</Link></button>
        <button className='button'><Link to="genere">Genenere</Link></button>
        </nav>
        <Outlet/>
      </div>
     );
 }

 export default Contenu