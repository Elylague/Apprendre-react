import React,   {useState, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
//import MainPageCours from './main-page-components/main-page-cours'
import '../styles/app.css'
  
//import MainPageCours from "./main-page-components/main-page-cours"
import Header from "./header-components/header"
import Footer from "./footer-components/footer"
import MainPageOrPageCours from "./main-page-components/main-page-or-page-cours"

//const element='je suis des un data'
function App(props) {
 
  
  
  return (
    
        
        
          <>
           
            <Header/>
            <main className="main-content-template">
             
               <MainPageOrPageCours />
              
            </main>
            <Footer/>
           
      </>
            
      
   


  )



}
export default App;