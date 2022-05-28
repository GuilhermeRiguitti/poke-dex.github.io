import React from "react"
import { useState, useEffect} from "react"
import HomePageComponent from "./components/HomePageComponent"
import DetailComponent from "./components/DetailComponent"
import axios from "axios"


export default function App() {
  const [pagina, setPagina] = useState("ListPage")
  const [url, setUrl] = useState ("")



  const mudarPagina = (pagina, url) => {
    setPagina(pagina)
    setUrl(url)
  }
  
  

 
      let paginaAtual = ""
      if(pagina === "ListPage") {
        paginaAtual = <HomePageComponent/>
          
        
      }else{paginaAtual = 
        <>
          <DetailComponent url={url}/>
          <button onClick={ () => {setPagina("ListPage")}}>Voltar</button>
        </>
      }

  
  return (
      <>
        {paginaAtual}
      </>
    );
  }
  