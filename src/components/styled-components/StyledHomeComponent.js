import styled from "styled-components"
 
export const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: max-content;
    width: 100%;  
    align-items: center;
    background-color: #2166FF ; 
    justify-items: center;
     
    
`


export const Button = styled.button`
    padding: 0;
    border-radius: 10px;
    padding: 3px;
   

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
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;


   
`

