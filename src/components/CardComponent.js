import styled from "styled-components";
import { PostContainer, PokemonPhoto, PostFooter } from "./styled-components/StyledCardComponent";
export default function CardComponent() {
return (
    <PostContainer>

      <PokemonPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        
        /botao de adicionar 
      </PostFooter>
    </PostContainer>
  );
}



