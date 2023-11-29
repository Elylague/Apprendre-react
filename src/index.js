import React from "react"
import {createRoot} from "react-dom/client"
import App from "./components/app";
//import MainPage from  "./components/main-page-components/main-page";
import {BrowserRouter} from "react-router-dom";
//const element= <App/>
  
  


const root =createRoot(document.getElementById("root"))      

root.render(
  <React.StrictMode>
  <BrowserRouter>
       <App/>
  </BrowserRouter>
 </React.StrictMode>
   );