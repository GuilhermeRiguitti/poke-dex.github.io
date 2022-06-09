import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToHomePage } from "../routes/coordinator";
import DetailComponent from "../components/DetailComponent"
import PokeDexPage from "./PokeDexPage";


  const AboutPage = () => {
  const navigate = useNavigate()
  const params = useParams()
 

  return (
    <div>
      
      {params.id === 'pokedexpage' ? <PokeDexPage/> : <DetailComponent/>}
    
      <button onClick={() => goToHomePage(navigate)}>Página home</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default AboutPage;