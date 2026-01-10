import { UseFetchOptions } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
// const rapidapikey = RAPIDAPIKEY;

const useFetch = (endpoint: string, { query, num_pages }: UseFetchOptions) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { query },
    headers: {
      "x-rapidapi-key": "8abe2a99f7msh12fd44abc3ce627p11ebabjsnba465b01f5fe",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error: any) {
      setError(error);
      Alert.alert(`There is an Error : ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
