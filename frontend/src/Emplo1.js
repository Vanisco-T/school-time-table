import React ,{useState,useEffect,useRef}from "react";
import ReactToPrint from 'react-to-print'
import * as Icons from "react-icons/fa";
import Downshift from 'downshift'
import Axios from 'axios'


const Emploi1 =({array})=>{
//Les Different donnees pour l'autocompletion
const filiere=document.getElementById("fil").value
let componentRef = useRef();
const [data1 ,setData1]=useState([])
const [data2 ,setData2]=useState([])
const items = []
const items1 = []
const items2 = []
    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/enseignant").then((response)=>{
            setData1(response.data)
        })
        Axios.get("http://localhost:4000/api/select/salle").then((response)=>{
            setData2(response.data)
        })
        
    },[])
        for(let i=0;i<array.length;i++){
            let tmp={
                value:array[i].CodeCours
            }
            items.push(tmp)
        }
        for(let i=0;i<data1.length;i++){

            let tmp1={
                value:data1[i].NomEnseignant
            }
            items1.push(tmp1)
        }
        for(let i=0;i<data2.length;i++){
            let tmp2={
                value:data2[i].NomSalle
            }
            items2.push(tmp2)
        }  
//Gestion Du Lundi
        //7H
        const [show,setShow]=useState(false)
        const [show1,setShow1]=useState(true)
        const [lun71,setLun71]=useState('')
        const [lun72,setLun72]=useState('')
        const [lun73,setLun73]=useState('')
        const Alun7 =(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/api/ajouter/dispense",{
                enseignant:lun71,
                salle:lun72,
                cour:lun73,
                date:"Lundi",
                plage:"7H05-9H55",
                filiere: filiere,
                niveau:array[0].NomNiveau,
                specialite:"",
                groupe:""
            }).then((result)=>{
                if (result.data.status === 'ok'){
                alert(" Ajouter Avec Sucess");
                setShow1(!show1) 
                setShow(!show)
                }
                else{
                      alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        //10H
        const [showl10,setShowl10]=useState(false)
        const [showl101,setShowl101]=useState(true)
        const [lun101,setLun101]=useState('')
        const [lun102,setLun102]=useState('')
        const [lun103,setLun103]=useState('')
        const Alun10 =(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/api/ajouter/dispense",{
                enseignant:lun101,
                salle:lun102,
                cour:lun103,
                date:"Lundi",
                plage:"10H05-12H55",
                filiere: filiere,
                niveau:array[0].NomNiveau,
                specialite:"",
                groupe:""
            }).then((result)=>{
                if (result.data.status === 'ok'){
                alert(" Ajouter Avec Sucess");
                setShowl10(!show1) 
                setShowl101(!show)
                }
                else{
                      alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        //13H
        const [showl13,setShowl13]=useState(false)
        const [showl131,setShowl131]=useState(true)
        const [lun131,setLun131]=useState('')
        const [lun132,setLun132]=useState('')
        const [lun133,setLun133]=useState('')
        const Alun13 =(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/api/ajouter/dispense",{
                enseignant:lun131,
                salle:lun132,
                cour:lun133,
                date:"Lundi",
                plage:"13H05-15H55",
                filiere: filiere,
                niveau:array[0].NomNiveau,
                specialite:"",
                groupe:""
            }).then((result)=>{
                if (result.data.status === 'ok'){
                alert(" Ajouter Avec Sucess");
                setShowl13(!showl13) 
                setShowl131(!showl131)
                }
                else{
                      alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        //16H
        const [showl16,setShowl16]=useState(false)
        const [showl161,setShowl161]=useState(true)
        const [lun161,setLun161]=useState('')
        const [lun162,setLun162]=useState('')
        const [lun163,setLun163]=useState('')
        const Alun16 =(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/api/ajouter/dispense",{
                enseignant:lun161,
                salle:lun162,
                cour:lun163,
                date:"Lundi",
                plage:"16H05-18H55",
                filiere: filiere,
                niveau:array[0].NomNiveau,
                specialite:"",
                groupe:""
            }).then((result)=>{
                if (result.data.status === 'ok'){
                alert(" Ajouter Avec Sucess");
                setShowl16(!show1) 
                setShowl161(!show)
                }
                else{
                      alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        //19H
        const [showl19,setShowl19]=useState(false)
        const [showl191,setShowl191]=useState(true)
        const [lun191,setLun191]=useState('')
        const [lun192,setLun192]=useState('')
        const [lun193,setLun193]=useState('')
        const Alun19 =(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/api/ajouter/dispense",{
                enseignant:lun191,
                salle:lun192,
                cour:lun193,
                date:"Lundi",
                plage:"19H05-21H55",
                filiere: filiere,
                niveau:array[0].NomNiveau,
                specialite:"",
                groupe:""
            }).then((result)=>{
                if (result.data.status === 'ok'){   
                alert(" Ajouter Avec Sucess");
                setShowl19(!show1) 
                setShowl191(!show)
                }
                else{
                      alert(result.data.error)
                }
            }).catch((error)=>{
                console.log(error)
            })
        }

//Gestion du mardi 
        //7H
        const [showm,setShowm]=useState(false)
        const [showm1,setShowm1]=useState(true)
        const [mar71,setMar71]=useState('')
        const [mar72,setMar72]=useState('')
        const [mar73,setMar73]=useState('')
        const Amar7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mar71,
              salle:mar72,
              cour:mar73,
              date:"Mardi",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowm1(!showm1) 
              setShowm(!showm)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [showm10,setShowm10]=useState(false)
        const [showm101,setShowm101]=useState(true)
        const [mar101,setMar101]=useState('')
        const [mar102,setMar102]=useState('')
        const [mar103,setMar103]=useState('')
        const Amar10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mar101,
              salle:mar102,
              cour:mar103,
              date:"Mardi",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowm101(!showm101) 
              setShowm10(!showm10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [showm13,setShowm13]=useState(false)
        const [showm131,setShowm131]=useState(true)
        const [mar131,setMar131]=useState('')
        const [mar132,setMar132]=useState('')
        const [mar133,setMar133]=useState('')
        const Amar13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mar131,
              salle:mar132,
              cour:mar133,
              date:"Mardi",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowm131(!showm131) 
              setShowm13(!showm13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [showm16,setShowm16]=useState(false)
        const [showm161,setShowm161]=useState(true)
        const [mar161,setMar161]=useState('')
        const [mar162,setMar162]=useState('')
        const [mar163,setMar163]=useState('')
        const Amar16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mar161,
              salle:mar162,
              cour:mar163,
              date:"Mardi",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowm161(!showm161) 
              setShowm16(!showm16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
        const [showm19,setShowm19]=useState(false)
        const [showm191,setShowm191]=useState(true)
        const [mar191,setMar191]=useState('')
        const [mar192,setMar192]=useState('')
        const [mar193,setMar193]=useState('')
        const Amar19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mar191,
              salle:mar192,
              cour:mar193,
              date:"Mardi",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowm191(!showm191) 
              setShowm19(!showm19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
//Gestion du jeudi
        //7H
        const [showj,setShowj]=useState(false)
        const [showj1,setShowj1]=useState(true)
        const [jeu71,setJeu71]=useState('')
        const [jeu72,setJeu72]=useState('')
        const [jeu73,setJeu73]=useState('')
        const Ajeu7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:jeu71,
              salle:jeu72,
              cour:jeu73,
              date:"Juedi",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowj1(!showj1) 
              setShowj(!showj)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [showj10,setShowj10]=useState(false)
        const [showj101,setShowj101]=useState(true)
        const [jeu101,setJeu101]=useState('')
        const [jeu102,setJeu102]=useState('')
        const [jeu103,setJeu103]=useState('')
        const Ajeu10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:jeu101,
              salle:jeu102,
              cour:jeu103,
              date:"Jeudi",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowj101(!showj101) 
              setShowj10(!showj10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [showj13,setShowj13]=useState(false)
        const [showj131,setShowj131]=useState(true)
        const [jeu131,setJeu131]=useState('')
        const [jeu132,setJeu132]=useState('')
        const [jeu133,setJeu133]=useState('')
        const Ajeu13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:jeu131,
              salle:jeu132,
              cour:jeu133,
              date:"Jeudi",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowj131(!showj131) 
              setShowj13(!showj13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [showj16,setShowj16]=useState(false)
        const [showj161,setShowj161]=useState(true)
        const [jeu161,setJeu161]=useState('')
        const [jeu162,setJeu162]=useState('')
        const [jeu163,setJeu163]=useState('')
        const Ajeu16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:jeu161,
              salle:jeu162,
              cour:jeu163,
              date:"Jeudi",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowj161(!showj161) 
              setShowj16(!showj16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
        const [showj19,setShowj19]=useState(false)
        const [showj191,setShowj191]=useState(true)
        const [jeu191,setJeu191]=useState('')
        const [jeu192,setJeu192]=useState('')
        const [jeu193,setJeu193]=useState('')
        const Ajeu19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:jeu191,
              salle:jeu192,
              cour:jeu193,
              date:"Jeudi",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowj191(!showj191) 
              setShowj19(!showj19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        
//Gestion du mercredi
        //7H
        const [showmr,setShowmr]=useState(false)
        const [showmr1,setShowmr1]=useState(true)
        const [mer71,setMer71]=useState('')
        const [mer72,setMer72]=useState('')
        const [mer73,setMer73]=useState('')
        const Amer7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mer71,
              salle:mer72,
              cour:mer73,
              date:"Mercredi",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowmr1(!showmr1) 
              setShowmr(!showmr)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [showmr10,setShowmr10]=useState(false)
        const [showmr101,setShowmr101]=useState(true)
        const [mer101,setMer101]=useState('')
        const [mer102,setMer102]=useState('')
        const [mer103,setMer103]=useState('')
        const Amer10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mer101,
              salle:mer102,
              cour:mer103,
              date:"Mercredi",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowmr101(!showmr101) 
              setShowmr10(!showmr10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [showmr13,setShowmr13]=useState(false)
        const [showmr131,setShowmr131]=useState(true)
        const [mer131,setMer131]=useState('')
        const [mer132,setMer132]=useState('')
        const [mer133,setMer133]=useState('')
        const Amer13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mer131,
              salle:mer132,
              cour:mer133,
              date:"Mercredi",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowmr131(!showmr131) 
              setShowmr13(!showmr13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [showmr16,setShowmr16]=useState(false)
        const [showmr161,setShowmr161]=useState(true)
        const [mer161,setMer161]=useState('')
        const [mer162,setMer162]=useState('')
        const [mer163,setMer163]=useState('')
        const Amer16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mer161,
              salle:mer162,
              cour:mer163,
              date:"Jeudi",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowmr161(!showmr161) 
              setShowmr16(!showmr16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
      
        const [showmr19,setShowmr19]=useState(false)
        const [showmr191,setShowmr191]=useState(true)
        const [mer191,setMer191]=useState('')
        const [mer192,setMer192]=useState('')
        const [mer193,setMer193]=useState('')
        const Amer19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:mer191,
              salle:mer192,
              cour:mer193,
              date:"Mercredi",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowmr191(!showmr191) 
              setShowmr19(!showmr19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }



        //Gestion du Vendredi
        //7H
        const [showv,setShowv]=useState(false)
        const [showv1,setShowv1]=useState(true)
        const [ven71,setVen71]=useState('')
        const [ven72,setVen72]=useState('')
        const [ven73,setVen73]=useState('')
        const Aven7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:ven71,
              salle:ven72,
              cour:ven73,
              date:"Vendredi",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowv1(!showv1) 
              setShowv(!showv)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [showv10,setShowv10]=useState(false)
        const [showv101,setShowv101]=useState(true)
        const [ven101,setVen101]=useState('')
        const [ven102,setVen102]=useState('')
        const [ven103,setVen103]=useState('')
        const Aven10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:ven101,
              salle:ven102,
              cour:ven103,
              date:"Vendredi",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowv101(!showv101) 
              setShowv10(!showv10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [showv13,setShowv13]=useState(false)
        const [showv131,setShowv131]=useState(true)
        const [ven131,setVen131]=useState('')
        const [ven132,setVen132]=useState('')
        const [ven133,setVen133]=useState('')
        const Aven13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:ven131,
              salle:ven132,
              cour:ven133,
              date:"Vendredi",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowv131(!showv131) 
              setShowv13(!showv13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [showv16,setShowv16]=useState(false)
        const [showv161,setShowv161]=useState(true)
        const [ven161,setVen161]=useState('')
        const [ven162,setVen162]=useState('')
        const [ven163,setVen163]=useState('')
        const Aven16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:ven161,
              salle:ven162,
              cour:ven163,
              date:"Vendredi",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowv161(!showv161) 
              setShowv16(!showv16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
        const [showv19,setShowv19]=useState(false)
        const [showv191,setShowv191]=useState(true)
        const [ven191,setVen191]=useState('')
        const [ven192,setVen192]=useState('')
        const [ven193,setVen193]=useState('')
        const Aven19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:ven191,
              salle:ven192,
              cour:ven193,
              date:"Vendredi",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowv191(!showv191) 
              setShowv19(!showv19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }

        //Gestion du Samedi
        //7H
        const [shows,setShows]=useState(false)
        const [shows1,setShows1]=useState(true)
        const [sam71,setSam71]=useState('')
        const [sam72,setSam72]=useState('')
        const [sam73,setSam73]=useState('')
        const Asam7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:sam71,
              salle:sam72,
              cour:sam73,
              date:"Samedi",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShows1(!shows1) 
              setShows(!shows)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [shows10,setShows10]=useState(false)
        const [shows101,setShows101]=useState(true)
        const [sam101,setSam101]=useState('')
        const [sam102,setSam102]=useState('')
        const [sam103,setSam103]=useState('')
        const Asam10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:sam101,
              salle:sam102,
              cour:sam103,
              date:"Samedi",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShows101(!shows101) 
              setShows10(!shows10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [shows13,setShows13]=useState(false)
        const [shows131,setShows131]=useState(true)
        const [sam131,setSam131]=useState('')
        const [sam132,setSam132]=useState('')
        const [sam133,setSam133]=useState('')
        const Asam13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:sam131,
              salle:sam132,
              cour:sam133,
              date:"Samedi",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShows131(!shows131) 
              setShows13(!shows13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [shows16,setShows16]=useState(false)
        const [shows161,setShows161]=useState(true)
        const [sam161,setSam161]=useState('')
        const [sam162,setSam162]=useState('')
        const [sam163,setSam163]=useState('')
        const Asam16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:sam161,
              salle:sam162,
              cour:sam163,
              date:"Samedi",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShows161(!shows161) 
              setShows16(!shows16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
        const [shows19,setShows19]=useState(false)
        const [shows191,setShows191]=useState(true)
        const [sam191,setSam191]=useState('')
        const [sam192,setSam192]=useState('')
        const [sam193,setSam193]=useState('')
        const Asam19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:sam191,
              salle:sam192,
              cour:sam193,
              date:"Samedi",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShows191(!shows191) 
              setShows19(!shows19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }

        //Gestion du Dimanche
        //7H
        const [showd,setShowd]=useState(false)
        const [showd1,setShowd1]=useState(true)
        const [dim71,setDim71]=useState('')
        const [dim72,setDim72]=useState('')
        const [dim73,setDim73]=useState('')
        const Adim7 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:dim71,
              salle:dim72,
              cour:dim73,
              date:"Dimanche",
              plage:"7H05-9H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowd1(!showd1) 
              setShowd(!showd)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
           }
        //10H
        const [showd10,setShowd10]=useState(false)
        const [showd101,setShowd101]=useState(true)
        const [dim101,setDim101]=useState('')
        const [dim102,setDim102]=useState('')
        const [dim103,setDim103]=useState('')
        const Adim10 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:dim101,
              salle:dim102,
              cour:dim103,
              date:"Dimanche",
              plage:"10H05-12H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowd101(!showd101) 
              setShowd10(!showd10)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //13H
        const [showd13,setShowd13]=useState(false)
        const [showd131,setShowd131]=useState(true)
        const [dim131,setDim131]=useState('')
        const [dim132,setDim132]=useState('')
        const [dim133,setDim133]=useState('')
        const Adim13 =(e)=>{
          e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:dim131,
              salle:dim132,
              cour:dim133,
              date:"Dimanche",
              plage:"13H05-15H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowd131(!showd131) 
              setShowd13(!showd13)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
          }
        //16H
        const [showd16,setShowd16]=useState(false)
        const [showd161,setShowd161]=useState(true)
        const [dim161,setDim161]=useState('')
        const [dim162,setDim162]=useState('')
        const [dim163,setDim163]=useState('')
        const Adim16 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:dim161,
              salle:dim162,
              cour:dim163,
              date:"Dimanche",
              plage:"16H05-18H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowd161(!showd161) 
              setShowd16(!showd16)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }
        //19H
        const [showd19,setShowd19]=useState(false)
        const [showd191,setShowd191]=useState(true)
        const [dim191,setDim191]=useState('')
        const [dim192,setDim192]=useState('')
        const [dim193,setDim193]=useState('')
        const Adim19 =(e)=>{ 
        e.preventDefault()
          Axios.post("http://localhost:4000/api/ajouter/dispense",{
              enseignant:dim191,
              salle:dim192,
              cour:dim193,
              date:"Dimanche",
              plage:"19H05-21H55",
              filiere: filiere,
              niveau:array[0].NomNiveau,
              specialite:"",
              groupe:""
          }).then((result)=>{
              if (result.data.status === 'ok'){
              alert(" Ajouter Avec Sucess");
              setShowd191(!showd191) 
              setShowd19(!showd19)
              }
              else{
                    alert(result.data.error)
              }
          }).catch((error)=>{
              console.log(error)
          })
        }

        



return(
    <div>
        <ReactToPrint
           content={() => componentRef}
           trigger={() => <button className="btn btn-primary">Print to PDF</button>}
         />
        <div id="container" ref={(el) => (componentRef = el)}>
            <h2>Time Table For {array[0].NomNiveau}</h2>
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
                   <div className="row1-col2">
                       {show && 
                       <div><p>{lun71}</p><p>{lun72}</p> <p>{lun73}</p>
                       <button className="mod" onClick={()=>{
                           setShow1(!show1) 
                           setShow(!show)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShow1(!show1) 
                           setShow(!show)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {show1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setLun71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Alun7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showm && 
                       <div><p>{mar71}</p><p>{mar72}</p> <p>{mar73}</p>
                       <button className="mod" onClick={()=>{
                           setShowm1(!showm1) 
                           setShowm(!showm)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShowm1(!showm1) 
                            setShowm(!showm)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showm1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMar71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amar7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>         
                   <div className="row1-col2">
                       {showmr && 
                       <div><p>{mer71}</p><p>{mer72}</p> <p>{mer73}</p>
                       <button className="mod" onClick={()=>{
                           setShowmr1(!showmr1) 
                           setShowmr(!showmr)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShowmr1(!showmr1) 
                            setShowmr(!showmr)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showmr1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMer71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amer7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showj && 
                       <div><p>{jeu71}</p><p>{jeu72}</p> <p>{jeu73}</p>
                       <button className="mod" onClick={()=>{
                          setShowj1(!showj1) 
                          setShowj(!showj)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShowj1(!showj1) 
                            setShowj(!showj)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showj1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setJeu71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Ajeu7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showv && 
                       <div><p>{ven71}</p><p>{ven72}</p> <p>{ven73}</p>
                       <button className="mod" onClick={()=>{
                          setShowv1(!showv1) 
                          setShowv(!showv)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShowv1(!showv1) 
                            setShowv(!showv)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showv1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setVen71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Aven7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {shows && 
                       <div><p>{sam71}</p><p>{sam72}</p> <p>{sam73}</p>
                       <button className="mod" onClick={()=>{
                            setShows1(!shows1) 
                            setShows(!shows)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShows1(!shows1) 
                            setShows(!shows)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {shows1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setSam71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Asam7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showd && 
                       <div><p>{dim71}</p><p>{dim72}</p> <p>{dim73}</p>
                       <button className="mod" onClick={()=>{
                             setShowd1(!showd1) 
                             setShowd(!showd)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                            setShowd1(!showd1) 
                            setShowd(!showd)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showd1 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setDim71(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim72(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim73(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Adim7} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
               </div>
               <div className="row1">
                   <div className="row1-col3">10H05-12H55</div>
                   <div className="row1-col2">
                       {showl10 && 
                       <div><p>{lun101}</p><p>{lun102}</p> <p>{lun103}</p>
                       <button className="mod" onClick={()=>{
                           setShowl10(!showl10) 
                           setShowl101(!showl101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowl10(!showl10) 
                           setShowl101(!showl101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showl101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setLun101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Alun10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>        
                   <div className="row1-col2">
                       {showm10 && 
                       <div><p>{mar101}</p><p>{mar102}</p> <p>{mar103}</p>
                       <button className="mod" onClick={()=>{
                           setShowm10(!showm10) 
                           setShowm101(!showm101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowm10(!showm10) 
                           setShowm101(!showm101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showm101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMar101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amar10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showmr10 && 
                       <div><p>{mer101}</p><p>{mer102}</p> <p>{mer103}</p>
                       <button className="mod" onClick={()=>{
                           setShowmr10(!showmr10) 
                           setShowmr101(!showmr101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowmr10(!showmr10) 
                           setShowmr101(!showmr101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showmr101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMer101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amer10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>                   
                   <div className="row1-col2">
                       {showj10 && 
                       <div><p>{jeu101}</p><p>{jeu102}</p> <p>{jeu103}</p>
                       <button className="mod" onClick={()=>{
                          setShowj10(!showj10) 
                          setShowj101(!showj101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowj10(!showj10) 
                           setShowj101(!showj101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showj101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setJeu101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Ajeu10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {showv10 && 
                       <div><p>{ven101}</p><p>{ven102}</p> <p>{ven103}</p>
                       <button className="mod" onClick={()=>{
                          setShowv10(!showv10) 
                          setShowv101(!showv101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowv10(!showv10) 
                           setShowv101(!showv101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showv101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setVen101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Aven10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {shows10 && 
                       <div><p>{sam101}</p><p>{sam102}</p> <p>{sam103}</p>
                       <button className="mod" onClick={()=>{
                          setShows10(!shows10) 
                          setShows101(!shows101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShows10(!shows10) 
                           setShows101(!shows101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {shows101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setSam101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Asam10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {showd10 && 
                       <div><p>{dim101}</p><p>{dim102}</p> <p>{dim103}</p>
                       <button className="mod" onClick={()=>{
                           setShowd10(!showd10) 
                           setShowd101(!showd101)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowd10(!showd10) 
                           setShowd101(!showd101)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showd101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setDim101(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim102(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim103(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Adim10} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
               </div>
               <div className="row1">
                   <div className="row1-col3">13H05-15H55</div>
                   <div className="row1-col2">
                       {showl13 && 
                       <div><p>{lun131}</p><p>{lun132}</p> <p>{lun133}</p>
                       <button className="mod" onClick={()=>{
                           setShowl13(!showl13) 
                           setShowl131(!showl131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowl13(!showl13) 
                           setShowl131(!showl131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showl101 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setLun131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Alun13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showm13 && 
                       <div><p>{mar131}</p><p>{mar132}</p> <p>{mar133}</p>
                       <button className="mod" onClick={()=>{
                           setShowm13(!showm13) 
                           setShowm131(!showm131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowm13(!showm13) 
                           setShowm131(!showm131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showm131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMar131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amar13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showmr13 && 
                       <div><p>{mer131}</p><p>{mer132}</p> <p>{mer133}</p>
                       <button className="mod" onClick={()=>{
                          setShowmr13(!showmr13) 
                          setShowmr131(!showmr131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowmr13(!showmr13) 
                           setShowmr131(!showmr131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showmr131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMer131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amer13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showj13 && 
                       <div><p>{jeu131}</p><p>{jeu132}</p> <p>{jeu133}</p>
                       <button className="mod" onClick={()=>{
                          setShowj13(!showj13) 
                          setShowj131(!showj131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowj13(!showj13) 
                           setShowj131(!showj131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showj131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setJeu131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Ajeu13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showv13 && 
                       <div><p>{ven131}</p><p>{ven132}</p> <p>{ven133}</p>
                       <button className="mod" onClick={()=>{
                          setShowv13(!showv13) 
                          setShowv131(!showv131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowv13(!showv13) 
                           setShowv131(!showv131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showv131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setVen131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Aven13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {shows13 && 
                       <div><p>{sam131}</p><p>{sam132}</p> <p>{sam133}</p>
                       <button className="mod" onClick={()=>{
                           setShows13(!shows13) 
                           setShows131(!shows131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShows13(!shows13) 
                           setShows131(!shows131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {shows131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setSam131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Asam13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showd13 && 
                       <div><p>{dim131}</p><p>{dim132}</p> <p>{dim133}</p>
                       <button className="mod" onClick={()=>{
                           setShowd13(!showd13) 
                           setShowd131(!showd131)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowd13(!showd13) 
                           setShowd131(!showd131)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showd131 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setDim131(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim132(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim133(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Adim13} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
               </div>
               <div className="row1">
                   <div className="row1-col3">16H05-18H55</div>
                   <div className="row1-col2">
                       {showl16 && 
                       <div><p>{lun161}</p><p>{lun162}</p> <p>{lun163}</p>
                       <button className="mod" onClick={()=>{
                           setShowl16(!showl16) 
                           setShowl161(!showl161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowl16(!showl16) 
                           setShowl161(!showl161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showl161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setLun161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Alun16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showm16 && 
                       <div><p>{mar131}</p><p>{mar132}</p> <p>{mar133}</p>
                       <button className="mod" onClick={()=>{
                           setShowm16(!showm16) 
                           setShowm161(!showm161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowm16(!showm16) 
                           setShowm161(!showm161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showm161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMar161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amar16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>                   
                   <div className="row1-col2">
                       {showmr16 && 
                       <div><p>{mer131}</p><p>{mer132}</p> <p>{mer133}</p>
                       <button className="mod" onClick={()=>{
                            setShowmr16(!showmr16) 
                            setShowmr161(!showmr161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowmr16(!showmr16) 
                           setShowmr161(!showmr161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showmr161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMer161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amer16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>                    
                   <div className="row1-col2">
                       {showj16 && 
                       <div><p>{jeu131}</p><p>{jeu132}</p> <p>{jeu133}</p>
                       <button className="mod" onClick={()=>{
                            setShowj16(!showj16) 
                            setShowj161(!showj161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowj16(!showj16) 
                           setShowj161(!showj161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showj161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setJeu161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Ajeu16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {showv16 && 
                       <div><p>{ven131}</p><p>{ven132}</p> <p>{ven133}</p>
                       <button className="mod" onClick={()=>{
                            setShowv16(!showv16) 
                            setShowv161(!showv161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowv16(!showv16) 
                           setShowv161(!showv161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showv161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setVen161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Aven16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {shows16 && 
                       <div><p>{sam131}</p><p>{sam132}</p> <p>{sam133}</p>
                       <button className="mod" onClick={()=>{
                            setShows16(!shows16) 
                            setShows161(!shows161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShows16(!shows16) 
                           setShows161(!shows161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {shows161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setSam161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Asam16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div> 
                   <div className="row1-col2">
                       {showd16 && 
                       <div><p>{dim131}</p><p>{dim132}</p> <p>{dim133}</p>
                       <button className="mod" onClick={()=>{
                            setShowd16(!showd16) 
                            setShowd161(!showd161)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowd16(!showd16) 
                           setShowd161(!showd161)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showd161 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setDim161(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim162(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim163(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Adim16} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
               </div>
               <div className="row1">
                   <div className="row1-col3">19H05-21H55</div>
                   <div className="row1-col2">
                       {showl19 && 
                       <div><p>{lun191}</p><p>{lun192}</p> <p>{lun193}</p>
                       <button className="mod" onClick={()=>{
                           setShowl19(!showl19) 
                           setShowl191(!showl191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowl19(!showl19) 
                           setShowl191(!showl191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showl191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setLun191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setLun193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Alun19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showm19 && 
                       <div><p>{mar191}</p><p>{mar192}</p> <p>{mar193}</p>
                       <button className="mod" onClick={()=>{
                           setShowm19(!showm19) 
                           setShowm191(!showm191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowm19(!showm19) 
                           setShowm191(!showm191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showm191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMar191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMar193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amar19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>  
                   <div className="row1-col2">
                       {showmr19 && 
                       <div><p>{mer191}</p><p>{mer192}</p> <p>{mer193}</p>
                       <button className="mod" onClick={()=>{
                          setShowmr19(!showmr19) 
                          setShowmr191(!showmr191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowmr19(!showmr19) 
                           setShowmr191(!showmr191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showmr191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setMer191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setMer193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Amer19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>                   
                   <div className="row1-col2">
                       {showj19 && 
                       <div><p>{jeu191}</p><p>{jeu192}</p> <p>{jeu193}</p>
                       <button className="mod" onClick={()=>{
                        setShowj19(!showj19) 
                        setShowj191(!showj191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowj19(!showj19) 
                           setShowj191(!showj191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showj191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setJeu191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setJeu193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Ajeu19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showv19 && 
                       <div><p>{ven191}</p><p>{ven192}</p> <p>{ven193}</p>
                       <button className="mod" onClick={()=>{
                       setShowv19(!showv19) 
                       setShowv191(!showv191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowv19(!showv19) 
                           setShowv191(!showv191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showv191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setVen191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setVen193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Aven19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {shows19 && 
                       <div><p>{sam191}</p><p>{sam192}</p> <p>{sam193}</p>
                       <button className="mod" onClick={()=>{
                       setShows19(!shows19) 
                       setShows191(!shows191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShows19(!shows19) 
                           setShows191(!shows191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {shows191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setSam191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setSam193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Asam19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
                   <div className="row1-col2">
                       {showd19 && 
                       <div><p>{dim191}</p><p>{dim192}</p> <p>{dim193}</p>
                       <button className="mod" onClick={()=>{
                        setShowd19(!showd19) 
                        setShowd191(!showd191)
                       }}><Icons.FaEdit className="blue"/></button>
                       <button className="sup" onClick={()=>{
                           setShowd19(!showd19) 
                           setShowd191(!showd191)
                       }}><Icons.FaTrash className="red"/></button>
                       </div>}
                       {showd191 &&
                        <form className="flex">
                            <Downshift
    onChange={selection => 
    setDim191(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Nom Enseignant" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items1
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim192(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="ul">
         <input {...getInputProps({ placeholder: "Salle" })} className="up"/>
         <ul {...getMenuProps()} >
          {isOpen
            ? items2
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <Downshift
    onChange={selection => 
    setDim193(selection.value)
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
         <input {...getInputProps({ placeholder: "Cours" })} />
         <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
                            </Downshift>
                            <button onClick={Adim19} className="mod"><Icons.FaPlus className="blue"/></button>
                        </form>
                       }
                   </div>
               </div>
            </div>
        </div>
        </div>
    );


                      }

export default Emploi1