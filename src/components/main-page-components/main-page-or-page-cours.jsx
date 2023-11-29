import {Routes, Route, useLocation, Link, Outlet} from "react-router-dom";

import React, {useState, createContext, useEffect, lazy, Suspense} from 'react';
import '../../styles/main-page-styles/main-page.css'
import Home from '../views/home'
import Cours from '../views/cours'
import Media from '../views/media'
import Staff from '../views/staff'
import {PageCours} from './page-cours'
//const PageCours= lazy(()=> import('./page-cours'))
//import Formulaire from './formulaire'
import MainContentTemplate from './main-content-template'
import SideBarTemplate from './sideBar-template'
import {dataContext} from './context.js'
//console.log(dataContext.Provider, 'createContext')
                     
      /*
    <main className="sauf-main-pages-cours">
           
             

              <section className="section">
                          <h1 className='title-section'> la  page COURS de mon site LEKÒL LAKAY</h1>
                    
                   <Routes>
            
            
                    <Route path="/" element={<Home/>}/>
                    <Route path="/media"  element={<Media/>}/>
                    <Route path="/staff"  element={<Staff/>}/>
                    
                  
                  </Routes>
      
    
                </section>
                
                <aside className="aside">
                       <h3> la barre de navigation</h3>
                </aside>
    
                        
                  
            
          </main>
*/
                     






function MainPage() {


  return (

 <MainContentTemplate>
  
   <section className='section'>
        <h1 className='title-section'> la  page COURS de mon site LEKÒL LAKAY</h1>
                    
         <Routes>
            
              <Route index path="/src/index.html" element={<Home/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/accueil" element={<Home/>}/>
              <Route path="/media"  element={<Media/>}/>
              <Route path="/staff"  element={<Staff/>}/>
            
       </Routes>
      
    </section>
      
      <SideBarTemplate>
        <li><Link to="/cours/mathematiques">Mathématiques</Link></li> 
        <li> <Link to="/cours/physiques">Physiques</Link> </li>
        <li> <Link to="/cours/chimie">Chimie</Link> </li> 
        <li> <Link to="/cours/espagnol">Espagnol</Link> </li>
        <li> <Link to="/cours/anglais">Anglais</Link> </li>
      
      </SideBarTemplate>
 </MainContentTemplate>



  )





}






function ContentOfMain({atribLocation}){
  //console.log('CONTENT OF MAIN')
  let coursChange=/\/cours/
 // console.log(coursChange, 'coursChange')
 // const location=useLocation()
 // const truty=true;
  //console.log(sectAndAsidAtrib, 'sectAndAsidAtrib')
  if (atribLocation.match(coursChange)) {
    
    return(
  
           <PageCours coursName={atribLocation}/>
    
      )
  } else {
    return(
          
             <MainPage/>
      
      )
  }
  

    
    

  
  
  
}






function MainPageOrPageCours(props){
  
  let [theData, setTheData ]=useState(null)
  
  useEffect(() => {
    //console.log('useEffect')
    fetch('/src/data/cours.json').then((res)=> {
      console.log(res.ok, 'RESPONSE')
      return res.json()
    }).then((data)=> {
     // return data
      //manipulateTheJsonFile()
      setTheData(data)
      //console.log(data)
    })
    

  }, [])
  
  
  
 // console.log(theData, 'THE DATA')
  
  
  const location=useLocation()
// console.log(location, 'location')
  //const [contenu, setContenu]=useState('contenu de la page');
  
  
     
    
    return(  
      
      <dataContext.Provider value={theData} >
  
         <ContentOfMain atribLocation={location.pathname}/>
       </dataContext.Provider>
  )
  
    
     
  
    
    

  
  
  
  
}

export default MainPageOrPageCours;