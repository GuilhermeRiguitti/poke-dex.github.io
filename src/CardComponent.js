import React from "react";
import { CardContainer, CardFooter, PokemonPhoto } from "./components/styled-components/StyledCardComponent";
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
            <img width={'128em'}src={Imagem}/><br/>
            {props.nomePokemon}<br/>
        </CardContainer>        
    )
    
}


export default CardComponent;
