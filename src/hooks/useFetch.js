import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (pageId = 1) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        const { status, data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${pageId}`
        );
        if (status === 200) {
          setData({ info: data.info, characters: data.results });
        }
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    })();
  }, [pageId]);

  return { data, isPending, error };
};
