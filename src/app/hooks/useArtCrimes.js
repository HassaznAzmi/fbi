import { useEffect, useMemo, useState } from "react";

const useArtCrimes = ({ category, page, setPage }) => {
  const [data, setData] = useState();

  const query = useMemo(() => {
    return `${category ? `&crimeCategory=${category}` : ""}${
      page ? `&page=${page}` : ""
    }
    `;
  }, [category, page]);

  useEffect(() => {
    setPage(1);
  }, [category, setPage]);

  useEffect(() => {
    const getArtCrimes = async () => {
      fetch(
        `https://api.fbi.gov/@artcrimes?sort_on=modified&sort_order=asc${query}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getArtCrimes();
  }, [query]);

  return { data };
};

export default useArtCrimes;
