// File: components/ResultsGrid.jsx
import React from "react";
import ItemCard from "./ItemCard";
import { Button } from "../ui/Button";

const ResultsGrid = ({
  filteredData,
  title,
  renderItem,
  onClearAll,
  gridCols,
}) => {
  return (
    <div className="my-16 lg:my-24">
      <div className="max-w-screen-2xl px-4 3xl:px-0 2xl:mx-auto mx-auto py-4 bg-white ">
        <div className={`grid ${gridCols} gap-6`}>
          {filteredData.map((item) => (
            <ItemCard key={item.id} item={item} renderItem={renderItem} />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No items found matching your filters.
            </p>
            <Button onClick={onClearAll} className="mt-4 ">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsGrid;
