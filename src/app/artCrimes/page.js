"use client";
import React, { useState } from "react";

import FilterButton from "components/FilterButton";
import Layout from "components/Layout";

import useArtCrimes from "hooks/useArtCrimes";

import { CRIME_CATEGORIES } from "utils/constants";

const MostWanted = () => {
  const [category, setCategory] = useState();
  const [page, setPage] = useState(1);

  const { data: artCrimes } = useArtCrimes({
    category,
    page,
  });

  console.log(artCrimes);

  const filters = (
    <>
      <h3 className="mt-3">Categories</h3>
      {Object.keys(CRIME_CATEGORIES).map((cat) => {
        return (
          <FilterButton
            key={cat}
            filter={category}
            setFilter={setCategory}
            curr={cat}
          >
            {CRIME_CATEGORIES?.[cat]}
          </FilterButton>
        );
      })}
    </>
  );

  return (
    <Layout
      filters={filters}
      page={page}
      setPage={setPage}
      data={artCrimes}
      pageName="artCrimes"
    />
  );
};

export default MostWanted;
