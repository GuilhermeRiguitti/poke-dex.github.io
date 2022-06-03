import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`

export const DetailCard = styled.div`
  align-items: center;
  justify-content: space-around;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  width: 70%;
  border: 2px solid green;
  justify-content: center;
  margin: 50px;
  border-radius: 9px;
  box-shadow: 3px 3px 4px gray;

` 

export const FrontPicture = styled.img`
width: 50%;
margin: 10px;
border: 1px solid gray;
border-radius: 9px;
box-shadow: 2px 2px 3px gray;

`

export const StatsTitle = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: green;
  font-weight: bold;
`

