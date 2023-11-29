import React from 'react'
import planImage from './plan-image.png'


export default function Plan() {
  return(
    <div>
    <h3>Plan: Définition</h3>
    <p>un plan est une surface plane illimité 
    dans tous les sens ou c'est 
    un ensemble infini de points. Pour représenter une portion de plan, désigné par la lettre P, on dessine un parallélograme
    </p>
    <img src={planImage} className="plan-image"/>
    
    </div>
    
    )
}