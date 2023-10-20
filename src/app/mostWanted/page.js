"use client";
import React, { useState } from "react";

import FilterButton from "components/FilterButton";
import Layout from "components/Layout";

import useMostWanted from "hooks/useMostWanted";

import { CLASSIFICATIONS, STATUS } from "utils/constants";

const MostWanted = () => {
  const [posterClassification, setPosterClassification] = useState();
  const [status, setStatus] = useState();
  const [page, setPage] = useState(1);

  const { data: mostWanted } = useMostWanted({
    status,
    posterClassification,
    page,
  });

  console.log(mostWanted);

  const filters = (
    <>
      <h3 className="mt-3">Status</h3>
      {Object.keys(STATUS).map((st) => {
        return (
          <FilterButton
            key={st}
            filter={status}
            setFilter={setStatus}
            curr={st}
          >
            {STATUS?.[st]?.name}
          </FilterButton>
        );
      })}

      <h3 className="mt-3">Classifications</h3>
      {Object.keys(CLASSIFICATIONS).map((classification) => {
        return (
          <FilterButton
            key={classification}
            filter={posterClassification}
            setFilter={setPosterClassification}
            curr={classification}
          >
            {CLASSIFICATIONS?.[classification]}
          </FilterButton>
        );
      })}
    </>
  );

  return (
    <Layout filters={filters} page={page} setPage={setPage} data={mostWanted} />
  );
};

export default MostWanted;
