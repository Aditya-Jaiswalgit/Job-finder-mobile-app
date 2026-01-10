import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://jsearch.p.rapidapi.com/${endpoint}`,
        {
          params: params,
          headers: {
            "x-rapidapi-key":
              "8abe2a99f7msh12fd44abc3ce627p11ebabjsnba465b01f5fe",
            "x-rapidapi-host": "jsearch.p.rapidapi.com",
          },
        }
      );

      // JSearch always returns an array in `data`
      setData(response.data.data || []);
    } catch (err) {
      console.log("FETCH ERROR:", err.response?.data || err.message);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
