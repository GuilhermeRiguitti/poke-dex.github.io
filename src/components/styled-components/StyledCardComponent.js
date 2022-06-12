import styled from "styled-components";
import card from "./images/card.png"

export const CardContainer = styled.div`
  border: 2px solid green;
  width: 164px;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 3px 3px 4px #77361a;
  background-image: url(${card});
  background-color: white;
`

export const DivBotoes = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr
`

export const BotaoCard = styled.button`
  background-color: transparent;
  padding: 7px;
  border-radius: 15px;
  margin: 7px 5px 7px 5px;
  border: 0px;
  color: green;
  cursor: pointer
`

export const PokemonPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;
;
`

