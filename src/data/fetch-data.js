import React,{useState, useEffect} from 'react'

import manipulateTheJsonFile from './manipulate-data.js'
export default function useFetchData(nomkou, coursNiv) {
 
 const toutCours = {
   mathNS4: ['suite numerique', 'Probabilite', 'Nombre Complexe', 'Analyse lineaire', 'Geometrie Analytique'],
   NS3: ['trigonometrie', 'geometrie', 'algebre', 'Analyse Combinatoire'],
   NS1: ['trigonometrie', 'geometrie plane', 'algebre', 'geometrie analytique'],
   NS2: ['trigonometrie', 'geometrie', 'algebre', 'Analyse lineaire'],
 
 }
 const [dataInMap, setDataInMap]=useState(
   
   fetch('/src/data/cours.json').then((response) => {
   
     return response.json()
   
   }).then((dataCours) => {
   
     const objetMap = manipulateTheJsonFile(dataCours, nomkou);
  
     return objetMap
   })
   
   
   )
   
  // console.log(dataInMap, 'dataInMap')
 useEffect(()=> {
   console.log('useEffect in useFetchData')
   const fetcha=(fetch('/src/data/cours.json').then((response) => {
   
     return response.json()
   
   }).then((dataCours) => {
   
     const objetMap = manipulateTheJsonFile(dataCours, nomkou);
  
     return objetMap
   })
   )
    
    console.log(fetcha, 'FETCHA')
   
    setDataInMap(fetcha)
  /*
      fetch('/src/data/cours.json').then((response)=> {

     return response.json()
     
   }).then((dataCours)=> {
    
    const objetMap= manipulateTheJsonFile(dataCours, nomkou);
    
   //console.log(map, 'MAP')
   setDataInMap(objetMap)
   })
   */
   //console.log(nomkou, 'useEffect dans useFetchData')
      
 }, [nomkou])
//console.log(dataInMap, 'AFTER USEEFECT')

  
   return dataInMap
   
}

