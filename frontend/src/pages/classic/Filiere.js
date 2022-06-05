import React ,{useState ,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Filiere = ()=>{
    const [nom, setNom] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [data , setData] = useState([])
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    
    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/filiere").then((response)=>{
            setData(response.data)
        })
    },[])


    const deleteFiliere =(e)=>{
        Axios.post("http://localhost:4000/api/supprimer/filiere",{
            nom:nom,
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Filiere Supprimer Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }

    const submitFiliere =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/filiere",{
            nom:nom,
        }).then((result)=>{
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
         if(result.data.status === 'ok'){
            window.location.reload()
            alert("Ajouter Avec Success")
         }
         else{
            alert(result.data.error)  
         }
        }).catch((error)=>{
            alert(error.data.error)
        })  
        
    }

    const Modal =({close})=>{
        return(
            <div className='Modal'>
            <div className='ModalContainer'>
            <form className='form1' onSubmit={submitFiliere}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Une Filiere</h3>
            <div className="form-group">
            <label>Nom</label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Filiere"
                 onChange={(e) => setNom(e.target.value)}
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
            <form className='form1' onSubmit={deleteFiliere}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Une Filiere</h3>
            <div className="form-group">
            <label>Nom </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Filiere"
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
            {isLoading ? <LoadingSpinner/> :submitFiliere}
            {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className='btn btn-success' onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
             </div>
        <BootstrapTable version='4' data={data} >
                  <TableHeaderColumn dataField='NomFiliere'isKey={true} >Nom</TableHeaderColumn>
                </BootstrapTable>
        </div>
    );
}

export default Filiere