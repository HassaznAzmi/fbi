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
        filter === curr && "bg-red-200 dark:bg-red-950"
      } rounded hover:bg-red-900 transition-all mt-1 border border-gray-400 p-1`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
