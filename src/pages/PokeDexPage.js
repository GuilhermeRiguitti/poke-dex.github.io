import { NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";

 
export default function PokeDexPage() { 


  return (
    <>
      <NavBar>
        <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
      </NavBar>
      </>
    )
}

