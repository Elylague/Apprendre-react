import React, {useRef, useEffect} from 'react'
//import P5Component from './p5component.js'
import Point from './point'
import Plan from './plan'
import Droite from './droite'
import './droite-plan.css'
/*
const P5Component = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      // Fonctions p5.js ici
      
      p.setup = () => {
        p.createCanvas(400, 300).parent(canvasRef.current);
     
     // limite
    // console.log('CANVASREF')
     p.background(220);
     p.fill(255, 0, 0);
     p.ellipse(200, 150, 50, 50);
      };


    };

    new p5(sketch);
    
  }, []);
  
//  console.log(canvasRef, 'CANVASREF')

  return <div ref={canvasRef}></div>;
};
*/
 

export function DroiteEtPlan(props){
 console.log('MY DroiteEtPlan')
  
  return(
    <div className="content-page-cours">
    <h3>{props.titleChapter}</h3>
    <Point/>
    <Plan/>
    <Droite/>

    </div>
    
    )
  
  
  
}