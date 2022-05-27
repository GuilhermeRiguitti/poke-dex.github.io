import React, {useEffect , useState} from 'react';
import axios from 'axios';
export default function DetailComponent(props) {
    const [detalhes, setDetalhes] = useState({});
    console.log(props.url)
    
    useEffect(()=>{
      pegarDetalhes();
    }, []
    )
    const pegarDetalhes = () => {
      axios
        .get(props.url,{
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          setDetalhes(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
        
    };
    
    return (
      <>
       
       
          <h5>
            NAME:   <br/> <br/>
            HEIGHT:   <br/> <br/> 
            MASS:   <br/> <br/>
            HAIR COLOR:  <br/> <br/>
            SKIN COLOR: <br/> <br/>
            EYE COLOR:<br/> <br/>
            BIRTH YEAR:  <br/> <br/>
            GENDER:  <br/>
          </h5>
        
      </>
    );
  };