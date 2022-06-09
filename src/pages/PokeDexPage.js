import { NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import { CardPokeDex } from "../components/styled-components/StyledPokeDexComponent"
import { goToAboutPage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";

export default function PokeDexPage() {
  const navigate = useNavigate() 
  const [pokemons, setPokemons] = useState ([])
  
  useEffect(() => {
    const pokemon = JSON.parse(localStorage.getItem("lista-pokemons"));
    if (pokemon){
      setPokemons(pokemon)
    }
  },[pokemons] )
 
  const pokemonMap = pokemons.map((pokemon) => {
    return <CardPokeDex>
    

      <img src={pokemon.foto}/>
      <p>{pokemon.nome}</p>
      <p>{pokemon.status}</p>
      <button onClick={() => goToAboutPage(navigate, pokemon.id)}>Detalhes</button>
      
    
    
    </CardPokeDex>
  })
  

  
  return (
    <>
      <NavBar>
      <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
    </NavBar>
    
        {pokemonMap}
        
      </>
    )
}

