import React from "react";
import { DivBotoes, BotaoCard, CardContainer,  PokemonPhoto } from "./styled-components/StyledCardComponent";
import { useRequestDetails } from "../Hooks/useRequestDetails";
import { useNavigate } from "react-router-dom";
import { goToAboutPage } from "../routes/coordinator";

function CardComponent(props) {
    const navigate = useNavigate()
    const [id, data, sprites, moves, isLoading, error] = useRequestDetails(props.urlPokemon)
    
   
  
    return (
        <CardContainer>
            {props.nomePokemon}<br/>
            <img src={sprites.front_default}/>
            <span>
                <DivBotoes>
                    <BotaoCard>Adicionar</BotaoCard> 
                    <BotaoCard onClick={() => goToAboutPage(navigate, id)}>Detalhes</BotaoCard>
                </DivBotoes>
            </span>
        </CardContainer>  
        
       
      )
    }



export default CardComponent;
