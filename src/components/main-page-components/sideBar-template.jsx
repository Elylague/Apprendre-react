import React from 'react'
import '../../styles/sidebar-template.css'

export default function SideBarTemplate({children}){
  return(
                        <aside className="aside">
                            <h3 > la barre de navigation</h3>
                            <nav>
                              <ul>
                              
                               {children}
                              
                           </ul>
                            
                            </nav>
                        </aside>
          
    
    
    
    )
  
  
  
  
  
}