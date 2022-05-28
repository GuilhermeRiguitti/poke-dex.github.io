import React from "react";
import { DivBotoes, BotaoCard, CardContainer,  PokemonPhoto } from "./styled-components/StyledCardComponent";
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
    
    
    


    return (
        <CardContainer>
            <PokemonPhoto src={Imagem}/><br/>
            {props.nomePokemon}<br/>
            <span>
                <DivBotoes>
                    <BotaoCard >Adicionar</BotaoCard>

                    <BotaoCard onClick={ () => {props.onClickDetalhes("Detalhes", props.urlPokemon)}}>Detalhes</BotaoCard>

            

                </DivBotoes>
            </span>
        </CardContainer>        
    )
    
}




export default CardComponent;
