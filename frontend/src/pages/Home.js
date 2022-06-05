import * as React from 'react';
import {Link } from 'react-router-dom'
//import Test1 from "./Test1";

//Premiere composant Permet de demander le mode que l'on veut utiliser

class Home extends React.Component {
   
    render() {
      //const theClick =()=> console.log("the click")
        return <div className="container-fluid"
        >
           
          {/*
            Le test pour enreigistre
           <h2>Generate Level 2 Time Table</h2>
            <div onClick={theClick}>Je m'appelle vanisco</div>
            <button>New</button>
            <table>
              <th>Bonjour</th>
            </table>
          <Test1/> */}

<div className='container1'>
          <h2>Bienvenue Sur L'Application De Generation D'emploi De Temps</h2>
          <nav>
          <button className='button'><Link to="/contenu" >Mode Classic</Link></button>
          <button className='button'><Link to="/avance">Mode Avance</Link></button>
          </nav>
          </div>
        </div>
    }
}

export default Home;

