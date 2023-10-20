import { useEffect, useMemo, useState } from "react";

const useMostWanted = ({
  personClassification,
  status,
  posterClassification,
  page,
}) => {
  const [data, setData] = useState();

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
    const getMostWanted = async () => {
      fetch(
        `https://api.fbi.gov/@wanted?sort_on=modified&sort_order=desc${query}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    getMostWanted();
  }, [query]);

  return { data };
};

export default useMostWanted;
