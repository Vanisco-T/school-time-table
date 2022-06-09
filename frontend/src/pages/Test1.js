import React from "react";
import { renderToString } from "react-dom/server";
import jsPDF from 'jspdf'
import Emploi from "../Emploi";
//Ici le test pour enreigistre sur format pdf 
//Avec le composant home comme test
const print = () => {
  const string = renderToString(<Emploi />);
  const pdf = new jsPDF("p", "mm", "a4");
  pdf.fromHTML(string);
  pdf.save("pdf");
};


const Test1 = () => {
  return <div>
    
  </div>
};

export default Test1


