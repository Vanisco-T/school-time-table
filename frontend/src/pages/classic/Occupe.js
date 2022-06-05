import React ,{useState,useEffect} from 'react'
import Axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner'

const Occupe = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [enseignant, setEnseignant] = useState('')
    const [salle, setSalle] = useState('')
    const [cour,setCour] = useState('')
    const [date,setDate]= useState('Lundi')
    const [plage, setPlage] = useState('7H05-9H55')
    const [data , setData] = useState([])
    const [data1, setData1] = useState([])
    const [specialite ,setSpecialite]=useState('')
    const [groupe,setGroupe]=useState('')
    const [filiere ,setFiliere] = useState('')
    const [niveau , setNiveau] = useState('')

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/select/filiere").then((response)=>{
            setData(response.data)
        })
        Axios.get("http://localhost:4000/api/select/niveau").then((response)=>{
            setData1(response.data)
        })
    },[])

    const submitOccupe =(e)=>{
        setIsLoading(true)
        e.preventDefault()
        Axios.post("http://localhost:4000/api/ajouter/dispense",{
            enseignant:enseignant,
            salle:salle,
            cour:cour,
            date:date,
            plage:plage,
            filiere: filiere,
            niveau:niveau,
            specialite:specialite,
            groupe:groupe
        }).then((result)=>{
            if (result.data.status === 'ok'){
           setTimeout(() => {
            setIsLoading(false);
          }, 2000);
            alert(" Ajouter Avec Sucess");
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

    return (
        <div className='container'>
             {isLoading ? <LoadingSpinner/> :submitOccupe}
        <form className='form1' onSubmit={submitOccupe}>
            <h3>Ajouter </h3>
            <div className="form-group">
            <label>Enseignant </label>
            <input type="text" min="1" value={enseignant} className="form-control" placeholder="Entre Le Nom De L'enseignant"
                 onChange={(e) => setEnseignant(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label>Salle</label>
            <input type="text" required size="1" value={salle} className="form-control" placeholder=" Entre La Salle "
                onChange={(e) => setSalle(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Cours</label>
            <input type="text" required size="1" value={cour} className="form-control" placeholder=" Entre Le Code Du Cours "
                onChange={(e) => setCour(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Jour</label>
            <select className='form-select'
                value={date}
                onChange={(e)=>setDate(e.target.value)}>
              
            <option>Lundi</option>
            <option>Mardi</option>
            <option>Mercredi</option>
            <option>Jeudi</option>
            <option>Vendredi</option>
            <option>Samedi</option>
            <option>Dimanche</option>                        
            </select>
            </div>
            <div className="form-group">
            <label>Plage</label>
            <select className='form-select'
                value={plage}
                onChange={(e)=>setPlage(e.target.value)}>
            <option>7H05-9H55</option>
            <option>10H05-12H55</option>
            <option>13H05-15H55</option>
            <option>16H05-18H55</option>
            <option>19H05-21H55</option>                     
            </select>
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
            <div className="form-group">
            <label>Specialite</label>
            <input type="text"  value={specialite} className="form-control" placeholder="Optionnel: Entre Le Nom De La Specialite "
                onChange={(e) => setSpecialite(e.target.value)}/>
            </div>
            <div className="form-group">
            <label>Groupe</label>
            <input type="text"  value={groupe} className="form-control" placeholder="Optionnnel: Entre Le Nom Du Groupe "
                onChange={(e) => setGroupe(e.target.value)}/>
            </div>
            <input type="submit" value="Ajouter" className="send"/>
        </form>
        </div>
    );
}

export default Occupe