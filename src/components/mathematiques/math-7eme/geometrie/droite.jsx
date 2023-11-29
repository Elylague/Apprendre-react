import React, {useEffect, useRef} from 'react'
//import planImage from './droite-image.png'
import p5 from 'p5'
const P5ComponentDroite = () => {
  const canvasRef = useRef(null);
console.log('canvasRef')
  useEffect(() => {
    
    let sketchDroite = function(p) {
        let x=0, y=0, x1=0, y1=0, h=40

        
        p.setup=function(){
          
          p.createCanvas(500, 200).parent(canvasRef.current)
          p.background(255,255, 255);
          p.stroke(255, 255, 255)
         // p.line(x, y, p.width, y)
          
          for(let i=0; i<=p.height/40;i++){
          y=y+40
          p.line(x, y,p.width , y)
          
          }
         
          for (let j = 0; j <= p.width / 40; j++) {
           x1 = x1 + 40
            p.line(x1, y1, x1, p.height)
        
         
         }
         
         p.stroke('blue')
         p.line(3*h, 2*h, 11*h, 2*h)
         p.line(3*h, 3*h, 11*h, 3*h)
        // p.rect(40, 40, 120, 80)
         
         p.stroke('green')
         p.textSize(20)
         p.text('notation:       la droite (D) et la drote (x,y)', 3*h, h)
         p.text('(D)', 3*h, 2*h-10)
         p.text('x', 3*h, 3*h-10)
         p.text('y', 11*h,3*h-10)
          
        
          
        }
        
      
  

    };

     
// Créez une instance de p5 en utilisant votre fonction de dessin
const move=new p5(sketchDroite);



  
//  const move= new p5(sketch);
    return ()=> {
      console.log('UNMOUNTED')
      move.remove()
    //  new p5(sketch);
    }
  }, []);

  return <div ref={canvasRef}></div>;
};


const P5FigureProprieteDroite= () => {
  const canvasRef = useRef(null);
console.log('canvasRef')
  useEffect(() => {
    
    let sketchProprieteDroite = function(p) {
        let x=0, y=0, x1=0, y1=0, h=40, a=200, b=200

        
        p.setup=function(){
          
          p.createCanvas(500, 600).parent(canvasRef.current)
          p.background(192,192, 192);
          p.stroke(255, 255, 255)
         // p.line(x, y, p.width, y)
          
          for(let i=0; i<=p.height/40;i++){
          y=y+40
          p.line(x, y,p.width , y)
          
          }
         
          for (let j = 0; j <= p.width / 40; j++) {
           x1 = x1 + 40
            p.line(x1, y1, x1, p.height)
        
         
         }
         
         p.stroke('blue')
         
         //les trois droites secantes
         p.line(3*h, h, 8*h, 6*h)
         p.line(3*h, 6*h, 8*h, h)
         p.line(2*h, 3*h+20, 10*h, 3*h+20)
         //une seule droite passe par deux
         
         p.line(2*h, 10*h, 10*h, 10*h)
         
         // droite des points alignés
         p.line(2*h, 13*h, 10*h, 13*h)
         
        // Coordonnées du point
       // let a = 200;
      //  let b = 200;
        
        // Taille de la croix
        let crossSize = 10;
        
        // Dessiner les lignes de la croix
        p.stroke(0);
        p.strokeWeight(2);
        p.line(a - crossSize, b, a + crossSize, b);
        p.line(a, b - crossSize, a, b + crossSize);
         
        p.strokeWeight(10)
        p.point(3 * h, 10 * h)
        p.point(9* h, 10 * h)
        //point d'intersection des trois droites
        p.point(5*h+20,3*h+20 )
        // les points alignés
        p.point(3 * h, 13 * h)
        p.point(9 * h, 13 * h)
        p.point(6*h, 13*h)
        // p.rect(40, 40, 120, 80)
      /*
         p.stroke('green')
         p.textSize(20)
         p.text('notation:       la droite (D) et la drote (x,y)', 3*h, h)
         p.text('(D)', 3*h, 2*h-10)
         p.text('x', 3*h, 3*h-10)
         p.text('y', 11*h,3*h-10)
          
        */
          
        }
        
      
  

    };

     
// Créez une instance de p5 en utilisant votre fonction de dessin
const move=new p5(sketchProprieteDroite);



  
//  const move= new p5(sketch);
    return ()=> {
      console.log('UNMOUNTED')
      move.remove()
    //  new p5(sketch);
    }
  }, []);

  return <div ref={canvasRef}></div>;
};








export default function Droite() {
  return (
    <div className="droite-definition">
    <h3>Droite: Définition</h3>
    <p>une droite est une ligne illimité 
    dans  les deux sens, c'est un ensemble infini de point aligné. 
    Une droite illimité n'a ni épaisseur ni largeur. On peut representer une droite soit par l'un de ses points en lettre magiscule soit par deux lettres miniscule x et y.
     
    </p>
    <P5ComponentDroite/>
    
    <div className="proprietes-droite">
       <h3>propriétés d'une droite</h3>
       <p>propriété 1: par un point donné on peut faire passer une infinité de de droite (figure 4)</p>
       <p>propriété 2: par deux points distincts, il passe une droite etune seule (figuere 5)</p>
       <p>propriété 3: trois points A , B et C sont alignés s'ils apparienent à une même deoite (figure 6)</p>
    <P5FigureProprieteDroite/>
    </div>
    
    
    </div>

  )
}