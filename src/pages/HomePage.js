import { CardContainer, BotaoCard, NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import CardComponent from "../components/CardComponent";
import { URL_BASE } from "../constants/URL_BASE";
import { useRequestData } from "../Hooks/useRequestData";
import { goToAboutPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {React, useState} from "react";

export default function HomePage() { 
  
  const [contador, setContador] = useState (20)
  const [contador2, setContador2] = useState (40)
  const [pokemons, isLoading, error] = useRequestData(URL_BASE);
  const navigate = useNavigate()
                                                              
  const mudarPagina = (event) => {
    setContador(contador + 20)
    setContador2(contador2 + 20)
  }
  
  const voltarPagina = (event) => {
    setContador(contador - 20)
  }

  const pokemonsList = pokemons && pokemons.map((pokemon, index) => {
    return <><CardComponent
          nomePokemon={pokemon.name.toUpperCase()}
          urlPokemon={pokemon.url}
        />
        </>

  })

  return (
    <>
      <NavBar>
        <button onClick={() => goToAboutPage(navigate, 'PokeDex') }><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></button>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
      </NavBar>
      <CardContainer>
        {isLoading && <p>Carregando ...</p>}
        {!isLoading && error &&<p>Ocorreu um erro</p>}
        {!isLoading && pokemons && pokemons.length > 0 && pokemonsList}
        {!isLoading && pokemons && pokemons.length === 0 && (<p>Nao há nenhum Pokemon</p>)}
      </CardContainer>
     
    </>

  )

}