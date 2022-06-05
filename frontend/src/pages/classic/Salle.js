import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Salle = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [nom, setNom] = useState('')
    const [capacite, setCapacite] = useState('')
    const [data , setData] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/salle").then((response)=>{
            setData(response.data)
        })
    },[])

    const deleteSalle =(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:4000/api/supprimer/salle",{
            nom:nom,
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Salle Supprime Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }
    const submitSalle =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/salle",{
            nom:nom,
            capacite:capacite,
        }).then((result)=>{
           if (result.data.status === 'ok'){
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
            window.location.reload()
            alert("Salle Ajouter Avec Sucess");
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
            <form className='form1' onSubmit={submitSalle}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Une Salle</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Salle"
                 onChange={(e) => setNom(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Capacite</label>
            <input type="number" min="1" value={capacite} className="form-control" placeholder="Capacite De La Salle "
                onChange={(e) => setCapacite(e.target.value)}
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
            <form className='form1' onSubmit={deleteSalle}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Une Salle</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Salle"
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
             {isLoading ? <LoadingSpinner/> :submitSalle}
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className='btn btn-success' onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
             </div>
        <BootstrapTable version='4' data={data} >
                  <TableHeaderColumn dataField='NomSalle' isKey={true}>Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='Capacite' >Capacite</TableHeaderColumn>
                </BootstrapTable>
        </div>
    );
}

export default Salle