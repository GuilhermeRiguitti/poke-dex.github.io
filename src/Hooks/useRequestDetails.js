import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDetails= (url) => {
    const [id, setId] = useState ({})
    const [stats, setStats] = useState([])
    const [sprites, setSprites] = useState({})
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const gets = (url) => {
        setIsLoading(true);
        axios
        .get(url,{
            headers: {
              "Content-Type": "application/json"
            }
            })
            .then((res) => { 
                
                setStats(res.data.stats);
                setSprites(res.data.sprites)
                setMoves(res.data.moves)
                setTypes(res.data.types)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };
    
useEffect(() => {
    gets(url);
}, [url])

    return [ stats, sprites, moves, types, isLoading, error];
}