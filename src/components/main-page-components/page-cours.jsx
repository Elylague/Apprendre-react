import {Routes, Route, Link, Form, useLocation,useSearchParams} from 'react-router-dom';
import React , {useContext} from 'react';
import Formulaire from './formulaire'
import SideBarTemplate from './sideBar-template'
import '../../styles/page-cours-style/page-cours.css'
import SectionPageCoursTemplate from './sectionPageCours-template'
import {dataContext} from './context.js'
import manipulateTheJsonFile from '../../data/manipulate-data.js'
//import {RepresGraphSuite, NatureDuneSuite, SuiteArithmetique, SuiteGeometrique, LimiteDuneSuite}from '../mathematiques/math-NS4/suite-numerique/suite-numerique.js'
import chaptersStatementNiveauMaths from '../chapterStatementNiveauMath.js'
function PageForm(){
  return(
    
    <div className='title-form'>
      <h2 style={{color:'red'}} >la page du formulaire</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis autem, laboriosam optio! Suscipit ipsam doloremque dolorum a, animi eveniet. Molestiae distinctio eveniet incidunt rerum debitis ad perspiciatis praesentium vel quasi!</p>
    
    
    </div>
    
    
    
    )
  
  
  
}

function LinkListBranche({info}){
  
  const datas=useContext(dataContext)
 // console.log(datas, 'DATAS')
  const location=useLocation()
  //console.log(location.state, 'SATE')
  const searchParams=new URLSearchParams(location.search)
  const newQueryString=`${location.pathname}${decodeURIComponent(location.search)}`
  //console.log(decodeURIComponent(location.search), 'decodeURIComponent')
 // console.log(newQueryString, 'newLink')
  const nameCours=info.coursName.replace('/cours/', '').toUpperCase()
  const coursNiv=`${info.branche.slice(0,4).toLowerCase()}${info.niveau}`
  //console.log(nameCours, coursNiv, 'COURS')

  const newMap=manipulateTheJsonFile(datas, nameCours);
  const tables=newMap.get(coursNiv);
  // POUR ÊTRE UTILISÉ DANS LE MODULE chaptersStatementNiveauMaths.js
  sessionStorage.setItem('tabChapter', JSON.stringify(tables))
  console.log('tabChapter est stoqué à partir du composant LinkListBranche du coposant PageCours')

  let link=tables.map((tab, index)=> {
    
    return  <li key={index}><Link to={`${newQueryString}&chapitre=${tab}`} state={{tab}}>{tab}</Link></li>
    
  })
  
  
  return(
           <>
              {link}
    
          </>
  
    )
  
  
  
}

function Chapitres({params}){
 // console.log(params, 'Chapitres')
 
  const cours=params.cours
  const tabChapter=JSON.parse(sessionStorage.getItem('tabChapter'))
  //console.log(tabChapter, 'tabChapter est stoqué dans LinkListBranche du composant pageCours')
  const  location=useLocation()
  const chapters=location.state.tab
  const params1={...params, chapitre:chapters}
  let componentChapter;
 //console.log(tabChapter, 'TABCHAPTER')
 
 function coursStatement(){
   switch (cours) {
      case `mathematiques`:
       return chaptersStatementNiveauMaths(params1)
      // return returnChaptersJsxTag();
      break;
      case  `physiques`:
       // return returnChaptersJsxTag()
        break;
      case  `chimie`:
       // componentChapter=<SuiteArithmetique  titleChapter={tabChapter[2]}/>
     //   return componentChapter;
        break;
      case  `espagnol`:
    //    componentChapter=<SuiteGeometrique  titleChapter={tabChapter[3]}/>
    //    return componentChapter
        break;
      case  `anglais`:
       // componentChapter=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
       // return componentChapter;
        break;
        default:
        return componentChapter=<div><em>aucun chapitre</em></div>
      
      
      
    }
    
   
   
   
   
   
 }
 
 /*
 
  function returnChaptersJsxTag(){
    let component;
    switch (chapters) {
      case `${tabChapter[0]}`:
        component= <NatureDuneSuite titleChapter={tabChapter[0]}/>
       return component;
      break;
      case  `${tabChapter[1]}`:
        component=<RepresGraphSuite  titleChapter={tabChapter[1]}/>
        return component;
        break;
      case  `${tabChapter[2]}`:
        component=<SuiteArithmetique  titleChapter={tabChapter[2]}/>
        return component;
        break;
      case  `${tabChapter[3]}`:
        component=<SuiteGeometrique  titleChapter={tabChapter[3]}/>
        return component
        break;
      case  `${tabChapter[4]}`:
        component=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
        return component;
        break;
        default:
        return component=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  }
  
  */
  
  
  return(
    <>
    {coursStatement()}
    </>
    )
  

}

