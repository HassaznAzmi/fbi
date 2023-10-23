"use client";
import React, { useState, useEffect } from "react";

import Banner from "components/Banner";
import Pagination from "components/Pagination";
import FilterModal from "components/FilterModal";
import PersonCard from "components/PersonCard";
import ArtCard from "components/ArtCard";

import useScreenSize from "hooks/useScreenSize";

import FilterIcon from "utils/images/filter";

const Layout = ({
  filters,
  page,
  setPage,
  data,
  error,
  pageName = "mostWanted",
}) => {
  const screenSize = useScreenSize();

  // const [personClassification, setPersonClassification] = useState();
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = filterModalVisible ? "hidden" : "auto";
    }
  }, [filterModalVisible]);

  return (
    <>
      <Banner artImage={pageName === "artCrimes"} />
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      >
        {filters}
      </FilterModal>
      {screenSize?.width <= 555 ? (
        <div className="w-full sticky top-0 flex justify-start items-center border-b-2 border-b-gray-500  z-40 bg-inherit">
          <button
            className="flex items-center py-4 pl-3"
            onClick={() => setFilterModalVisible(true)}
          >
            <FilterIcon />
            <span className="ml-2">Filters</span>
          </button>
        </div>
      ) : null}
      <div className="flex w-full pl-2" style={{ maxWidth: 1750 }}>
        {screenSize?.width > 555 ? (
          <div className="w-48 pt-7 flex flex-col sticky top-0 self-start">
            <h2 className=" font-bold">Filters</h2>
            {filters}
          </div>
        ) : null}
        {data?.items?.length === 0 ? (
          <span className="flex flex-1 justify-center p-4">
            No Persons found.
          </span>
        ) : (
          <div className="flex-1 flex flex-col">
            {error ? (
              <span className="flex flex-1 justify-center p-4">
                Error retrieving data from{" "}
                <a
                  href="https://api.fbi.gov/wanted?sort_on=modified&sort_order=desc"
                  className="ml-1 text-blue-500"
                >
                  API
                </a>
                . Please try again later.
              </span>
            ) : null}
            <div className="flex-1 grid p-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {data?.items?.map((person) => {
                return pageName === "mostWanted" ? (
                  <PersonCard key={person?.uid} person={person} />
                ) : (
                  <ArtCard key={person?.uid} person={person} />
                );
              })}
            </div>
            <Pagination
              className="pagination-bar"
              currentPage={page}
              totalCount={data?.total}
              pageSize={20}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
