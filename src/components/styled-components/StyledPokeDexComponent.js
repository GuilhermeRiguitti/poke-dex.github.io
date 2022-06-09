import styled from "styled-components";

export const CardPokeDex = styled.div`
  border: 2px solid green;
  width: 200px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px 4px #77361a;
  padding: 8px;
  background-color: #F9F19999;
`

export const PokeDexCardContainer = styled.div`
  
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin: auto;
  
`

export const PokeDexContainer = styled.div`
    background-image: url("https://wallpaperaccess.com/full/45664.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 50px;
`
