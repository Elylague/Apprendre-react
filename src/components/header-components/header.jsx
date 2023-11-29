import {Link} from "react-router-dom";
import React from 'react';
import '../../styles/header-styles/header.css';
//import Accueil from "./accueil";
//import Cours from "./cours";
//import Media from "./media";
//import Staff from "./staff"







function Accueil(props) {


  return (
    <div className='menu'>
      <li><Link to="/"> Accueil</Link></li>
    </div>
  )


}


function Cours() {
  
  return (

  <div className='menu'>
          <li><Link to="/cours">Cours</Link></li>
        </div>
  )


}

function Media() {
  return (

  <div className='menu'>
          <li><Link to="/media">Media</Link></li>
   </div>
  )


}


function Staff() {
  return (

    <div className='menu'>
          <li><Link to="/staff">Staff</Link></li>
   </div>
  )


}

function Logo() {

  return (
    <div className='logo'>
      <Link to="/"> lekòl lakay</Link>
    </div>
  )


}




function Header(){
  //console.log(props, 'dans header')
  return(
       <header className="header">
          <nav className="nav-menu">
          <Logo/>
              <ul className="ul-header">
                 <Accueil className='menu'/>
                 <Cours className='menu' cours='page cours'/>
                 <Media className='menu'/>
                 <Staff className='menu'/>
              </ul>
          </nav>
        </header>
    )
  
  
  
  
}

export default Header