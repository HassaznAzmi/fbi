import { useEffect, useMemo, useState } from "react";

const useMostWanted = ({
  personClassification,
  status,
  posterClassification,
  page,
  setPage,
}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const query = useMemo(() => {
    return `${
      personClassification
        ? `&person_classification=${personClassification}`
        : ""
    }${status ? `&status=${status}` : ""}${
      posterClassification
        ? `&poster_classification=${posterClassification}`
        : ""
    }${page ? `&page=${page}` : ""}
    `;
  }, [personClassification, status, posterClassification, page]);

  useEffect(() => {
    setPage(1);
  }, [personClassification, status, posterClassification, setPage]);

  useEffect(() => {
    const getMostWanted = async () => {
      fetch(
        `https://api.fbi.gov/@wanted?sort_on=modified&sort_order=desc${query}`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
    };
    getMostWanted();
  }, [query]);

  return { data, error };
};

export default useMostWanted;
