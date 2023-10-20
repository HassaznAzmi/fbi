"use client";
import React, { useState, useEffect } from "react";

import PersonCard from "components/PersonCard";
import Banner from "components/Banner";
import Pagination from "components/Pagination";
import FilterButton from "components/FilterButton";
import FilterModal from "components/FilterModal";

import useMostWanted from "hooks/useMostWanted";
import useScreenSize from "hooks/useScreenSize";

import { CLASSIFICATIONS, STATUS } from "utils/constants";
import FilterIcon from "utils/images/filter";

const MostWanted = () => {
  const screenSize = useScreenSize();

  // const [personClassification, setPersonClassification] = useState();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [posterClassification, setPosterClassification] = useState();
  const [status, setStatus] = useState();
  const [page, setPage] = useState(1);

  const { data: mostWanted } = useMostWanted({
    // personClassification,
    status,
    posterClassification,
    page,
  });

  console.log(mostWanted);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = filterModalVisible ? "hidden" : "auto";
    }
  }, [filterModalVisible]);

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
    <>
      <Banner />
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      >
        {filters}
      </FilterModal>
      {screenSize.width <= 555 ? (
        <div className="w-full sticky top-0 flex justify-start items-center border-b-2 border-b-gray-500  z-40 bg-inherit">
          <button
            className="flex items-center py-4"
            onClick={() => setFilterModalVisible(true)}
          >
            <FilterIcon />
            <span className="ml-2">Filters</span>
          </button>
        </div>
      ) : null}
      <div className="flex">
        {screenSize.width > 555 ? (
          <div className="w-48 pt-7 flex flex-col sticky top-0 self-start">
            <h2 className=" font-bold">Filters</h2>
            {/* <h3>Person Classification</h3>
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
          })} */}

            {filters}
          </div>
        ) : null}
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
