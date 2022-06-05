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
                setShowl13(!show1) 
                setShowl131(!show)
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
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
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
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
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
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
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
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
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
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
                   <div className="row1-col2"><p></p><p></p> <p></p></div>
               </div>
            </div>
        </div>
        </div>
    );


}

export default Emploi1