import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToHomePage } from "../routes/coordinator";
import DetailComponent from "../components/DetailComponent"
import PokeDexPage from "./PokeDexPage";
import CardComponent from "../components/CardComponent";

  const AboutPage = () => {
  const navigate = useNavigate()
 

  return (
    <div>
      
      <DetailComponent/>

      <button onClick={() => goToHomePage(navigate)}>Página home</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default AboutPage