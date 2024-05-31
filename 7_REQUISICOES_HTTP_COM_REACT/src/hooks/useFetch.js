import { useEffect, useState } from "react";

//! 6 - Custom hook para resgate de dados

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //! 7 - Refatorando o POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //! 8 - Estado de Loading
  const [loading, setLoading] = useState(false);

  //! 10 - Tratando erros
  const [error, setError] = useState(null);

  //! 11 - Desafio 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setMethod(method);
      //! 11 - Desafio 6
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
      });
      setMethod(method);
      setItemId(data);
    }
  };
  //

  useEffect(() => {
    const fetchData = async () => {
      //! 8 - Estado de Loading
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum error ao carregar os dados!");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //! 7 - Refatorando o POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();
      } //! 11 - Desafio 6
      else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);

        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
