import { CardContainer, PokemonPhoto, NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import { useRequestData } from "../Hooks/useRequestData";
import { BotaoCard } from "./styled-components/StyledCardComponent";
import CardComponent from "./CardComponent";
import { URL_BASE } from "../constants/URL_BASE";
import { useRequestDetails } from "../Hooks/useRequestDetails";

export default function DetailComponent(props) {
  
  const [id, stats, sprites, moves, isLoading, error] = useRequestDetails(URL_BASE + props.id)
  
  console.log(props.id)
//MANDAR O ID  COMO PROPS NO ONCLICK DO CARD COMPONENT PRA CA E JUNTAR COM A URL BASE NA FUNCAO
//USE REQUEST E MONTAR O CARD DETAIL SEPARADO INVES DE FAZER RENDERIZACAO CONDICIONAL NO CARD COMPONENT
 
  return (
  <>  
    <NavBar>
      <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
    </NavBar>
     
    <CardComponent/>
    </>
)
}