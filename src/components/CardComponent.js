import React from "react";
import { DivBotoes, BotaoCard, CardContainer, PokemonPhoto} from "./styled-components/StyledCardComponent";
import { useRequestData } from "../Hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToAboutPage } from "../routes/coordinator";

function CardComponent(props) {
    const navigate = useNavigate()
    const [pokemons, id, name, data, sprites, moves, isLoading, error] = useRequestData(props.urlPokemon)
    
    const pokemonData = data && data.map((status) => {
        return (
            <p>{status.stat.name.toUpperCase()} : {status.base_stat} </p> 
        )
    })
 
    function salvarPokemon() {
        var idPokemon = id;
        var nomePokemon = name;
        var fotoPokemon = sprites.front_default;
        var statusPokemon = pokemonData;
        var listaPokemons = JSON.parse(localStorage.getItem('lista-pokemons')|| '[]');
        listaPokemons.push({
            id: idPokemon, 
            nome: nomePokemon,
            foto: fotoPokemon,
        });
        localStorage.setItem("lista-pokemons", JSON.stringify(listaPokemons));
        console.log('Salva com sucesso!')
        }  
        
    
    
    //const salvarLocalStorage = () => {
        //setPokedexList(listaPokeDex)
        //localStorage.setItem("pokedex", JSON.stringify(pokedexList))
    //}
    
    
    //criar uma funcao para jogar no onclick, que ao inves de adc no localStorage, adciona em um vetor, e dpois mandar para local storage
    return (
        <CardContainer>
            
            <PokemonPhoto src={sprites.front_default}/>
            {props.nomePokemon}
            <span>
                <DivBotoes>
                    <BotaoCard onClick={salvarPokemon}>Adicionar</BotaoCard> 
                    <BotaoCard onClick={() => goToAboutPage(navigate, id)}>Detalhes</BotaoCard>
                </DivBotoes>
            </span>
        </CardContainer>  
        
       
      )
    }



export default CardComponent;
