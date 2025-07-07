import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";

const FilterTags = ({
  filteredData,
  title,
  appliedFilters,
  onRemoveFilter,
  onClearAll,
}) => {
  const [visibleCount, setVisibleCount] = useState(3); // 👈 Mặc định hiển thị 3

  const getTotalAppliedFilters = () => {
    return Object.values(appliedFilters).reduce(
      (total, filters) => total + filters.length,
      0
    );
  };

  const totalItems = filteredData.length;
  const visibleItems = filteredData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, totalItems));
  };

  if (getTotalAppliedFilters() === 0) return null;

  return (
    <div className="max-w-screen-2xl px-4 3xl:px-0 2xl:mx-auto mx-auto py-4 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-base">
          Displaying {visibleItems.length}/{totalItems} {title}
        </h2>
        <Button variant="main" onClick={onClearAll}>
          Clear Filters
        </Button>
      </div>

      <div className="mt-4 empty:mt-0">
        <div className="flex flex-wrap gap-4">
          {Object.keys(appliedFilters).map((filterType) =>
            appliedFilters[filterType].map((value) => (
              <span
                key={`${filterType}-${value}`}
                className="flex items-center rounded-full border-2 border-black px-4 py-2 text-black md:[&:nth-child(n+6)]:flex [&:nth-child(n+6)]:hidden"
              >
                <span className="mr-4">{value}</span>
                <button
                  onClick={() => onRemoveFilter(filterType, value)}
                  className="text-black hover:text-link transition-colors duration-150"
                >
                  <X size={14} />
                </button>
              </span>
            ))
          )}
        </div>
      </div>

      {visibleCount < totalItems && (
        <div className="mt-4 flex justify-center">
          <Button variant="outline" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterTags;
