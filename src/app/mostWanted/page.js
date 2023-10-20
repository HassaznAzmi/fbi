"use client";
import React, { useState } from "react";

import { getMostWanted } from "utils/apis";
import PersonCard from "components/PersonCard";

import Banner from "components/Banner";
import useMostWanted from "hooks/useMostWanted";
import { CLASSIFICATIONS, STATUS, TYPES } from "utils/constants";
import FilterButton from "components/FilterButton";
import Pagination from "components/Pagination";

const MostWanted = () => {
  const [personClassification, setPersonClassification] = useState();
  const [posterClassification, setPosterClassification] = useState();
  const [status, setStatus] = useState();
  const [page, setPage] = useState(1);

  const { data: mostWanted } = useMostWanted({
    personClassification,
    status,
    posterClassification,
    page,
  });

  console.log(mostWanted);

  return (
    <>
      <Banner />
      <div className="flex">
        <div className="w-60 pt-7 flex flex-col sticky top-0 self-start">
          <h3>Person Classification</h3>
          {Object.keys(TYPES).map((type) => {
            return (
              <FilterButton
                key={type}
                filter={personClassification}
                setFilter={setPersonClassification}
                curr={type}
              >
                {TYPES?.[type]}
              </FilterButton>
            );
          })}

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
        </div>
        {mostWanted?.items?.length === 0 ? (
          <span className="flex flex-1 justify-center p-4">
            No Persons found
          </span>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 grid p-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {mostWanted?.items?.map((person) => {
                return <PersonCard key={person?.uid} person={person} />;
              })}
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={page}
              totalCount={mostWanted?.total}
              pageSize={20}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MostWanted;
