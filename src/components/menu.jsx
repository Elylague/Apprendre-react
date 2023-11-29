import React from 'react';

function Menu(){
  const onglet=['Accueil', 'Cours', 'Media','Staff']

  function display(e){
  e.preventDefault()
  console.log(`je suis le ${e.target.textContent}`)
  
}

  return (
  <>
  <nav>
    <ul>
     {onglet.map((ong, index)=> {
       return <li key={index} onClick={display}><a href='#'> {ong}</a></li>
     })}
    </ul>
  </nav>
  </>
  )
  
  
}

export default Menu