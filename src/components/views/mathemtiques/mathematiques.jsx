export function SideBarListeBranche() {

  return (
    <aside className="aside">
                            <h3 > la barre de navigation</h3>
                            <nav>
                              <ul>
                                <li><Link to="/cours/mathematique?niveau=NS4&branche=probabilite">Mathématiques</Link></li>
                                <li><Link to="/cours/physiques">Physiques</Link></li>
                                <li><Link to="/cours/chimie">Chimie</Link></li>
                                <li><Link to="/cours/espagnol">Espagnol</Link></li>
                                <li><Link to="/cours/anglais">Anglais</Link></li>
                                <li><Link to="/cours/francais">Français</Link></li>
                                <li><Link to="/cours/creole">Créole</Link></li>
                                <li><Link to="/cours/biologie">Biologie</Link></li>
                                <li><Link to="/cours/economie">Economie</Link></li>
                           </ul>
                            
                            </nav>
                        </aside>




  )






}


export default function PageCours({ coursName }) {


  return (

    <main className="main-page-cours">
        
          <SideBarListeCours/>
        
    

              <section className="section">
                          <h1 className='title-section'> la  page COURS de mon site LEKÒL LAKAY</h1>
      {
                <Routes>
                     
                     
                  <Route path="/cours">
                    <Route index element={<PageForm/>}/>
                    <Route path="mathematique" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="physiques" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="chimie" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="espagnol" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="anglais" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="francais" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="creole" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="biologie" element={<Formulaire coursName={coursName}/>}/>
                    <Route path="economie" element={<Formulaire coursName={coursName}/>}/>
                 </Route >
                </Routes>
    }
                </section>
                        
                  
            
          </main>






  )





}