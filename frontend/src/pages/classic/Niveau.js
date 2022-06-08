import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Niveau = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [nom, setNom] = useState('')
    const [capacite, setCapacite] = useState('')
    const [data , setData] = useState([])
    const [filiere ,setFiliere] = useState('Informatique')
    const [data1 , setData1] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/filiere").then((response)=>{
            setData(response.data)
        })
        Axios.get("http://localhost:4000/api/select/niveau1").then((response)=>{
            setData1(response.data)
        })
    },[])

    const deleteNiveau =(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:4000/api/supprimer/niveau",{
            nom:nom,
            filiere:filiere
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Niveau Supprime Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }

    const submitNiveau =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/niveau",{
            nom:nom,
            capacite:capacite,
            filiere: filiere
        }).then((result)=>{
           // console.log(result.data.status)
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
            window.location.reload()
            alert("Niveau Ajouter Avec Sucess");
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })
    }

    const Modal =({close})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={submitNiveau}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Un Niveau</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Niveau"
                 onChange={(e) => setNom(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Capacite</label>
            <input type="number" min="1" value={capacite} className="form-control" placeholder="Capacite Du Niveau"
                onChange={(e) => setCapacite(e.target.value)}
            />
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
            <form className='form1' onSubmit={deleteNiveau}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Un Niveau</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Niveau"
                 onChange={(e) => setNom(e.target.value)}
            />
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
            <button className='cancel1' onClick={()=>{close1(false)}}>Cancel</button>
            <input type="submit" value="Supprimer" className="send"/>
        </form>
        </div>
        </div>
        );
    }

    return (
        <div className='container'>
             {isLoading ? <LoadingSpinner/> :submitNiveau}
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className='btn btn-success' onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
        </div>
        <BootstrapTable version='4' data={data1} >
                  <TableHeaderColumn dataField='NomNiveau' isKey={true}>Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='Capacite' >Capacite</TableHeaderColumn>
                  <TableHeaderColumn dataField='NomFiliere' >Filiere</TableHeaderColumn>
                </BootstrapTable>
        </div>
    );
}

export default Niveau