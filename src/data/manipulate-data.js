//import getTheJsonFile from './get-json-file.js'

const manipulateTheJsonFile =  function(data, cours) {
 console.log('manipulateTheJsonFile')
  //const data = await getTheJsonFile()


  //let {getTheUrlAfterPushState}=await import('./getUrlAfterPushState.js');
  //const urlObject=getTheUrlAfterPushState()
  // let url=urlObject.pathname
  //let index=url.lastIndexOf('/cours')
  //url=url.slice(7).toUpperCase()
  let coursInMap = new Map();
  let nivMatiereInMap = new Map()
 // console.log(data, 'in manipulateTheJsonFile')
  for (let obj of data) {
    let [name] = Object.keys(obj);
    let [valeur] = Object.values(obj)
    coursInMap.set(name, valeur);

  }



  const curso = coursInMap.get(cours)
  curso.map((objet) => {
    let tabChaqueNiv = Object.keys(objet);
    for (let tab of tabChaqueNiv) {
      nivMatiereInMap.set(tab, objet[tab])

    }

  })


  //console.log(nivMatiereInMap.get('mathNS1'), 'new Json file');

  return nivMatiereInMap

}

export default manipulateTheJsonFile