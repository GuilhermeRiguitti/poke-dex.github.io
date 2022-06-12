import styled from "styled-components";
import card from "./images/card.png"

export const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: max-content;
    width: 100%;  
    align-items: center;
    background-color: transparent ; 
    justify-items: center;
`

export const Button = styled.button`
    padding: 0;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    background-color:  #c95b2c95;
`

export const Logo = styled.img`
    width: 300px;
    height: 70px;
    padding: 10px;
`

export const PokeDex = styled.img`
    width: 50px;
    height: 50px;
 
`

export const PokeDexCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
`

export const CardPokeDex = styled.div`
  border: 2px solid green;
  width: 164px;
  display: flex;
  height: 230px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  justify-items: flex-end;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 3px 3px 4px #77361a;
  background-image: url(${card});
  background-color: white;
`
export const PokemonPhoto = styled.img`
  width: 100%;
  margin-bottom: -15px;

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
  cursor: pointer;
  
`



export const PokeDexContainer = styled.div`
    background-image: url("https://wallpaperaccess.com/full/45664.jpg");
    background-repeat: no-repeat;
    height: max-content;
    background-size: cover;
    padding-bottom: 50px;
`
