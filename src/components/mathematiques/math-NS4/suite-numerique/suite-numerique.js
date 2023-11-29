import React, {useEffect} from 'react'

function NatureDuneSuite({titleChapter}) {
  //console.log(window?.MathJax, 'MathJax')
  const data= <p>vous allez apprendre à bien connaitre ce qu'est la nature d'une suite numerique 
           <math xmlns="http://www.w3.org/1998/Math/MathML">
             <mfrac>
               <mn>1</mn>
               <msqrt>
                 <mn>2</mn>
               </msqrt>
             </mfrac>
           </math></p>
  useEffect(() => {
  
  if (typeof window?.MathJax !== "undefined") {
    window.MathJax.typesetPromise()
  }
}, [])

  
  
  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
  {data}
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   
   </div>
  )
}



function RepresGraphSuite({titleChapter}) {
  
  
  
  
  
  
  const data= <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <mi>x</mi>
    <mo>=</mo>
    <mrow data-mjx-texclass="ORD">
      <mfrac>
        <mrow>
          <mo>&#x2212;</mo>
          <mi>b</mi>
          <mo>&#xB1;</mo>
          <msqrt>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
            <mo>&#x2212;</mo>
            <mn>4</mn>
            <mi>a</mi>
            <mi>c</mi>
          </msqrt>
        </mrow>
        <mrow>
          <mn>2</mn>
          <mi>a</mi>
        </mrow>
      </mfrac>
    </mrow>
    <mo>.</mo>
  </math>
//console.log('WAITING FOR MATHML')
 // const data = "When \\(a \\ne 0\\), there exists two solutions for \\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
useEffect(() => {
  //console.log(window.MathJax, 'MathJax')
  if (typeof window?.MathJax !== "undefined") {
    
    window.MathJax.typesetPromise()
 }
}, [])



  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
     <p> resoudre cette équation de la forme{data}</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   
   </div>
  )
}



function SuiteArithmetique({titleChapter}) {
  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   
   </div>
  )
}




function SuiteGeometrique({titleChapter}) {
  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   
   </div>
  )
}



function LimiteDuneSuite({titleChapter}) {
  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio ratione nemo repellat quae voluptas ea eum in, nam rem? Consequatur quia, rerum illum fugiat explicabo quasi aperiam. Harum, eligendi!</p>
   
   </div>
  )
}

function Exercices({titleChapter}) {
  return (
    <div className='content-page-cours'>
   <h4>{titleChapter}</h4>
   <p>CE MODULE N'EST PAS ENCORE DISPONIBLE!</p>
   </div>
  )
}


export {NatureDuneSuite, RepresGraphSuite, SuiteArithmetique, SuiteGeometrique, LimiteDuneSuite, Exercices}