function DefaultContentPageCours(){
  
  return(
        <div className="content-page-cours">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
        </p>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
        </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
          </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
        </p>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
         </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam dignissimos similique, molestiae rem ullam sequi, illo facere velit in? Optio totam a cupiditate aperiam, iusto tempore rem fugiat? Deserunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis dignissimos tempora, natus labore in nemo? Aliquid, sunt sequi, hic nobis, fuga ipsum, repudiandae ex perspiciatis tenetur nihil molestias consectetur.
        </p>
    </div>
    
    )
  
  
}


function ContentPageCours({query}){
  
 // console.log(dataObj, 'context')
// console.log(query, 'QUERY')
  
  return(
    <>
    {query.chapitre===null?<DefaultContentPageCours/>:<Chapitres params={{...query}}/>}
    </>
    )
  
  
  
}



export  function LinkListeCours(){
  
  return(

          <>
            <li><Link to="/cours/mathematiques">Mathématiques</Link></li>
            <li><Link to="/cours/physiques">Physiques</Link></li>
            <li><Link to="/cours/chimie">Chimie</Link></li>
            <li><Link to="/cours/espagnol">Espagnol</Link></li>
            <li><Link to="/cours/anglais">Anglais</Link></li>
            <li><Link to="/cours/francais">Français</Link></li>
            <li><Link to="/cours/creole">Créole</Link></li>
            <li><Link to="/cours/biologie">Biologie</Link></li>
            <li><Link to="/cours/economie">Economie</Link></li>
            <li><Link to="/cours/phylosophie">Phylosophie</Link></li>
        </>
                            
                          
                        
          
    
    
    
    )
  
  
  
  
  
  
}


    function RoutesForm({coursName}){
      const keys={
        math:'maths', 
        phys:'phys', 
        chimie:'chimie',
        espagnol:'espagnol', 
        anglais:'anglais',
        francais:'francais', 
        creole:'creole',
        biologie:'biologie',
        economie:'economie', 
        phylosophie:'phylosophie'
        
        
      }
      
      
      
      return(
        
         <Routes>
                  <Route path="/cours">
                    <Route index element={<PageForm/>}/>
                    <Route path="mathematiques" element={<Formulaire key={keys.math} coursName={coursName}/>}/>
                    <Route path="physiques" element={<Formulaire key={keys.phys} coursName={coursName}/>}/>
                    <Route path="chimie" element={<Formulaire key={keys.chimie} coursName={coursName}/>}/>
                    <Route path="espagnol" element={<Formulaire key={keys.espagnol} coursName={coursName}/>}/>
                    <Route path="anglais" element={<Formulaire key={keys.anglais} coursName={coursName}/>}/>
                    <Route path="francais" element={<Formulaire key={keys.francais} coursName={coursName}/>}/>
                    <Route path="creole" element={<Formulaire key={keys.creole} coursName={coursName}/>}/>
                    <Route path="biologie" element={<Formulaire key={keys.biologie} coursName={coursName}/>}/>
                    <Route path="economie" element={<Formulaire key={keys.economie}coursName={coursName}/>}/>
                    <Route path="phylosophie" element={<Formulaire key={keys.phylosophie}coursName={coursName}/>}/>
                 </Route >
         </Routes>
    
        
        
        
        )
      
      
    }


export  function PageCours({coursName}){
  const location=useLocation();
  const cours=coursName.replace('/cours/', '')
//  const query=location.search
  //console.log(location.search, 'LACATION')
  //const [searchParams, setSerchParams]=useSearchParams('');
let params=new URLSearchParams(location.search)


 let branche=params.get('branche');
 let niveau=params.get('niveau');
 let chapitre=params.get('chapitre')
 
// console.log(branche, niveau, chapitre, 'PARAMS')
 //console.log(coursName, 'COURSNAME')
  //console.log(params.get('cours'), params.get('niveau'), 'location in PageCours')
  return(
    
      <div className="div-page-cours">
          <SideBarTemplate>
            {(branche===null && niveau===null)?<LinkListeCours/>:<LinkListBranche info={{coursName, branche, niveau}}/>}
          </SideBarTemplate>
          
          
          <SectionPageCoursTemplate>
                {(branche===null && niveau===null)?<RoutesForm coursName={coursName}/>:<ContentPageCours query={{cours, branche, niveau, chapitre}}/>}
          </SectionPageCoursTemplate>
     </div>
    
    
    
    
    
    
    )
  
  
  
  
  
}