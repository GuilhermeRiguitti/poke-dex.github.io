
import React, { useEffect, useState } from "react"
import axios from "axios";
import { CardContainer, PokemonPhoto, NavBar, Button, Logo, PokeDex } from "./components/styled-components/StyledHomeComponent";
import CardComponent from "./CardComponent";

export default function UmPokemon(props) {  //preciso fazer outra pagina para exibir abilidadese fotos pq é um vetor de objetos >> com uma funcao aqui nessa pagina para puxar a outra pagina com uma nova requisição nela
  const [imagem, setImagem] = useState ([])
  const [pokemon, setPokemon] = useState ([])
  
  useEffect(() => {
    pegarPokemon();
    
  }, []
  )
  const pegarPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setPokemon(response.data.results)
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  


  
  const cardPokemon = pokemon.map((pokemon) => {
    return <CardComponent
        nomePokemon={pokemon.name}
        urlPokemon={pokemon.url}
      />
    
  })
  
  return (
    <>
      <NavBar>
        <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
      </NavBar>
      <CardContainer>
        {cardPokemon}
      </CardContainer>
    </>

  );

}