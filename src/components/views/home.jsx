import React from 'react';
import '../../styles/view-style/home.css';
import chimieNS1 from '../../assets/chimie-ns1.jpg'
import chimieNS2 from '../../assets/chimie-ns2.jpg'
import chimieNS4 from '../../assets/chimie-ns4.jpg'
//import chimieNS3 from '../../assets/chimie-ns3.jpg'
import physNS1 from '../../assets/physique-ns1.jpg'
import physNS4 from '../../assets/physique-ns4.jpg'
import espagnolNS4 from '../../assets/espagnol-ns4.jpg'
function Galerie({chimieUrl, alt}){
  return(

        
           <img className='images' src={chimieUrl} alt={alt}/>
        
    
    
    )
  
  
}

export default function Home(){
  
  return(
    
    <div className='home'>
          <h1 className='title-home'>Home page Accueil</h1>
       <div className='container-images'>
          <Galerie chimieUrl={chimieNS1} alt='photo de chimie NS1'/>
          <Galerie chimieUrl={chimieNS2} alt='photo de chimie NS2'/>
          <Galerie chimieUrl={chimieNS4} alt='photo de chimie NS4'/>
          <Galerie chimieUrl={physNS4} alt='photo de physique NS4'/>
          <Galerie chimieUrl={physNS1} alt='photo de physique NS1'/>
          <Galerie chimieUrl={espagnolNS4} alt='photo de Espanol NS4'/>      
       </div>
    </div>
    )
  
}


