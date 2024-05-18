import {useState, useEffect} from 'react'
import API_KEY from "./keys"

//search engine id: 44aef32faadf84312
//tells which search engine to use
const CONTEXT_KEY = "44aef32faadf84312"

const useGoogleSearch=(term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }

    fetchData();
  }, [term])

  return {data}
}

export default useGoogleSearch
