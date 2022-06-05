import React from "react";
import jsPDF from "jspdf";
import Test1 from "./Test1";

export default function Products() {
    const print = () => {
       const pdf = new jsPDF('l', 'pt', 'a4', true); 
       pdf.text(20, 20, 'This is the first page title.')
       pdf.setFont('helvetica')
       pdf.text(20, 60, 'This is the content area.')
       pdf.addPage() // this code creates new page in pdf document
       pdf.setFont('helvetica')
       pdf.text(20, 100, 'This is the second page.')
       pdf.save("pdf");
      };
  return (
    <div>
      <button onClick={print}>save</button>
      <Test1/>
    </div>
  );
}