import React, { useState } from "react";
import { DivBotoes, BotaoCard, CardContainer,  PokemonPhoto } from "./styled-components/StyledCardComponent";
import { useRequestDetails } from "../Hooks/useRequestDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goToAboutPage } from "../routes/coordinator";

function CardComponent(props) {
    const navigate = useNavigate()
    const [stats, sprites, moves, isLoading, error] = useRequestDetails(props.urlPokemon)
    const params = useParams()


    const statsPokemon = stats && stats.map((stat) => {
      return <>{stat.base_stat}</>
    })

   
    if( params.pagina !== "detail"){ //s
    return (
        <CardContainer>
            {props.nomePokemon}<br/>
            <img src={sprites.front_default}/>
            <span>
                <DivBotoes>
                    <BotaoCard>Adicionar</BotaoCard> 
                    <BotaoCard onClick={() => goToAboutPage(navigate, 'detail')}>Detalhes</BotaoCard>
                </DivBotoes>
            </span>
        </CardContainer>        
    )
    }else{
      return (
        <>  
        <p>asdasdasds</p>
           {statsPokemon}
        </>
      ) 
    }
}




export default CardComponent;
