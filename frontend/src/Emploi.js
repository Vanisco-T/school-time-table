import React ,{useState,useEffect,useRef}from "react";
import ReactToPrint from 'react-to-print'

const Emploi =({array,salle,niveau,enseignant,specialite,groupe}) =>{
    //Pour gerer le Lundi
    const [lun7,setLun7]=useState([])
    const [lun9,setLun9]=useState([])
    const [lun13,setLun13]=useState([])
    const [lun16,setLun16]=useState([])
    const [lun19,setLun19]=useState([])
    //Pour gerer le Mardi
    const [mar7,setMardi7]=useState([])
    const [mar9,setMardi9]=useState([])
    const [mar13,setMardi13]=useState([])
    const [mar16,setMardi16]=useState([])
    const [mar19,setMardi19]=useState([])
    //Pour gerer le Mercredi
    const [mer7,setMer7]=useState([])
    const [mer9,setMer9]=useState([])
    const [mer13,setMer13]=useState([])
    const [mer16,setMer16]=useState([])
    const [mer19,setMer19]=useState([])
    //Pour Le Jeudi
    const [jeu7,setJeu7]=useState([])
    const [jeu9,setJeu9]=useState([])
    const [jeu13,setJeu13]=useState([])
    const [jeu16,setJeu16]=useState([])
    const [jeu19,setJeu19]=useState([])
    //Pour Le Vendredi
    const [ven7,setVen7]=useState([])
    const [ven9,setVen9]=useState([])
    const [ven13,setVen13]=useState([])
    const [ven16,setVen16]=useState([])
    const [ven19,setVen19]=useState([])
    //Pour Le Samedi
    const [sam7,setSam7]=useState([])
    const [sam9,setSam9]=useState([])
    const [sam13,setSam13]=useState([])
    const [sam16,setSam16]=useState([])
    const [sam19,setSam19]=useState([])
    //Pour Le Dimanche
    const [dim7,setDim7]=useState([])
    const [dim9,setDim9]=useState([])
    const [dim13,setDim13]=useState([])
    const [dim16,setDim16]=useState([])
    const [dim19,setDim19]=useState([])

    const call=()=>{
        //Tableau pour le Lundi
        const tmpl7=[]
        const tmpl9=[]
        const tmpl13=[]
        const tmpl16=[]
        const tmpl19=[]
        //Tableau du Mardi
        const tmpm7=[]
        const tmpm9=[]
        const tmpm13=[]
        const tmpm16=[]
        const tmpm19=[]
        //Tableau du Mercredi
        const tmpmr7=[]
        const tmpmr9=[]
        const tmpmr13=[]
        const tmpmr16=[]
        const tmpmr19=[]
        //Tableau Pour Le Jeudi
        const tmpj7=[]
        const tmpj9=[]
        const tmpj13=[]
        const tmpj16=[]
        const tmpj19=[]
        //Tableau Pour Le Vendredi
        const tmpv7=[]
        const tmpv9=[]
        const tmpv13=[]
        const tmpv16=[]
        const tmpv19=[]
        //Tableau Pour Le Samedi
        const tmps7=[]
        const tmps9=[]
        const tmps13=[]
        const tmps16=[]
        const tmps19=[]
        //Tableau Pour Le Dimanche
        const tmpd7=[]
        const tmpd9=[]
        const tmpd13=[]
        const tmpd16=[]
        const tmpd19=[]
        console.log(array);
    for(let i = 0; i < array.length; i++) {
            switch(array[i].Date){
                case array[i].Date="Lundi":
                    switch(array[i].Plage){
                        case array[i].Plage="7H05-9H55":
                            tmpl7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                            break;
                        case array[i].Plage="10H05-12H55":
                            tmpl9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                            break;
                        case array[i].Plage="13H05-15H55":
                            tmpl13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                            break;
                        case array[i].Plage="16H05-18H55":
                            tmpl16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                            break;
                        case array[i].Plage="19H05-21H55":
                            tmpl19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                            break;
                        default:
                            console.log("Nothing")
                    }
                    break;
                    case array[i].Date="Mardi":
                        switch(array[i].Plage){
                            case array[i].Plage="7H05-9H55":
                                tmpm7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                break;
                            case array[i].Plage="10H05-12H55":
                                tmpm9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                break;
                            case array[i].Plage="13H05-15H55":
                                tmpm13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                break;
                            case array[i].Plage="16H05-18H55":
                                tmpm16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                break;
                            case array[i].Plage="19H05-21H55":
                                tmpm19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                break;
                            default:
                            console.log("Nothing")
                        }
                        break;
                            case array[i].Date="Mercredi":
                            switch(array[i].Plage){
                                case array[i].Plage="7H05-9H55":
                                    tmpmr7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                    break;
                                case array[i].Plage="10H05-12H55":
                                    tmpmr9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                    break;
                                case array[i].Plage="13H05-15H55":
                                    tmpmr13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                    break;
                                case array[i].Plage="16H05-18H55":
                                    tmpmr16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                    break;
                                case array[i].Plage="19H05-21H55":
                                    tmpmr19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                    break;
                                 default:
                                        console.log("Nothing")
                            }
                            break;
                            case array[i].Date="Jeudi":
                                switch(array[i].Plage){
                                    case array[i].Plage="7H05-9H55":
                                        tmpj7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                        break;
                                    case array[i].Plage="10H05-12H55":
                                        tmpj9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                        break;
                                    case array[i].Plage="13H05-15H55":
                                        tmpj13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                        break;
                                    case array[i].Plage="16H05-18H55":
                                        tmpj16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                        break;
                                    case array[i].Plage="19H05-21H55":
                                        tmpj19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                        break;
                                    default:
                                            console.log("Nothing")
                                }
                                break;
                                case array[i].Date="Vendredi":
                                    switch(array[i].Plage){
                                        case array[i].Plage="7H05-9H55":
                                            tmpv7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                            break;
                                        case array[i].Plage="10H05-12H55":
                                            tmpv9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                            break;
                                        case array[i].Plage="13H05-15H55":
                                            tmpv13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                            break;
                                        case array[i].Plage="16H05-18H55":
                                            tmpv16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                            break;
                                        case array[i].Plage="19H05-21H55":
                                            tmpv19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                            break;
                                        default:
                                            console.log("Nothing")
                                    }
                                    break;
                                    case array[i].Date="Samedi":
                                        switch(array[i].Plage){
                                            case array[i].Plage="7H05-9H55":
                                                tmps7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                break;
                                            case array[i].Plage="10H05-12H55":
                                                tmps9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                break;
                                            case array[i].Plage="13H05-15H55":
                                                tmps13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                break;
                                            case array[i].Plage="16H05-18H55":
                                                tmps16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                break;
                                            case array[i].Plage="19H05-21H55":
                                                tmps19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                break;
                                            default:
                                                console.log("Nothing")
                                            }
                                        break;
                                        case array[i].Date="Dimanche":
                                            switch(array[i].Plage){
                                                case array[i].Plage="7H05-9H55":
                                                    tmpd7.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                    break;
                                                case array[i].Plage="10H05-12H55":
                                                    tmpd9.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                    break;
                                                case array[i].Plage="13H05-15H55":
                                                    tmpd13.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                    break;
                                                case array[i].Plage="16H05-18H55":
                                                    tmpd16.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                    break;
                                                case array[i].Plage="19H05-21H55":
                                                    tmpd19.push(array[i].CodeCours,array[i].NomSalle, array[i].NomEnseignant,array[i].Prenom,array[i].NomGroupe)
                                                    break;
                                                default:
                                                    console.log("Nothing")
                                            }
                                            break;
                                            default:
                                            console.log("Nothing")
            }
        }
        //Set Pour Le Lundi
        setLun7(tmpl7)
        setLun9(tmpl9)
        setLun13(tmpl13)
        setLun16(tmpl16)
        setLun19(tmpl19)
        //Set Pour Le Mardi
        setMardi7(tmpm7)
        setMardi9(tmpm9)
        setMardi13(tmpm13)
        setMardi16(tmpm16)
        setMardi19(tmpm19)
        //Set Pour Le Mercredi
        setMer7(tmpmr7)
        setMer9(tmpmr9)
        setMer13(tmpmr13)
        setMer16(tmpmr16)
        setMer19(tmpmr19)
        //Set Pour Le Jeudi
        setJeu7(tmpj7)
        setJeu9(tmpj9)
        setJeu13(tmpj13)
        setJeu16(tmpj16)
        setJeu19(tmpj19)
        //Set Pour Le Vendredi
        setVen7(tmpv7)
        setVen9(tmpv9)
        setVen13(tmpv13)
        setVen16(tmpv16)
        setVen19(tmpv19)
        //Pour Le Samedi
        setSam7(tmps7)
        setSam9(tmps9)
        setSam13(tmps13)
        setSam16(tmps16)
        setSam19(tmps19)
        //Pour Le Dimanche
        setDim7(tmpd7)
        setDim9(tmpd9)
        setDim13(tmpd13)
        setDim16(tmpd16)
        setDim19(tmpd19)

    }
    useEffect(()=>{
     call()   
    },[])

    
    let componentRef = useRef();

     return(
     <div>
         <ReactToPrint
            content={() => componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF</button>}
          />
         <div id="container" ref={(el) => (componentRef = el)}>
             <h2>Time Table For {niveau} {salle} {enseignant} {specialite} {groupe}</h2>
             <div className="main">
                <div className="row1">
                    <div className="row1-col1">Heure</div>
                    <div className="row1-col1">Lundi</div>
                    <div className="row1-col1">Mardi</div>
                    <div className="row1-col1">Mercredi</div>
                    <div className="row1-col1">Jeudi</div>
                    <div className="row1-col1">Vendredi</div>
                    <div className="row1-col1">Samedi</div>
                    <div className="row1-col1">Dimanche</div>
                </div>
                <div className="row1">
                    <div className="row1-col3">07H05-09H55</div>
                    <div className="row1-col2"><p>{lun7[0]} {lun7[1]}</p><p>{lun7[2]} {lun7[3]}</p> <p>{lun7[4]}</p></div>
                    <div className="row1-col2"><p>{mar7[0]} {mar7[1]}</p><p>{mar7[2]} {mar7[3]}</p> <p>{mar7[4]}</p></div>
                    <div className="row1-col2"><p>{mer7[0]} {mer7[1]}</p><p>{mer7[2]} {mer7[3]}</p> <p>{mer7[4]}</p></div>
                    <div className="row1-col2"><p>{jeu7[0]} {jeu7[1]}</p><p>{jeu7[2]} {jeu7[3]}</p> <p>{jeu7[4]}</p></div>
                    <div className="row1-col2"><p>{ven7[0]} {ven7[1]}</p><p>{ven7[2]} {ven7[3]}</p> <p>{ven7[4]}</p></div>
                    <div className="row1-col2"><p>{sam7[0]} {sam7[1]}</p><p>{sam7[2]} {sam7[3]}</p> <p>{sam7[4]}</p></div>
                    <div className="row1-col2"><p>{dim7[0]} {dim7[1]}</p><p>{dim7[2]} {dim7[3]}</p> <p>{dim7[4]}</p></div>
                </div>
                <div className="row1">
                    <div className="row1-col3">10H05-12H55</div>
                    <div className="row1-col2"><p>{lun9[0]} {lun9[1]}</p><p>{lun9[2]} {lun9[3]}</p> <p>{lun9[4]}</p></div>
                    <div className="row1-col2"><p>{mar9[0]} {mar9[1]}</p><p>{mar9[2]} {mar9[3]}</p> <p>{mar9[4]}</p></div>
                    <div className="row1-col2"><p>{mer9[0]} {mer9[1]}</p><p>{mer9[2]} {mer9[3]}</p> <p>{mer9[4]}</p></div>
                    <div className="row1-col2"><p>{jeu9[0]} {jeu9[1]}</p><p>{jeu9[2]} {jeu9[3]}</p> <p>{jeu9[4]}</p></div>
                    <div className="row1-col2"><p>{ven9[0]} {ven9[1]}</p><p>{ven9[2]} {ven9[3]}</p> <p>{ven9[4]}</p></div>
                    <div className="row1-col2"><p>{sam9[0]} {sam9[1]}</p><p>{sam9[2]} {sam9[3]}</p> <p>{sam9[4]}</p></div>
                    <div className="row1-col2"><p>{dim9[0]} {dim9[1]}</p><p>{dim9[2]} {dim9[3]}</p> <p>{dim9[4]}</p></div>
                </div>
                <div className="row1">
                    <div className="row1-col3">13H05-15H55</div>
                    <div className="row1-col2"><p>{lun13[0]} {lun13[1]}</p><p>{lun13[2]} {lun13[3]}</p> <p>{lun13[4]}</p></div>
                    <div className="row1-col2"><p>{mar13[0]} {mar13[1]}</p><p>{mar13[2]} {mar13[3]}</p> <p>{mar13[4]}</p></div>
                    <div className="row1-col2"><p>{mer13[0]} {mer13[1]}</p><p>{mer13[2]} {mer13[3]}</p> <p>{mer13[4]}</p></div>
                    <div className="row1-col2"><p>{jeu13[0]} {jeu13[1]}</p><p>{jeu13[2]} {jeu13[3]}</p> <p>{jeu13[4]}</p></div>
                    <div className="row1-col2"><p>{ven13[0]} {ven13[1]}</p><p>{ven13[2]} {ven13[3]}</p> <p>{ven13[4]}</p></div>
                    <div className="row1-col2"><p>{sam13[0]} {sam13[1]}</p><p>{sam13[2]} {sam13[3]}</p> <p>{sam13[4]}</p></div>
                    <div className="row1-col2"><p>{dim13[0]} {dim13[1]}</p><p>{dim13[2]} {dim13[3]}</p> <p>{dim13[4]}</p></div>
                </div>
                <div className="row1">
                    <div className="row1-col3">16H05-18H55</div>
                    <div className="row1-col2"><p>{lun16[0]} {lun16[1]}</p><p>{lun16[2]} {lun16[3]}</p> <p>{lun16[4]}</p></div>
                    <div className="row1-col2"><p>{mar16[0]} {mar16[1]}</p><p>{mar16[2]} {mar16[3]}</p> <p>{mar16[4]}</p></div>
                    <div className="row1-col2"><p>{mer16[0]} {mer16[1]}</p><p>{mer16[2]} {mer16[3]}</p> <p>{mer16[4]}</p></div>
                    <div className="row1-col2"><p>{jeu16[0]} {jeu16[1]}</p><p>{jeu16[2]} {jeu16[3]}</p> <p>{jeu16[4]}</p></div>
                    <div className="row1-col2"><p>{ven16[0]} {ven16[1]}</p><p>{ven16[2]} {ven16[3]}</p> <p>{ven16[4]}</p></div>
                    <div className="row1-col2"><p>{sam16[0]} {sam16[1]}</p><p>{sam16[2]} {sam16[3]}</p> <p>{sam16[4]}</p></div>
                    <div className="row1-col2"><p>{dim16[0]} {dim16[1]}</p><p>{dim16[2]} {dim16[3]}</p> <p>{dim16[4]}</p></div>
                </div>
                <div className="row1">
                    <div className="row1-col3">19H05-21H55</div>
                    <div className="row1-col2"><p>{lun19[0]} {lun19[1]}</p><p>{lun19[2]} {lun19[3]}</p> <p>{lun19[4]}</p></div>
                    <div className="row1-col2"><p>{mar19[0]} {mar19[1]}</p><p>{mar19[2]} {mar19[3]}</p> <p>{mar19[4]}</p></div>
                    <div className="row1-col2"><p>{mer19[0]} {mer19[1]}</p><p>{mer19[2]} {mer19[3]}</p> <p>{mer19[4]}</p></div>
                    <div className="row1-col2"><p>{jeu19[0]} {jeu19[1]}</p><p>{jeu19[2]} {jeu19[3]}</p> <p>{jeu19[4]}</p></div>
                    <div className="row1-col2"><p>{ven19[0]} {ven19[1]}</p><p>{ven19[2]} {ven19[3]}</p> <p>{ven19[4]}</p></div>
                    <div className="row1-col2"><p>{sam19[0]} {sam19[1]}</p><p>{sam19[2]} {sam19[3]}</p> <p>{sam19[4]}</p></div>
                    <div className="row1-col2"><p>{dim19[0]} {dim19[1]}</p><p>{dim19[2]} {dim19[3]}</p> <p>{dim19[4]}</p></div>
                </div>
             </div>
         </div>
         </div>
     );

}

export default Emploi;