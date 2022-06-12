import { NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import { BotaoCard } from "../components/styled-components/StyledCardComponent"
import { useEffect, useState } from "react";
import { CardPokeDex, PokeDexContainer, PokeDexCardContainer } from "../components/styled-components/StyledPokeDexComponent"
import { goToAboutPage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
export default function PokeDexPage() {
  const navigate = useNavigate() 
  const [pokemons, setPokemons] = useState ([])
  
  useEffect(() => {
    const pokemon = JSON.parse(localStorage.getItem("lista-pokemons"));
    if (pokemon){
      setPokemons(pokemon)
    }
  },[pokemons] )
 

  
      
  function attPokeDex(nome){
    var listaPokemons = JSON.parse(localStorage.getItem('lista-pokemons') );
    const novaPokeDex = listaPokemons.filter((pokemon) => {
      return pokemon.nome !== nome
    })
    localStorage.setItem("lista-pokemons", JSON.stringify(novaPokeDex));
    }
    
  const pokemonMap = pokemons.map((pokemon) => {
    return <CardPokeDex>
      <img src={pokemon.foto}/>
      <p>{pokemon.nome}</p>
      <BotaoCard onClick={() => goToAboutPage(navigate, pokemon.id)}>Detalhes</BotaoCard>
      <BotaoCard onClick={() => attPokeDex(pokemon.nome)}>Remover</BotaoCard>
    </CardPokeDex>
  })
  
  return (
    <PokeDexContainer>
      <NavBar>
      <Button onClick={() => goToHomePage(navigate)}><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
    </NavBar>
      <PokeDexCardContainer>
        {pokemonMap}
        </PokeDexCardContainer>
      </PokeDexContainer>
    )
}

