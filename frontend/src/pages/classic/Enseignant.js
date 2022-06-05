import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Enseignant = ()=>{
    const [nom, setNom] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [prenom, setPrenom] = useState('')
    const [data , setData] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/enseignant").then((response)=>{
            setData(response.data)
        })
    },[])

    const deleteEnseignant =(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:4000/api/supprimer/enseignant",{
            nom:nom,
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Enseignant Supprimer Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }

    const submitEnseignant =(e)=>{
        Axios.post("http://localhost:4000/api/ajouter/enseignant",{
            nom:nom,
            prenom:prenom
        }).then(()=>{
            window.location.reload()
            alert("Enseignant Ajouter Avec Sucess");
        }).catch((error)=>{
            alert(error.data.error)
        })
    }

    const Modal =({close})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={submitEnseignant}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Un Enseignant</h3>
            <div className="form-group">
            <label>Nom</label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Enseignant"
                 onChange={(e) => setNom(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Prenom</label>
            <input type="text" required size="1" value={prenom} className="form-control" placeholder="Prenom Enseignant"
                onChange={(e) => setPrenom(e.target.value)}
            />
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
            <form className='form1' onSubmit={deleteEnseignant}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Un Enseignant</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Enseignant"
                 onChange={(e) => setNom(e.target.value)}
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
             {isLoading ? <LoadingSpinner/> :submitEnseignant}
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className="btn btn-success" onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
             </div>
        <BootstrapTable version='4' data={data} >
                  <TableHeaderColumn dataField='NomEnseignant'isKey={true} >Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='Prenom' >Prenom</TableHeaderColumn>
                </BootstrapTable>
        </div>
    );
}

export default Enseignant