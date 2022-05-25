import styled from "styled-components";


export const CardContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px
`;


export const CardFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;


export const PokemonPhoto = styled.img`
  width: 100%;
`;