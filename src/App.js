import React from "react"
import { useState, useEffect} from "react"
import HomePageComponent from "./components/HomePageComponent"
import DetailComponent from "./components/DetailComponent"
import axios from "axios"

<<<<<<< HEAD
export default function App() {
  const [pagina, setPagina] = useState("ListPage")
  const [url, setUrl] = useState ("")
=======
import React, { useEffect, useState } from "react"
import axios from "axios";
import { CardContainer, PokemonPhoto, NavBar, Button, Logo, PokeDex } from "./components/styled-components/StyledHomeComponent";
import CardComponent from "./components/CardComponent";
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b

  const mudarPagina = (pagina, url) => {
    setPagina(pagina)
    setUrl(url)
  }
  
  
<<<<<<< HEAD
 
      let paginaAtual = ""
      if(pagina === "ListPage") {
        paginaAtual = <HomePageComponent/>
          
        
      }else{paginaAtual = 
        <>
          <DetailComponent url={url}/>
          <button onClick={ () => {setPagina("ListPage")}}>Voltar</button>
        </>
      }
=======
  const cardPokemon = pokemon.map((pokemon) => {
    return( 
      <CardComponent
        nomePokemon={pokemon.name.toUpperCase()}
        urlPokemon={pokemon.url}
      />
    )
  })
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b
  
  return (
      <>
        {paginaAtual}
      </>
    );
  }
  