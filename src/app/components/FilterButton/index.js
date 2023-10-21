import React from "react";

const FilterButton = ({ setFilter, filter, curr, children }) => {
  const onSetFilter = () => {
    if (filter === curr) {
      setFilter(undefined);
    } else {
      setFilter(curr);
    }
  };
  return (
    <button
      onClick={onSetFilter}
      className={`${
        filter === curr && "bg-red-950"
      } rounded hover:bg-gray-500 transition-all mt-1 border border-gray-400 p-1 text-inherit`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
