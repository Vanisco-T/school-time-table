import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const Groupe = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [capacite, setCapacite] = useState('')
    const [nom, setNom] = useState('')
    const [data , setData] = useState([])
    const [data1, setData1] = useState([])
    const [filiere ,setFiliere] = useState('')
    const [niveau , setNiveau] = useState('')
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
        Axios.get("http://localhost:4000/api/select/groupe").then((response)=>{
            setData2(response.data)
        })
    },[])


    const deleteGroupe =(e)=>{
        console.log(nom)
        Axios.post("http://localhost:4000/api/supprimer/groupe",{
            nom:nom,
            filiere:filiere,
            niveau:niveau
        }).then((result)=>{
           if (result.data.status === 'ok'){
            window.location.reload()
            alert("Groupe Supprimer Avec Sucess");
        }
        else{
            alert(result.data.error)
        }
        }).catch((error)=>{
            console.log(error)
            setIsLoading(false)
        })

    }

    const submitGroupe =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/groupe",{
            capacite:capacite,
            nom:nom,
            filiere: filiere,
            niveau:niveau
        }).then((result)=>{
            if (result.data.status === 'ok'){
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          window.location.reload()
            alert("Groupe Ajouter Avec Sucess");
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
            <form className='form1' onSubmit={submitGroupe}>
            <button className='cancel' onClick={()=>{close(false)}}>X</button>
            <h3>Ajouter  Un Groupe</h3>
            <div className="form-group">
            <label>Capacite </label>
            <input type="number" required size="1" value={capacite} className="form-control" placeholder="Capacite Du Groupe"
                 onChange={(e) => setCapacite(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Nom</label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder=" Nom Groupe "
                onChange={(e) => setNom(e.target.value)}/>
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
            <form className='form1' onSubmit={deleteGroupe}>
            <button className='cancel' onClick={()=>{close1(false)}}>X</button>
            <h3>Supprimer  Un Groupe</h3>
            <div className="form-group">
            <label>Nom Groupe </label>
            <input type="text" required size="1" value={nom} className="form-control" placeholder="Nom Groupe"
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
            <button className='cancel1' onClick={()=>{close1(false)}}>Cancel</button>
            <input type="submit" value="Supprimer" className="send"/>
        </form>
        </div>
        </div>
        );
    }

    return (
        <div className='container'>
             {isLoading ? <LoadingSpinner/> :submitGroupe}
             {open && <Modal close={setOpen}/>}
             {open1 && <Modal1 close1={setOpen1}/>}
             <div className='dis'>
             <button className='btn btn-success' onClick={()=>{setOpen(true)}}>Ajouter</button>
             <button className='btn btn-success' onClick={()=>{setOpen1(true)}}>Supprimer</button>
             <button className='btn btn-success' >Modifier</button>
  </div>
        <BootstrapTable version='4' data={data2} >
                  <TableHeaderColumn dataField='NomGroupe'isKey={true} >Nom</TableHeaderColumn>
                  <TableHeaderColumn dataField='Capacite'>Capacite</TableHeaderColumn>
                  <TableHeaderColumn dataField='NomNiveau'>Niveau</TableHeaderColumn>
                  <TableHeaderColumn dataField='NomFiliere'>Filiere</TableHeaderColumn>
                </BootstrapTable>
        </div>
    );
}

export default Groupe