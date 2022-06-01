import { CardContainer, PokemonPhoto, NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import { useRequestData } from "../Hooks/useRequestData";
import { BotaoCard } from "./styled-components/StyledCardComponent";
import CardComponent from "./CardComponent";
import { URL_BASE } from "../constants/URL_BASE";

export default function DetailComponent(props) {

/*
  const statsPokemon = stats && stats.map((detalhe) => {
    return <p>{detalhe.stat.name} : {detalhe.base_stat}</p>
   })
   console.log(statsPokemon)
*/


return (
  <>  
    <NavBar>
      <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
    </NavBar>
    <CardComponent></CardComponent>
  </>
)
}