import mysql from 'mysql2/promise';
import express from "express";
const app = express();
import bodyParser from "body-parser"
import cors from 'cors'
import { query } from 'express';
app.use(cors())
app.use(express.json())
//This is a sample middle ware
app.use(bodyParser.urlencoded({extended:true}))
//Creation de La connection avec la BD
const connection = await mysql.createConnection({
  host:'127.0.0.1', 
  user: 'vanisco',
  password:'chokoPIKAN2035@#',
  database: 'Bd'
});
//Simple requete de test dans la BD pour tester la
//Tous Les Operation sur les table
//Pour La Table Enseignant
app.post("/api/ajouter/enseignant",(req,res)=>{
  const nom = req.body.nom
  const prenom = req.body.prenom
  try {
  const sqlInsert="INSERT INTO Enseignant (NomEnseignant,Prenom) VALUES (?,?) "
  connection.query(sqlInsert,[nom,prenom])
  res.json({status:'ok'})
  } catch (error) {
  console.log(error);
  res.json({status:'error',error:"Impossible D'ajouter"})

  }
})
app.get("/api/select/enseignant",(req,res)=>{
  (async ()=>{
    const sqlSelect="SELECT * FROM Enseignant"
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/enseignant",(req,res)=>{
  const nom =req.body.nom
  const query1 = `SELECT * FROM Enseignant WHERE NomEnseignant=?`
  connection.query(query1,[nom]).then((result)=>{
    if(result[0].length !==0){
      const query = `DELETE FROM Enseignant WHERE NomEnseignant=?`
    connection.query(query,[nom]).then(()=>{
    res.json({status:'ok'}) 
  })
    }
    else{
      res.json({status:'error',error:"Cette Enseignant N'Existe Pas"})
    }
  })

})
//Pour La Table Filiere
app.post("/api/ajouter/filiere",(req,res)=>{
  const nom = req.body.nom
    try {
      const query = "select * from Filiere where NomFiliere=?"
      connection.query(query,[nom]).then((result)=>{
        if(result[0].length === 0 ){
          const sqlInsert="INSERT INTO Filiere (NomFiliere) VALUES (?) "
          connection.query(sqlInsert,[nom])
          res.json({status:'ok'}) 
        }
        else{
          res.json({status:'error',error:"Filiere Deja Existante"}) 
        }
      })
      
      } catch (error) {
      console.log(error);
      res.json({status:'error',error:"Filiere Deja Existante"})
      } 
   
})
app.get("/api/select/filiere",(req,res)=>{
    (async ()=>{
      const sqlSelect="SELECT * FROM Filiere"
      const [row] =await connection.query(sqlSelect)
      //console.log(row)
      res.send(row)
    })()
  }) 
  app.post("/api/supprimer/filiere",(req,res)=>{
    const nom =req.body.nom
    const query1 = `SELECT * FROM Filiere WHERE NomFiliere=?`
    connection.query(query1,[nom]).then((result)=>{
      if(result[0].length !==0){
        const query = `DELETE FROM Filiere WHERE NomFiliere=?`
      connection.query(query,"").then(()=>{
      res.json({status:'ok'}) 
    })
      }
      else{
        res.json({status:'error',error:"Cette Filiere N'Existe Pas"})
      }
    })
  
  })
//Pour La Table Niveau
app.post("/api/ajouter/niveau",(req,res)=>{
  const nom = req.body.nom
  const capacite = req.body.capacite
  const filiere = req.body.filiere
  const sqlSelect="SELECT IdFiliere FROM Filiere WHERE NomFiliere=?"
   connection.query(sqlSelect,[filiere]).then((result)=>{
    try {
      const sqlInsert="INSERT INTO Niveau (Capacite,NomNiveau,IdFiliere) VALUES (?,?,?) "
      connection.query(sqlInsert,[capacite,nom,result[0][0].IdFiliere])
      res.json({status:'ok'})
      } catch (error) {
      console.log(error);
      res.json({status:'error',error:"Impossible D'ajouter"})
      } 
  })    
})
app.get("/api/select/niveau",(req,res)=>{
  (async ()=>{
    const sqlSelect="SELECT * FROM Niveau"
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.get("/api/select/niveau1",(req,res)=>{
  (async ()=>{
    const sqlSelect="SELECT * FROM Niveau,Filiere Where Niveau.IdFiliere=Filiere.IdFiliere"
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/niveau",(req,res)=>{
  const filiere=req.body.filiere
  const niveau=req.body.nom
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
          connection.query(query,values).then((result)=>{
            if(result[0].length !==0){
              console.log(result[0][0].IdNiveau);
              const query1=`DELETE FROM Niveau WHERE IdFiliere=? AND IdNiveau=?`
              connection.query(query1,[/* result[0][0].IdFiliere,result[0][0].IdNiveau */"",""]).then(()=>{
                res.json({status:'ok'})
              })
            }
            else{
           res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"}) 
            }
          })   

})
//Pour La Table Salle
app.get("/api/select/salle",(req,res)=>{
  (async ()=>{
    const sqlSelect="SELECT * FROM Salle"
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/salle",(req,res)=>{
  const nom =req.body.nom
  const query1 = `SELECT * FROM Salle WHERE NomSalle=?`
  connection.query(query1,[nom]).then((result)=>{
    if(result[0].length !==0){
      const query = `DELETE FROM Salle WHERE NomSalle=?`
    connection.query(query,[nom]).then(()=>{
    res.json({status:'ok'}) 
  })
    }
    else{
      res.json({status:'error',error:"Cette Salle N'Existe Pas"})
    }
  })

})
app.post("/api/ajouter/salle",(req,res)=>{
  const nom = req.body.nom
  const capacite = req.body.capacite
    try {
      const query = "select * from Salle where NomSalle=?"
      connection.execute(query,[nom]).then((result)=>{
        if(result[0].length === 0 ){
          const sqlInsert="INSERT INTO Salle (NomSalle,Capacite) VALUES (?,?) "
          connection.query(sqlInsert,[nom,capacite])
          res.json({status:'ok'}) 
        }
        else{
          console.log(result[0])
          res.json({status:'error',error:"Salle Deja Existante"}) 
        }
      })
      
      } catch (error) {
      console.log(error);
      res.json({status:'error',error:"Salle Deja Existante"})
      } 
   
})
//Pour La Table Cours
app.get("/api/select/cours",(req,res)=>{
  (async ()=>{
    const sqlSelect=`select * from Cours,Niveau,Filiere where 
      Cours.IdNiveau=Niveau.IdNiveau AND
      Cours.IdFiliere=Filiere.IdFiliere`
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/cours",(req,res)=>{
  const nom =req.body.code
  const query1 = `SELECT * FROM Cours WHERE CodeCours=?`
  connection.query(query1,[nom]).then((result)=>{
    console.log(result[0])
    if(result[0].length !==0){
      const query = `DELETE FROM Cours WHERE CodeCours=?`
    connection.query(query,[nom]).then(()=>{
    res.json({status:'ok'}) 
  })
    }
    else{
      res.json({status:'error',error:"Ce Cours N'Existe Pas"})
    }
  })

})
app.post("/api/ajouter/cour",(req,res)=>{
  const code = req.body.code
  const intitule = req.body.intitule
  const filiere = req.body.filiere
  const specialite = req.body.specialite
  const niveau = req.body.niveau
  
  const query0 = `SELECT * FROM Cours WHERE CodeCours=?` 
  connection.query(query0,[code]).then((result0)=>{
    if (result0[0].length ===0){
      const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      //console.log(result[0])
      if(result[0].length !==0){
        if(specialite ===""){
          try {
            const sqlInsert=`INSERT INTO Cours 
            (CodeCours,Intitule,IdFiliere,IdNiveau) 
            VALUES (?,?,?,?)`
            connection.query(sqlInsert,[code,intitule,result[0][0].IdFiliere,result[0][0].IdNiveau])
            res.json({status:'ok'})
            } catch (error) {
            console.log(error);
            res.json({status:'error',error:"Impossible D'ajouter"})
            }  
          }
          else{
            try {
              const query1= `SELECT IdSpecialite from Specialite WHERE NomSpecialite=?`
              connection.query(query1,[specialite]).then((result1)=>{
                if(result1[0].length !==0){
                  console.log(result1[0])
                 const sqlInsert=`INSERT INTO Cours 
                 (CodeCours,Intitule,IdSpecialite,IdFiliere,IdNiveau) 
                 VALUES (?,?,?,?,?) `
                connection.query(sqlInsert,[code,intitule,result1[0][0].IdSpecialite,result[0][0].IdFiliere,result[0][0].IdNiveau])
                res.json({status:'ok'}) 
                console.log(5)
              }
              else{
                res.json({status:'error',error:"Cette Specialite N'Existe Pas"})
              }
              })
              
              } catch (error) {
              console.log(error);
              res.json({status:'error',error:"Impossible D'ajouter"})
              } 
          }
        }
    else{
      res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})

    }
  })   
    }
    else{
      res.json({status:'error',error:"Ce Cours Est Deja Ajouter"})
    }
  }) 
})
//Pour La Table Groupe
app.get("/api/select/groupe",(req,res)=>{
  (async ()=>{
    const sqlSelect=`select * from Groupe,Niveau,Filiere 
    where Groupe.IdNiveau=Niveau.IdNiveau AND 
    Groupe.IdFiliere=Filiere.IdFiliere`
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/groupe",(req,res)=>{
  const group=req.body.nom
  const filiere=req.body.filiere
  const niveau=req.body.niveau
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
      connection.query(query,values).then((result)=>{
        console.log(result[0])
      if(result[0].length !==0){
        console.log(result[0])
        const query1=`SELECT * FROM Groupe WHERE NomGroupe=? AND IdFiliere=? AND IdNiveau=?`
        connection.query(query1,[group,result[0][0].IdFiliere,result[0][0].IdNiveau]).then((result1)=>{
          if(result1[0].length !==0){
            console.log(result1[0])
        const query2=`DELETE FROM Groupe WHERE NomGroupe=? AND IdFiliere=? AND IdNiveau=?`
        connection.query(query2,[group,result[0][0].IdFiliere,result[0][0].IdNiveau]).then(()=>{
          res.json({status:'ok'})
        })
          }
          else{
            res.json({status:'error',error:"Ce Groupe N'est Pas Dans Ce Niveau"})
          }
        })
      }
      else{
        res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
      }
    })
})
app.post("/api/ajouter/groupe",(req,res)=>{
  const capacite = req.body.capacite
  const nom = req.body.nom
  const filiere = req.body.filiere
  const niveau = req.body.niveau
    const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      //console.log(result[0])
      if(result[0].length !==0){
          try {
            const query = "select * from Groupe where NomGroupe=? AND IdFiliere=? AND IdNiveau=?"
            connection.execute(query,[nom,result[0][0].IdFiliere,result[0][0].IdNiveau]).then((result1)=>{
              if(result1[0].length === 0){
            const sqlInsert=`INSERT INTO Groupe 
            (CapaciteGroupe,NomGroupe,IdFiliere,IdNiveau) 
            VALUES (?,?,?,?) `
            connection.query(sqlInsert,[capacite,nom,result[0][0].IdFiliere,result[0][0].IdNiveau])
            /* const query1 = "select IdGroupe,IdNiveau from Groupe where NomGroupe=?"
            connection.execute(query1,[nom]).then((result2)=>{
              const query2 = "Select IdCours FROM Cours WHERE IdNiveau=?"
              connection.execute(query2,[result2[0][0].IdNiveau]).then((result3)=>{
                console.log(result3[0])
                const query3 = "INSERT INTO Appartient (IdGroupe,IdCours) VALUES (?,?)"
                connection.execute(query3,[result2[0][0].IdGroupe,result3[0][0].IdCours])
                res.json({status:'ok'})
              })
            }) */
              res.json({status:'ok'})
              }
              else{
                res.json({status:'error',error:"Groupe Deja Existante"})
              }
            })
            } catch (error) {
            console.log(error);
            res.json({status:'error',error:"Impossible D'ajouter"})
            }  
          } 
    else{
      res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
    }
  })    
})

//Pour La Table Specialite
app.get("/api/select/specialite",(req,res)=>{
  (async ()=>{
    const sqlSelect=`select * from 
    Specialite,Niveau,Filiere where Specialite.IdNiveau=Niveau.IdNiveau 
    AND Specialite.IdFiliere=Filiere.IdFiliere`
    const [row] =await connection.query(sqlSelect)
    //console.log(row)
    res.send(row)
  })()
})
app.post("/api/supprimer/specialite",(req,res)=>{
  const group=req.body.nom
  const filiere=req.body.filiere
  const niveau=req.body.niveau
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
      connection.query(query,values).then((result)=>{
        console.log(result[0])
      if(result[0].length !==0){
        console.log(result[0])
        const query1=`SELECT * FROM Specialite WHERE NomGroupe=? AND IdFiliere=? AND IdNiveau=?`
        connection.query(query1,[group,result[0][0].IdFiliere,result[0][0].IdNiveau]).then((result1)=>{
          if(result1[0].length !==0){
            console.log(result1[0])
        const query2=`DELETE FROM Groupe WHERE NomSpecialite=? AND IdFiliere=? AND IdNiveau=?`
        connection.query(query2,[group,result[0][0].IdFiliere,result[0][0].IdNiveau]).then(()=>{
          res.json({status:'ok'})
        })
          }
          else{
            res.json({status:'error',error:"Cette Specialite N'est Pas Dans Ce Niveau"})
          }
        })
      }
      else{
        res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
      }
    })
})
app.post("/api/ajouter/specialite",(req,res)=>{
  const capacite = req.body.capacite
  const nom = req.body.nom
  const filiere = req.body.filiere
  const niveau = req.body.niveau
    const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      //console.log(result[0])
      if(result[0].length !==0){
          try {
            const query = "select * from Specialite where NomSpecialite=? AND IdNiveau=? AND IdFiliere=?"
            connection.execute(query,[nom,result[0][0].IdNiveau,result[0][0].IdFiliere]).then((result1)=>{
              if(result1[0].length === 0){
            const sqlInsert=`INSERT INTO Specialite 
            (Capacite,NomSpecialite,IdFiliere,IdNiveau) VALUES (?,?,?,?) `
            connection.query(sqlInsert,[capacite,nom,result[0][0].IdFiliere,result[0][0].IdNiveau])
            res.json({status:'ok'})
              }
              else{
                res.json({status:'error',error:"Specialite Deja Existante"})
              }
            })
            } catch (error) {
            console.log(error);
            res.json({status:'error',error:"Impossible D'ajouter"})
            }  
          } 
    else{
      res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})

    }
  })    
})

//Pour La Table Occupe
app.post("/api/ajouter/dispense",(req,res)=>{
            const enseignant=req.body.enseignant
            const salle=req.body.salle
            const cour=req.body.cour
            const date=req.body.date
            const plage=req.body.plage
            const filiere= req.body.filiere
            const niveau=req.body.niveau
            const specialite=req.body.specialite
            const groupe=req.body.groupe

            const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      if(result[0].length !==0){
        try {
          if(specialite !==''){
            const query1 = `SELECT IdNiveau FROM Niveau WHERE NomNiveau=?`
            connection.query(query1,[niveau]).then((result1)=>{
              const query2 =`SELECT IdNiveau,IdSpecialite,Capacite 
              FROM Specialite WHERE NomSpecialite=? AND IdNiveau=?`
              connection.query(query2,[specialite,result1[0][0].IdNiveau]).then((result2)=>{
                console.log(result2[0].length)
                if(result2[0].length !==0){
                  const query3 = `SELECT IdSalle,Capacite FROM Salle WHERE NomSalle=?`
                  connection.query(query3,[salle]).then((result3)=>{
                    if(result3[0].length===0){
                      res.json({status:'error',error:"Cette Salle N'existe Pas"}) 
                    }
                    else{
                          const query4=`SELECT * FROM Occupe WHERE IdSalle=? AND date=? AND plage=?`
                          connection.query(query4,[result3[0][0].IdSalle,date,plage]).then((result4)=>{
                            if(result4[0].length !==0){
                              res.json({status:'error',error:"Cette Salle N'est Pas Libre"}) 
                            } 
                          else{ 
                            const query7=`SELECT * FROM Occupe WHERE IdSpecialite=? AND date=? AND plage=?`
                            connection.query(query7,[result2[0][0].IdSpecialite,date,plage]).then((result7)=>{
                              if(result7[0].length !==0){
                                res.json({status:'error',error:"Cette Specialite  N'est Pas Libre"})  
                              }
                              else{
                                const query8= `SELECT * FROM Cours,Specialite WHERE Cours.CodeCours=?
                                 AND Specialite.IdSpecialite=?`
                                connection.query(query8,[cour,result2[0][0].IdSpecialite]).then((result8)=>{
                                  if (result8[0].length ===0){
                                    res.json({status:'error',error:"Ce Cour N'Appartient Pas A Cette Specialite"})   
                                  }
                                  else{
                                    if(result2[0][0].Capacite > result3[0][0].Capacite){
                                      res.json({status:'error',error:"La Capacite De La Salle Insuffisant"})   
                                    }
                                    else{
                                      const query5 =`SELECT IdEnseignant FROM Enseignant WHERE NomEnseignant=?`  
                                      connection.query(query5,enseignant).then((result5)=>{
                                        if(result5[0].length === 0){
                                          res.json({status:'error',error:"Pas D'enseignant de ce nom"}) 
                                        } 
                                        else{
                                          const query10=`SELECT * FROM Occupe WHERE IdEnseignant=?
                                           AND date=? AND plage=?`
                                          connection.query(query10,[result5[0][0].IdEnseignant,date,plage]).then((result10)=>{
                                            if(result10[0].length !==0){
                                              res.json({status:'error',error:"Cette Enseignant N'est Pas Libre"})  
                                            } 
                                            else{
                                              const query9=`INSERT INTO Occupe 
                                              (IdNiveau,IdSalle,IdCours,Date,Plage,IdSpecialite,IdEnseignant) 
                                              VALUES(?,?,?,?,?,?,?)`
                                              connection.query(query9,[result1[0][0].IdNiveau,result3[0][0].IdSalle,result8[0][0].IdCours,date,plage,result2[0][0].IdSpecialite,result5[0][0].IdEnseignant])
                                              res.json({status:'ok'}) 
                                            }
                                          })
                                        }
                                      })
                                    }
                                  }
                                })
                              }
                            })
                          }
                         })
                       }
                    })
                 }
                else{
                  res.json({status:'error',error:"Cette Specialite N'est Pas Dans Ce Niveau"})    
                 }
              })
            })
          }
          else{
            if(groupe !==''){
              const query1 = `SELECT IdNiveau FROM Niveau WHERE NomNiveau=?`
              connection.query(query1,[niveau]).then((result1)=>{
                const query2 =`SELECT IdNiveau,IdGroupe,CapaciteGroupe FROM Groupe WHERE NomGroupe=? AND IdNiveau=?`
                connection.query(query2,[groupe,result1[0][0].IdNiveau]).then((result2)=>{
                  console.log(result2[0].length)
                  if(result2[0].length !==0){
                    const query3 = `SELECT IdSalle,Capacite FROM Salle WHERE NomSalle=?`
                    connection.query(query3,[salle]).then((result3)=>{
                      if(result3[0].length===0){
                        res.json({status:'error',error:"Cette Salle N'existe Pas"}) 
                      }
                      else{
                            const query4=`SELECT * FROM Occupe WHERE IdSalle=? AND date=? AND plage=?`
                            connection.query(query4,[result3[0][0].IdSalle,date,plage]).then((result4)=>{
                              if(result4[0].length !==0){
                                res.json({status:'error',error:"Cette Salle N'est Pas Libre"}) 
                              } 
                            else{ 
                              const query7=`SELECT * FROM Occupe WHERE IdGroupe=? AND date=? AND plage=?`
                              connection.query(query7,[result2[0][0].IdGroupe,date,plage]).then((result7)=>{
                                if(result7[0].length !==0){
                                  res.json({status:'error',error:"Ce Groupe  N'est Pas Libre"})  
                                }
                                else{
                                  const query8= `SELECT * FROM Cours,Groupe WHERE Cours.CodeCours=? AND Groupe.IdGroupe=?`
                                  connection.query(query8,[cour,result2[0][0].IdGroupe]).then((result8)=>{
                                    if (result8[0].length ===0){
                                      res.json({status:'error',error:"Ce Cour N'Appartient Pas A Ce Groupe"})   
                                    }
                                    else{
                                      if(result2[0][0].Capacite > result3[0][0].Capacite){
                                        res.json({status:'error',error:"La Capacite De La Salle Insuffisant"})   
                                      }
                                      else{
                                        const query9=`INSERT INTO Occupe (IdNiveau,IdSalle,IdCours,Date,Plage,IdGroupe) VALUES(?,?,?,?,?,?)`
                                        connection.query(query9,[result1[0][0].IdNiveau,result3[0][0].IdSalle,result8[0][0].IdCours,date,plage,result2[0][0].IdGroupe])
                                        res.json({status:'ok'})   
                                      }
                                    }
                                  })
                                }
                              })
                            }
                           })
                         }
                      })
                   }
                  else{
                    res.json({status:'error',error:"Ce Groupe N'est Pas Dans Ce Niveau"})    
                   }
                })
              })
            }
        else{
              const query1 = `SELECT IdNiveau,Capacite FROM Niveau WHERE NomNiveau=?`
              connection.query(query1,[niveau]).then((result1)=>{
                const query2 =`SELECT IdNiveau,Capacite FROM Niveau WHERE NomNiveau=?`
                connection.query(query2,[niveau]).then((result2)=>{
                  if(result2[0].length ===0){
                    res.json({status:'error',error:"Ce Niveau N'existe Pas"}) 
                  }
                  else{
                    const query3 = `SELECT IdSalle,Capacite FROM Salle WHERE NomSalle=?`
                    connection.query(query3,[salle]).then((result3)=>{
                      if(result3[0].length===0){
                        res.json({status:'error',error:"Cette Salle N'existe Pas"}) 
                      }
                      else{
                        const query4=`SELECT * FROM Occupe WHERE IdSalle=? AND date=? AND plage=?`
                        connection.query(query4,[result3[0][0].IdSalle,date,plage]).then((result4)=>{
                          if(result4[0].length !==0){
                            res.json({status:'error',error:"Cette Salle N'est Pas Libre"}) 
                          }
                          else{
                            const query5 =`SELECT IdEnseignant FROM Enseignant WHERE NomEnseignant=?`
                            connection.query(query5,[enseignant]).then((result5)=>{
                              if(result5[0].length === 0){
                                res.json({status:'error',error:"Pas D'enseignant de ce nom"}) 
                              }
                              else{
                                const query6=`SELECT * FROM Occupe WHERE IdEnseignant=? AND date=? AND plage=?`
                                connection.query(query6,[result5[0][0].IdEnseignant,date,plage]).then((result6)=>{
                                  if(result6[0].length !==0){
                                    res.json({status:'error',error:"Cette Enseignant N'est Pas Libre"})  
                                  }
                                  else{
                                    const query7=`SELECT * FROM Occupe WHERE IdNiveau=? AND date=? AND plage=?`
                                    connection.query(query7,[result1[0][0].IdNiveau,date,plage]).then((result7)=>{
                                      if(result7[0].length !==0){
                                        res.json({status:'error',error:"Ce Niveau N'est Pas Libre"})  
                                      }
                                      else{
                                        const query8= `SELECT * FROM Cours WHERE CodeCours=? AND IdNiveau=?`
                                        connection.query(query8,[cour,result1[0][0].IdNiveau]).then((result8)=>{
                                          if (result8[0].length === 0){
                                            res.json({status:'error',error:"Ce Cours N'est Pas Dans Ce Niveau"})   
                                          }
                                          else{
                                            if(result2[0][0].Capacite > result3[0][0].Capacite){
                                              res.json({status:'error',error:"La Capacite De La Salle Insuffisant"})   
                                            }
                                            else{
                                              const query9=`INSERT INTO Occupe (IdNiveau,IdEnseignant,IdSalle,IdCours,Date,Plage) VALUES(?,?,?,?,?,?)`
                                              connection.query(query9,[result1[0][0].IdNiveau,result5[0][0].IdEnseignant,result3[0][0].IdSalle,result8[0][0].IdCours,date,plage])
                                              res.json({status:'ok'})   
                                            }
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              })
            }
          }
        } catch (error) {
          console.log(error)
          res.json({status:'error',error:"Impossible D'ajouter"})
        }
      }
      else{
        res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
      }
    })

})

  //Pour Le Niveau
app.post("/api/select/dispense/niveau",(req,res)=>{
  const filiere= req.body.filiere
  const niveau=req.body.nom
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      if(result[0].length !==0){
        (async ()=>{
          const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle,Groupe 
          WHERE Niveau.IdNiveau=? 
          AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
          Occupe.IdEnseignant=Enseignant.IdEnseignant AND
          Occupe.IdCours=Cours.IdCours AND
          Occupe.IdSalle=Salle.IdSalle AND
          Occupe.IdGroupe=Groupe.IdGroupe`
          const [row] =await connection.query(query1,[result[0][0].IdNiveau])
          const query2=`SELECT * FROM Occupe,Niveau,Cours,Salle,Groupe WHERE Niveau.IdNiveau=?
           AND Occupe.IdNiveau=Niveau.IdNiveau   AND 
           Occupe.IdCours=Cours.IdCours AND Occupe.IdSalle=Salle.IdSalle
            AND  Occupe.IdGroupe=Groupe.IdGroupe`
          const [row1] =await connection.query(query2,[result[0][0].IdNiveau])
          if(row.length !== 0){
            row.push(row1)
            res.send(row)
          }
          else{
            const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle WHERE Niveau.IdNiveau=? 
            AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
            Occupe.IdEnseignant=Enseignant.IdEnseignant AND
            Occupe.IdCours=Cours.IdCours AND
            Occupe.IdSalle=Salle.IdSalle`
            const [row] =await connection.query(query1,[result[0][0].IdNiveau])
            for(let i=0;i<row1.length;i++){
              row.push(row1[i])
            }
            res.send(row)
          }
        })()
      } 
      else{
      res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
      }
    })
})
app.post("/api/select/dispense/salle",(req,res)=>{
  const nom=req.body.nom
  const query = `SELECT * FROM Salle WHERE NomSalle=?`;
    connection.query(query,nom).then((result)=>{
      if(result[0].length !==0){
        (async ()=>{
          const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle,Groupe WHERE Salle.IdSalle=? 
          AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
          Occupe.IdEnseignant=Enseignant.IdEnseignant AND
          Occupe.IdCours=Cours.IdCours AND
          Occupe.IdSalle=Salle.IdSalle `
          const [row] =await connection.query(query1,[result[0][0].IdSalle])
          const query2=`SELECT * FROM Occupe,Niveau,Cours,Salle,Groupe WHERE Salle.IdSalle=? 
           AND Occupe.IdNiveau=Niveau.IdNiveau   AND 
           Occupe.IdCours=Cours.IdCours AND Occupe.IdSalle=Salle.IdSalle
            AND  Occupe.IdGroupe=Groupe.IdGroupe`
          const [row1] =await connection.query(query2,[result[0][0].IdSalle])
          console.log(row);
          console.log(row1);
          if(row.length !== 0){
            row.push(row1)
            res.send(row)
          }
          else{
            const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle WHERE Niveau.IdNiveau=? 
            AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
            Occupe.IdEnseignant=Enseignant.IdEnseignant AND
            Occupe.IdCours=Cours.IdCours AND
            Occupe.IdSalle=Salle.IdSalle`
            const [row] =await connection.query(query1,[result[0][0].IdSalle])
            for(let i=0;i<row1.length;i++){
              row.push(row1[i])
            }
            res.send(row)
          }
        })()
      } 
      else{
      res.json({status:'error',error:"Cette Salle N'existe Pas"})
      }
    })
})
app.post("/api/select/dispense/enseignant",(req,res)=>{
  const nom=req.body.nom
  const query = `SELECT * FROM Enseignant WHERE NomEnseignant=?`;
    connection.query(query,nom).then((result)=>{
      if(result[0].length !==0){
        (async ()=>{
          const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle,Groupe WHERE 
          Enseignant.IdEnseignant=? 
          AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
          Occupe.IdEnseignant=Enseignant.IdEnseignant AND
          Occupe.IdCours=Cours.IdCours AND
          Occupe.IdSalle=Salle.IdSalle AND
          Occupe.IdGroupe=Groupe.IdGroupe`
          const [row] =await connection.query(query1,[result[0][0].IdEnseignant])
          if(row.length !== 0){
            res.send(row)
          }
          else{
            const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle WHERE Enseignant.IdEnseignant=? 
            AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
            Occupe.IdEnseignant=Enseignant.IdEnseignant AND
            Occupe.IdCours=Cours.IdCours AND
            Occupe.IdSalle=Salle.IdSalle`
            const [row] =await connection.query(query1,[result[0][0].IdEnseignant])
            res.send(row)
          }
        })()
      } 
      else{
      res.json({status:'error',error:"Cette Salle N'existe Pas"})
      }
    })
})
app.post("/api/select/dispense/specialite",(req,res)=>{
  const filiere= req.body.filiere
  const niveau=req.body.nom
  const specialite=req.body.specialite
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      if(result[0].length !==0){
       const query2=`select * from Specialite where IdNiveau=? AND NomSpecialite=?`
       connection.query(query2,[result[0][0].IdNiveau,specialite]).then((result3)=>{
         console.log(result3[0]);
         if(result3[0].length !== 0){
          (async ()=>{
            const query1=`SELECT * FROM Occupe,Niveau,Enseignant,Cours,Salle,Specialite
             WHERE Specialite.IdSpecialite=? 
            AND Occupe.IdNiveau=Niveau.IdNiveau  AND  
            Occupe.IdEnseignant=Enseignant.IdEnseignant AND
            Occupe.IdCours=Cours.IdCours AND
            Occupe.IdSalle=Salle.IdSalle AND
            Specialite.IdNiveau=Cours.IdNiveau AND
            Specialite.IdNiveau=? AND 
            Cours.IdSpecialite=?`
            const [row] =await connection.query(query1,[result3[0][0].IdSpecialite,result3[0][0].IdNiveau,result3[0][0].IdSpecialite])
            res.send(row)
          })()
         }
         else{
          res.json({status:'error',error:"Cette Specialite N'est Pas Dans Ce Niveau"}) 
         }
       })
      } 
      else{
      res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
      }
    })
})

//Pour L'autocompletion
app.post("/api/select/autocomplete",(req,res)=>{
  const filiere= req.body.filiere
  const niveau=req.body.nom
  const query = `SELECT * 
    FROM (SELECT *
        FROM ?? WHERE ??.??=?) AS A
         JOIN (  SELECT * FROM ?? WHERE ??.??=? )  As B  
         ON A.?? = B.??`;
    const values = [
        'Niveau',              
        'Niveau',        
        'NomNiveau',
         niveau,
        'Filiere',
        'Filiere',
        'NomFiliere',
        filiere,
        'IdFiliere',
        'IdFiliere'
          ];
    connection.query(query,values).then((result)=>{
      console.log(result[0].length)
      if(result[0].length !==0){
        (async ()=>{
        const query1 = `SELECT * FROM Cours,Niveau WHERE Niveau.IdNiveau=? 
        AND Cours.IdNiveau=Niveau.IdNiveau`
        const [row] = await connection.query(query1,[result[0][0].IdNiveau])
        res.send(row)
      })()
      }
      else{
        res.json({status:'error',error:"Ce Niveau N'est Pas Dans La Filiere"})
        }
    })

})

const PORT =4000;
app.listen(process.env.PORT || PORT,()=>{
  console.log(`App running on port ${PORT}`)

})


















