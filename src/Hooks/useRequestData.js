import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
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
                setData(res.data.results);
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

    return [data, isLoading, error];
}