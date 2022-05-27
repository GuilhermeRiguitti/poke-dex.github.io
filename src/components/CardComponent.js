import React from "react";
<<<<<<< HEAD
import { DivBotoes, BotaoCard, CardContainer,  PokemonPhoto } from "./styled-components/StyledCardComponent";
=======
import { DivBotoes, BotaoCard, CardContainer, CardFooter, PokemonPhoto } from "./styled-components/StyledCardComponent"
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b
import axios from "axios";
import { useState, useEffect } from "react";

function CardComponent(props) {
    const [Imagem, setImagem] = useState ("")
    
    useEffect (() =>{
        pegarFoto()
    }, []
    )
    
    const pegarFoto = () => {
          axios 
            .get(props.urlPokemon,{
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then((response) => { 
                setImagem(response.data.sprites.front_default)
            })
        }
<<<<<<< HEAD
    
    
    
=======
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b

    return (
        <CardContainer>
            <PokemonPhoto src={Imagem}/><br/>
            {props.nomePokemon}<br/>
            <span>
                <DivBotoes>
                    <BotaoCard >Adicionar</BotaoCard>
<<<<<<< HEAD
                    <BotaoCard onClick={ () => {props.onClickDetalhes("Detalhes", props.urlPokemon)}}>Detalhes</BotaoCard>
=======
                    <BotaoCard onClick={ () => {props.onClickDetalhes}}>Detalhes</BotaoCard>
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b
                </DivBotoes>
            </span>
        </CardContainer>        
    )
    
}

<<<<<<< HEAD

=======
>>>>>>> 46111869cd6a704778200c31fd4e4608ae73b42b
export default CardComponent;
