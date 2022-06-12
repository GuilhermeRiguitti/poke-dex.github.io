import { Button, HomeContainer, CardContainer, NavBar, ButtonPage, Logo, PokeDex, DivPagination } from "../components/styled-components/StyledHomeComponent";
import CardComponent from "../components/CardComponent";
import { URL_BASE } from "../constants/URL_BASE";
import { useRequestData } from "../Hooks/useRequestData";
import { goToAboutPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect} from "react";


export default function HomePage() { 
  const [contador, setContador] = useState (0)
  const [resultado, setResultado] = useState([])
  const [pokemons, id, name, data, sprites, moves, types, isLoading, error] = useRequestData(`${URL_BASE}?offset=${contador}&limit=20`);
  const navigate = useNavigate()
   
  const toPage1 = (event) => {
    setContador(0)
  }
  const toPage2 = (event) => {
    setContador(20)
  }

  const toPage3 = (event) => {
    setContador(40)
  }

  const toPage4 = (event) => {
    setContador(60)
  }

  const toPage5 = (event) => {
    setContador(80)
  }

  const toPage6 = (event) => {
    setContador(120)
  }

  const toPage7 = (event) => {
    setContador(140)
  }

  const toPage8 = (event) => {
    setContador(160)
  }

  const toPage9 = (event) => {
    setContador(180)
  }

  const toPage10 = (event) => {
    setContador(200)
  }

  const toPage11 = (event) => {
    setContador(220)
  }

  const toPage12 = (event) => {
    setContador(240)
  }

  const toPage13 = (event) => {
    setContador(260)
  }

  const toPage14 = (event) => {
    setContador(280)
  }

  const toPage15 = (event) => {
    setContador(300)
  }

  const toPage16 = (event) => {
    setContador(320)
  }

  const toPage17 = (event) => {
    setContador(340)
  }

  
  
  const voltarPagina = (event) => {
    setContador(contador - 20)
  }
  
  
  const pokemonsPokeDex = JSON.parse(localStorage.getItem('lista-pokemons') || '[]');
  var todosPokemons = pokemons;
  var pokedexPokemons = pokemonsPokeDex;
  //const isSamePokemon = (arrayA, arrayB) => arrayA.nome === arrayB.name;
  useEffect(() =>{
    const removerPokemons = () => {
      const pokemonsRemovidos = todosPokemons.filter(({name: id1 }) => 
        !pokedexPokemons.some(({ nome: id2}) => 
          id2 === id1,
          
      ))
      setResultado(pokemonsRemovidos)
    }
     removerPokemons()
  }, [resultado])
    
    
 
    const pokemonsList = resultado && resultado.map((pokemon, index) => {
    return <>
        <CardComponent
          nomePokemon={pokemon.name.toUpperCase()}
          urlPokemon={pokemon.url}
        />
        </>
  })

  return (
    <HomeContainer>
      <NavBar>
        <Button onClick={() => goToAboutPage(navigate, 'pokedexpage') }><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
      </NavBar>
      <CardContainer>
        {isLoading && <p>Carregando ...</p>}
        {!isLoading && error &&<p>Ocorreu um erro</p>}
        {!isLoading && pokemons && pokemons.length > 0 && pokemonsList}
        {!isLoading && pokemons && pokemons.length === 0 && (<p>Nao há nenhum Pokemon</p>)}
      </CardContainer>
      <DivPagination>
        <ButtonPage value={contador} onClick={toPage1}>1</ButtonPage>
        <ButtonPage value={contador} onClick={toPage2}>2</ButtonPage>
        <ButtonPage value={contador} onClick={toPage3}>3</ButtonPage>
        <ButtonPage value={contador} onClick={toPage4}>4</ButtonPage>
        <ButtonPage value={contador} onClick={toPage5}>5</ButtonPage>
        <ButtonPage value={contador} onClick={toPage6}>6</ButtonPage>
        <ButtonPage value={contador} onClick={toPage7}>7</ButtonPage>
        <ButtonPage value={contador} onClick={toPage8}>8</ButtonPage>
        <ButtonPage value={contador} onClick={toPage9}>9</ButtonPage>
        <ButtonPage value={contador} onClick={toPage10}>10</ButtonPage>
        <ButtonPage value={contador} onClick={toPage11}>11</ButtonPage>
        <ButtonPage value={contador} onClick={toPage12}>12</ButtonPage>
        <ButtonPage value={contador} onClick={toPage13}>13</ButtonPage>
        <ButtonPage value={contador} onClick={toPage14}>14</ButtonPage>
        <ButtonPage value={contador} onClick={toPage15}>15</ButtonPage>
        <ButtonPage value={contador} onClick={toPage16}>16</ButtonPage>
        <ButtonPage value={contador} onClick={toPage17}>17</ButtonPage>

      </DivPagination>
    </HomeContainer>

  )

}