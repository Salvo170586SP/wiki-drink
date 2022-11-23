import { useState, useEffect } from "react";
import axios from "axios";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
  const url = type ? singleUrl : searchUrl;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    (async (query) => {
      setIsError(false);
      try {
        const res = await axios.get(`${url}${query}`);
        setData(res.data.drinks);
        setCount(res.data.drinks.length);
        /* console.log(res.data); */
      } catch (err) {
        setIsError(true);
      }
    })(query);

  }, [url, query]);

  return { data, count, isError, isLoading };
};

export default useFetch;
