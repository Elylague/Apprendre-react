import {Link, Form, useSearchParams} from 'react-router-dom';
//import useFetchData from '../../data/fetch-data.js'
import React, {useState, useMemo, useContext} from 'react';
import manipulateTheJsonFile from '../../data/manipulate-data.js'
import '../../styles/page-cours-style/formulaire.css'
import {dataContext} from './context.js'


function SelectNiveau({nameOfCours, callBack}){
  const slice=nameOfCours.slice(0,4);
  const datas=useContext(dataContext)

  

  function handleChange(event){
    event.preventDefault()
    const elCourso=`${slice}${event.target.value}`
   // callBack(elCourso)
 // console.log(elCourso, 'VALEUR CONCATENER')
  dataToLayOut(nameOfCours.toUpperCase(), elCourso)

    
  }
  
  
    function dataToLayOut(nameCours, coursNiv){
    
   // console.log(datas, 'DATAS')
    
    const objMap = manipulateTheJsonFile(datas, nameCours)
    // console.log(objMap.get(coursNiv), 'NEWMAP')
    //console.log('after manipulateTheJsonFile')
    callBack(objMap.get(coursNiv))
    

  }
 
  
  

  
  return(
             <select className='niveau'  name="niveau" onChange={handleChange} >
                <option  className='default-niveau'>votre niveau</option>
                <option value="NS1">NSI </option>
                <option value="NS2">NS2</option>
                <option value="NS3">NS3</option>
                <option  value="NS4">NS4</option>
                <option value="7ème">7ème</option>
                <option value="8ème">8ème</option>
                <option value="9ème">9ème</option>
           
                
            </select>
    
    
    )
  
  
  
}

 function SelectCours({nomCours, mesCours}){
console.log('mesCours est stocqué à partir du composant SelectCours du composant Formulaire')
// STOQUER POUR ÊTRE UTILISÉ DANS LE MODULE chaptersStatementNiveauMaths.js
 sessionStorage.setItem('tabBranche', JSON.stringify(mesCours))



  return (
           <select className='branche' name="branche" disabled={false} id="cours" >
              {!mesCours?<option  className='default' >select</option>:mesCours.map((curso, index)=> {
    return <option key={index} value={curso}>{curso}</option>
    
    
  })
  }
          </select>
    
    
    )
  
  
  
}




export default function Formulaire({coursName}){
  
  const nameOfCours=coursName.replace('/cours/', '')
  const nonkouSlice=nameOfCours.slice(0,4)
  //console.log(nonkouSlice, 'nonkouSlice')
  const cour = {
    NS4: ['suite numerique', 'Probabilite', 'Nombre Complexe', 'Analyse lineaire', 'Geometrie Analytique'],
    NS1:[ 'Algèbre', 'Geométrie', 'trigonométrie']
  }
  
  let [myCours, setMyCours]=useState(false)
  //let [truethy, setTruethy]=useState
  const [searchParams, setSearchParams]=useSearchParams({})
  
//  console.log(searchParams.get('cours'), searchParams.get('niveau'), 'searchParams1')
  
  
  //console.log(myCours, 'FORMS')
  
  function handleClick(event){
    event.preventDefault();
   // console.log(event.target, 'From handleClick')
    
  }
  
  function handleSubmit(event){
    event.preventDefault();
  
    const formData=new FormData(event.target)
    //const objectFormData=formData(event.target)
  
   
    setSearchParams({branche:formData.get('branche'), niveau:formData.get('niveau')})
    //const objectSearchParam=new URLSearchParams(searchParams.search)
   
    
  
    
  }
  
  
  function shareData(value){
    
    console.log(value)
    
    
  }
  
  
  const falsy=true
  

 // console.log(cours.replace('/cours/', '').toUpperCase(), 'in the form')
  return(
    <div style={{backgroundColor:'lightgreen', borderRadius:'18px'}} className='formulaire'>
    <h3 className='titre-form'> FORMULAIRE COURS DE {nameOfCours.toUpperCase()} </h3>
   <form onSubmit={handleSubmit} >
      <fieldset>
      <div >
        <label >niveau</label>
         <SelectNiveau nameOfCours={nameOfCours} callBack={setMyCours}/>
      </div>
        
        <br/><br/>
        
        
        
        <legend><span>choisir votre cours et votre niveau</span></legend>
     
     
      <div>
         <label>choisir branche</label>
         
       <SelectCours nomCours={nameOfCours} mesCours={myCours}/>
      </div>
      <br/><br/><br/>
      
      
     
      </fieldset>
       <button className="boutton-form" >valider</button>
    </form>
    </div>
    
    )
  
  
  
  
}


