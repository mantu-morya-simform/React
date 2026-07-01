import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const resp = await fetch("url");
        setData(await resp.json());
      } catch (error) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, err };
};

export default useFetch;
