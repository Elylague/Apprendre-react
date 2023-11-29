import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Component = () => {
  const canvasRef = useRef(null);
console.log('canvasRef')
  useEffect(() => {
    const sketch = (p) => {
      // Fonctions p5.js ici
      p.setup = () => {
        p.createCanvas(300, 100).parent(canvasRef.current);
        p.background(220);
        p.fill(255, 0, 0);
        p.ellipse(100, 30, 50, 50);
        p.fill(0, 255, 0);
        p.rect(150, 10, 70, 50);
     
      };
/*
      p.draw = () => {
        p.background(220);
        p.fill(255, 0, 0);
        p.ellipse(200, 150, 50, 50);
      };
  */
    };

  const move= new p5(sketch);
    return ()=> {
      console.log('UNMOUNTED')
      move.remove()
    //  new p5(sketch);
    }
  }, []);

  return <div ref={canvasRef}></div>;
};

export default P5Component;