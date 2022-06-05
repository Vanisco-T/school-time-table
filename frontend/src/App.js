import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Classic from "./pages/Classic";
import Avance from "./pages/Avance";
import Cour from "./pages/classic/Cour";
import Enseignant from "./pages/classic/Enseignant";
import Filiere from "./pages/classic/Filiere";
import Groupe from "./pages/classic/Groupe";
import Niveau from "./pages/classic/Niveau";
import Salle from "./pages/classic/Salle";
import Specialite from "./pages/classic/Specialite";
import Occupe from "./pages/classic/Occupe";
import Contenu from "./pages/Contenu";
import Genenere from "./pages/Genere";
import NiveauG from "./pages/classic/Generer/NiveauG";
import SalleG from "./pages/classic/Generer/SalleG";
import EnseignantG from "./pages/classic/Generer/EnseignantG";
import SpecialiteG from "./pages/classic/Generer/SpecialiteG";
import EnseignantA from "./pages/Avance/EnseignantA";
import NiveauA from "./pages/Avance/NiveauA";
import SalleA from "./pages/Avance/SalleA";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" exact element={<Home/>}>  </Route>
          <Route path="/contenu" element={<Contenu/>}>
              <Route path="classic" element={<Classic/>}>
                  <Route path="cour" element={<Cour/>}/>
                  <Route path="enseignant" element={<Enseignant/>}/>
                  <Route path="filiere" element={<Filiere/>}/>
                  <Route path="groupe" element={<Groupe/>}/>
                  <Route path="niveau" element={<Niveau/>}/>
                  <Route path="salle" element={<Salle/>}/>
                  <Route path="occupe" element={<Occupe/>}/>
                  <Route path="specialite" element={<Specialite/>}/>
              </Route>
              <Route path="genere" element={<Genenere/>}>
                  <Route path="niveaug" element={<NiveauG/>}/>
                  <Route path="salleg" element={<SalleG/>}/>
                  <Route path="enseignantg" element={<EnseignantG/>}/>
                  <Route path="specialiteg" element={<SpecialiteG/>}/>
              </Route>
          </Route>
          <Route path="/avance" element={<Avance/>}>
                  <Route path="niveaua" element={<NiveauA/>}/>
                  <Route path="sallea" element={<SalleA/>}/>
                  <Route path="enseignanta" element={<EnseignantA/>}/>
          </Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          

        </Routes>
      </Router>
    </>  );
}

export default App;
