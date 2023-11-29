import React from 'react'
import {RepresGraphSuite, NatureDuneSuite, SuiteArithmetique, SuiteGeometrique, LimiteDuneSuite, Exercices}from './mathematiques/math-NS4/suite-numerique/suite-numerique.js'
import {NombreComplexe} from  './mathematiques/math-NS4/nombre-complexe/nombre-complexe.js'
import {DroiteEtPlan} from  './mathematiques/math-7eme/geometrie/droite-plan.js'
function chapitreNombreComplexeNS4(chapitre){
  
  let componentComplexe;
  const tabChapterComplexe=JSON.parse(sessionStorage.getItem('tabChapter'))
  
  switch (chapitre) {
    // premier chapitre du nombre complexe: NOMBRE COMPLEXE
      case `${tabChapterComplexe[0]}`:
       // chapitreSuiteNS4()
       componentComplexe=<NombreComplexe titleChapter={tabChapterComplexe[0]}/>
       return componentComplexe
     //  console.log(tabChapter[0])
      break;
      case  `${tabChapter[1]}`:
        componentChapter = <RepresGraphSuite titleChapter={tabChapter[1]}/>
        return componentChapter
       // console.log(tabChapter[1])
        break;
      case   `${tabChapter[2]}`:
        componentChapter = <SuiteArithmetique titleChapter={tabChapter[2]}/>
        return componentChapter
       // console.log(tabChapter[2])
        break;
      case   `${tabChapter[3]}`:
        componentChapter = <SuiteGeometrique titleChapter={tabChapter[3]}/>
        return componentChapter
       // mathematiquesNS4(queryStrings)
        //console.log(tabChapter[3])
        break;
      case `${tabChapter[4]}`:
        componentChapter = <LimiteDuneSuite titleChapter={tabChapter[4]}/>
        return componentChapter
       // console.log(tabChapter[4])
      //  componentChapter=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
     //   return componentChapter;
        break;
      case  `${tabChapter[5]}`:
          componentChapter =  <Exercices titleChapter={tabChapter[5]}/>
          return componentChapter
    
        default:
       // return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
  
  
  
}

function brancheMathematiques7eme({branche, chapitre}){
  const tabBranche7eme=JSON.parse(sessionStorage.getItem('tabBranche'))
 // console.log(branche,chapitre,tabBranche7eme,   'brancheEtNiveau POUR 7EME')
  
  switch (branche) {
    // SUITE NUMERIQUE
      case  `${tabBranche7eme[0]}`:
       return chapitreAlgebre7eme(chapitre)
      // console.log(branche)
      break;
      // ANALYSE LINEAIRE
      case `${tabBranche7eme[1]}`:
        return chapitreGeometrie7eme(chapitre)
        //console.log(mathNiv)
        break;
        //ALGEBRE
      case  `${tabBranche7eme[2]}`:
        return chapitreMesures7eme(chapitre)
       // console.log(mathNiv)
        break;
        //GEOMETRIE
      case `${tabBranche[3]}`:
      //  mathematiquesNS4(queryStrings)
      return chapitreApplicationMathematique7eme(chapitre)
       // console.log(mathNiv)
        break;
        //NOMBRE COMPLEXE
      
      
        default:
      //  return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
  
  
  
  
  
  
}




function chapitreGeometrie7eme(chapitre){
 // console.log(chapitre, 'CHAPITRES POUR GEOMETRIE')
  
  let componentGeometrie;
  const tabChapterGeometrie=JSON.parse(sessionStorage.getItem('tabChapter'))
  
  switch (chapitre) {
    // premier chapitre du nombre complexe: NOMBRE COMPLEXE
      case `${tabChapterGeometrie[0]}`:
    //  console.log(tabChapterGeometrie, 'TABLEAU')
       // chapitreSuiteNS4()
       componentGeometrie=<DroiteEtPlan titleChapter={tabChapterGeometrie[0]}/>
       return componentGeometrie
     //  console.log(tabChapter[0])
      break;
      case  `${tabChapter[1]}`:
        componentChapter = <RepresGraphSuite titleChapter={tabChapter[1]}/>
        return componentChapter
       // console.log(tabChapter[1])
        break;
      case   `${tabChapter[2]}`:
        componentChapter = <SuiteArithmetique titleChapter={tabChapter[2]}/>
        return componentChapter
       // console.log(tabChapter[2])
        break;
      case   `${tabChapter[3]}`:
        componentChapter = <SuiteGeometrique titleChapter={tabChapter[3]}/>
        return componentChapter
       // mathematiquesNS4(queryStrings)
        //console.log(tabChapter[3])
        break;
      case `${tabChapter[4]}`:
        componentChapter = <LimiteDuneSuite titleChapter={tabChapter[4]}/>
        return componentChapter
       // console.log(tabChapter[4])
      //  componentChapter=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
     //   return componentChapter;
        break;
      case  `${tabChapter[5]}`:
          componentChapter =  <Exercices titleChapter={tabChapter[5]}/>
          return componentChapter
    
        default:
       // return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
  
  
}

function chapitreAlgebre7eme(chapitre){
  
  console.log(chapitre, 'CHAPITRES POUR ALGEBRE')
  
  
}

function chapitreMesures7eme(chapitre){
  
  
  
}


function chapitreApplicationMathematique7eme(chapitre){
  
  
  
  
}




function chapitreSuiteNS4(chapitre){
  let componentChapter;
  const tabChapter=JSON.parse(sessionStorage.getItem('tabChapter'))
  
  switch (chapitre) {
      case `${tabChapter[0]}`:
       // chapitreSuiteNS4()
       componentChapter=<NatureDuneSuite titleChapter={tabChapter[0]}/>
       return componentChapter
     //  console.log(tabChapter[0])
      break;
      case  `${tabChapter[1]}`:
        componentChapter = <RepresGraphSuite titleChapter={tabChapter[1]}/>
        return componentChapter
       // console.log(tabChapter[1])
        break;
      case   `${tabChapter[2]}`:
        componentChapter = <SuiteArithmetique titleChapter={tabChapter[2]}/>
        return componentChapter
       // console.log(tabChapter[2])
        break;
      case   `${tabChapter[3]}`:
        componentChapter = <SuiteGeometrique titleChapter={tabChapter[3]}/>
        return componentChapter
       // mathematiquesNS4(queryStrings)
        //console.log(tabChapter[3])
        break;
      case `${tabChapter[4]}`:
        componentChapter = <LimiteDuneSuite titleChapter={tabChapter[4]}/>
        return componentChapter
       // console.log(tabChapter[4])
      //  componentChapter=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
     //   return componentChapter;
        break;
      case  `${tabChapter[5]}`:
          componentChapter =  <Exercices titleChapter={tabChapter[5]}/>
          return componentChapter
    
        default:
       // return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
}

function brancheMathematiquesNS4({branche, chapitre}){
  const tabBranche=JSON.parse(sessionStorage.getItem('tabBranche'))
//  console.log(tabBranche, 'branche');
  
  switch (branche) {
    // SUITE NUMERIQUE
      case  `${tabBranche[0]}`:
       return chapitreSuiteNS4(chapitre)
      // console.log(branche)
      break;
      // ANALYSE LINEAIRE
      case `${tabBranche[1]}`:
        return <div>Les chapitres<b>{chapitre.toUpperCase()}</b> ne sont pas encore disponibles</div>
        //console.log(mathNiv)
        break;
        //ALGEBRE
      case  `${tabBranche[2]}`:
        return <div>  LES  CHAPITRES <b>{chapitre.toUpperCase()}</b> NE SONT PAS ENCORE DISPONIBLES</div>
       // console.log(mathNiv)
        break;
        //GEOMETRIE
      case `${tabBranche[3]}`:
      //  mathematiquesNS4(queryStrings)
      return <div>LES  CHAPITRES <b>{chapitre.toUpperCase()}</b> NE SONT PAS ENCORE DISPONIBLES</div>
       // console.log(mathNiv)
        break;
        //NOMBRE COMPLEXE
      case   `${tabBranche[4]}`:
       //componentComplexe=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
       return chapitreNombreComplexeNS4(chapitre)
       //<div>LES  CHAPITRES <b>{chapitre.toUpperCase()}</b> NE SONT PAS ENCORE DISPONIBLES</div>
         //console.log(chapitre)
        break;
        //PROBABILITÉ
      case   `${tabBranche[5]}`:
        return <div>LES  CHAPITRES <b>{chapitre.toUpperCase()}</b> NE SONT PAS ENCORE DISPONIBLES</div>
        //console.log(chapitre)
        break;
      
        default:
      //  return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
  
  
  
  
  
  
  
}





function chaptersStatementNiveauMaths(queryStrings) {
  
  const mathNiv=`${queryStrings.cours}${queryStrings.niveau}`
//  console.log(queryStrings, 'queryStrings')
  
  
    
    switch (mathNiv) {
      case `mathematiquesNS1`:
        
      // console.log(mathNiv)
      break;
      case  `mathematiquesNS2`:
        //console.log(mathNiv)
        break;
      case  `mathematiquesNS3`:
       // console.log(mathNiv)
        break;
      case  `mathematiquesNS4`:
      return  brancheMathematiquesNS4(queryStrings)
        //console.log(mathNiv)
        break;
      case  `mathematiques7ème`:
        return brancheMathematiques7eme(queryStrings)
       // componentChapter=<LimiteDuneSuite  titleChapter={tabChapter[4]}/>
      //  return componentChapter;
        break;
        default:
      //  return componentChapter=<div><h3>aucun chapitre</h3></div>
      
      
      
    }
    
  
  
  
  
  
  
  
}

export default chaptersStatementNiveauMaths;