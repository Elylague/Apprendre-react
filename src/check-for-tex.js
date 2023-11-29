(function() {
//  const body = document.body.querySelector('math')
  //var body = document.body.textContent;
  //body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)
 /*
  if (body) {
    console.log('MATHML')
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: { '[+]': [['$', '$']] }
        }
      };
    }
  */
    var script = document.createElement('script');
    script.id="MathJax-script"
    script.src = "../mathjax/tex-mml-chtml.js";
    document.head.appendChild(script);
//  } else {

    //console.log('THERE IS NO MATHML')
//  }
})();