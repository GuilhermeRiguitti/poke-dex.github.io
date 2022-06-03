import { CardContainer, PokemonPhoto, NavBar, Button, Logo, PokeDex } from "../components/styled-components/StyledHomeComponent";
import { URL_BASE_DETAIL } from "../constants/URL_BASE";
import { useRequestDetails } from "../Hooks/useRequestDetails";
import { useParams } from "react-router-dom"
import { StatsTitle, FrontPicture, DetailCard, DetailContainer } from "./styled-components/StyledDetailComponent";

export default function DetailComponent(props) {
  const params = useParams()
  const [id, data, sprites, moves, isLoading, error] = useRequestDetails(`${URL_BASE_DETAIL}${params.id}`)
  console.log(data)
//MANDAR O ID  COMO PROPS NO ONCLICK DO CARD COMPONENT PRA CA E JUNTAR COM A URL BASE NA FUNCAO
//USE REQUEST E MONTAR O CARD DETAIL SEPARADO INVES DE FAZER RENDERIZACAO CONDICIONAL NO CARD COMPONENT
  const pokemonData = data && data.map((status) => {
    return (
    <p>{status.stat.name.toUpperCase()} : {status.base_stat} </p>     
    )
  })

  const pokemonMoves = moves.map((move, index) => {
    if (index < 4) {
      return (
        <p>{move.move.name.toUpperCase()}</p>
      )
    }
  })


  return (
    <>
    <NavBar>
      <Button><PokeDex src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" /></Button>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
    </NavBar>
    <DetailContainer> 
      
    <DetailCard>
      <span>
        <FrontPicture src={sprites.front_default}/>
        <FrontPicture src={sprites.back_default}/>
      </span>
      <span>
        <StatsTitle>POKEMON</StatsTitle>
         {pokemonData}
       

      </span>
      <span>
      <StatsTitle>MOVES</StatsTitle>
       {pokemonMoves}
      
      </span>
      
      
     </DetailCard>
    </DetailContainer>
    </>
)
}