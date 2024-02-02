import React , {useEffect}from 'react';
import '../../styles/view-style/cours.css';


export default function Cours() {
  
  useEffect(()=> {
    fetch('/api').then((response)=> {
      response.json()
    }).then((data)=> {
      console.log(data,'data from the server')
    })
    
  }, [])
//console.log('cours')
  return (
    

    <div className='cours'>
          <h1> page de tous les cours à utiliser</h1>
    </div>
  )

}