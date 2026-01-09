import { useFetchProps } from "@/type";
import { useState } from "react";

// const rapidapikey = RAPIDAPIKEY;

const useFetch = ({ endpoint }: useFetchProps) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "x-rapidapi-key": "8abe2a99f7msh12fd44abc3ce627p11ebabjsnba465b01f5fe",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
};
