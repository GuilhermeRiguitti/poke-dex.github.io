import styled from "styled-components";


export const CardContainer = styled.div`
  border: 2px solid green;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 4px gray;
  padding: 8px;
`



export const CardFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

export const DivBotoes = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr
`

export const BotaoCard = styled.button`
  background-color: rgba(255, 0, 0, 0.4);
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  
`

export const PokemonPhoto = styled.img`
  width: 50%;
  box-shadow: 0.1px 5px 4px 0.1px;
  border-radius: 50px;
`