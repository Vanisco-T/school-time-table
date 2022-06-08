import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Cour = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('')
    const [intitule, setIntitule] = useState('')
    const [specialite,setSpecialite]=useState('')
    const [data , setData] = useState([])
    const [data1, setData1] = useState([])
    const [filiere ,setFiliere] = useState('Informatique')
    const [niveau , setNiveau] = useState('Licence 1')
    const [data2 , setData2] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/filiere").then((response)=>{
            setData(response.data)
        })
        Axios.get("http://localhost:4000/api/select/niveau").then((response)=>{
            setData1(response.data)
        })
        Axios.get("http://localhost:4000/api/select/cours").then((response)=>{
            setData2(response.data)
        })
    },[])


    const deleteCours =(e)=>{
        Axios.post("http://localhost:4000/api/supprimer/cours",{
            code:code,
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Cours Supprimer Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }

    const submitCour =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/cour",{
            code:code,
            intitule:intitule,
            filiere: filiere,
            specialite:specialite,
            niveau:niveau
        }).then((result)=>{
            if (result.data.status === 'ok'){
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          window.location.reload()
            alert("Cours Ajouter Avec Sucess");
            }
            else{
                setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                  alert(result.data.error)
            }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })
    }

    const Modal =({close})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={submitCour}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Un Cour</h3>
            <div className="form-group">
            <label>Code </label>
            <input type="text" required size="1" value={code} className="form-control" placeholder="Code UE"
                 onChange={(e) => setCode(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>intitule</label>
            <input type="text" value={intitule} className="form-control" placeholder=" Intitule "
                onChange={(e) => setIntitule(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Specialite</label>
            <input type="text"  value={specialite} className="form-control" placeholder=" Optionnel:Ajouter Le Nom de La Specialite"
                onChange={(e) => setSpecialite(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Filiere</label>
            <select className="form-select" 
                value={filiere}
                onChange={(e) => setFiliere(e.target.value)}   >
              {
       data.map((resul)=>(<option title={resul.IdFiliere} >{resul.NomFiliere}</option>))
      }
            </select>
            </div>
            <div className="form-group">
            <label>Niveau</label>
            <select className="form-select" 
                value={niveau}
                onChange={(e) => setNiveau(e.target.value)}   >
              {
       data1.map((resul)=>(<option title={resul.IdNiveau} >{resul.NomNiveau}</option>))
      }
            </select>
            </div>
            <button className='cancel1' onClick={()=>{close(false)}}>Cancel</button>
            <input type="submit" value="Ajouter" className="send"/>
        </form>
        </div>
        </div>
        );
    }

    const Modal1 =({close1})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={deleteCours}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Un Cours</h3>
            <div className="form-group">
            <label>Code Cour </label>
            <input type="text" required size="1" value={code} className="form-control" placeholder="Nom Cours"
                 onChange={(e) => setCode(e.target.value)}
            />
            </div>
            <button className='cancel1' onClick={()=>{close1(false)}}>Cancel</button>
            <input type="submit" value="Supprimer" className="send"/>
        </form>
        </div>
        </div>
        );
    }


    return (
        <div className='container'>
             {isLoading ? <LoadingSpinner/> :submitCour}
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className='btn btn-success' onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
        </div>
        <BootstrapTable version='4' data={data2} >
                  <TableHeaderColumn dataField='CodeCours'isKey={true} >Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='Intitule'>Intitule</TableHeaderColumn>
                  <TableHeaderColumn dataField='NomNiveau'>Niveau</TableHeaderColumn>
                  <TableHeaderColumn dataField='NomFiliere'>Filiere</TableHeaderColumn>

                </BootstrapTable>
        </div>
    );
}

export default Cour