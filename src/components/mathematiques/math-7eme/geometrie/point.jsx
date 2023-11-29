import React from 'react'
import pointImage from './point-image.png'
export default function Point(){
  
  return(
    <>
    <p>Point:définition</p>
    <p> géométriquement,un point est l'intersection de deux petits trait. Un point n'a aucune dimension,  c'est-à-dire qu'il n'a ni longueur, ni largeur,ni épaisseur</p>
    <p>on designe un point par une lettre magiscule placée devant lui. On dit: le point A, le point B,le point C</p>
    
    <img className="points-image"src={pointImage}/>
    
    
    
    </>
    
    
    )
  
  
}