import React, { useEffect, useState } from "react";
import MainMultiFilter from "./MainMultiFilter";
import ClipLoader from "react-spinners/ClipLoader";
// Mock API imports
import { DataThingTodo } from "../../api/thingtodo";
import { DataActivities } from "../../api/activities";

const SectionFilterMulti = () => {
  const [filters, setFilters] = useState({});
  const [filterDisplayNames, setFilterDisplayNames] = useState({});
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Change this key to switch between APIs: 'thingsToDo' or 'activities'
  const selectedApi = "thingsToDo";
  console.log(DataThingTodo);

  useEffect(() => {
    setLoading(true); // start loading

    setTimeout(() => {
      let apiData = {};

      if (selectedApi === "thingsToDo") {
        apiData = DataThingTodo;
      } else if (selectedApi === "activities") {
        apiData = DataActivities;
      }
      // Build filters: { province: [...], theme: [...], season: [...] }
      const filterConfig = Object.fromEntries(
        apiData.filters.map((filter) => [filter.slug, filter.options])
      );

      // Build display names: { province: "Tỉnh bang", theme: "Chủ đề", season: "Mùa" }
      const filterDisplayNames = Object.fromEntries(
        apiData.filters.map((filter) => [filter.slug, filter.displayName])
      );
      setFilters(filterConfig);
      setFilterDisplayNames(filterDisplayNames);
      setTitle(apiData.title || "Things to do");
      setData(apiData.data);
      setLoading(false); //  end loading
    }, 500); // Giả lập 1.5s delay
  }, [selectedApi]);

  return (
    <div className="max-w-full ">
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <ClipLoader color="#FF4D4F" size={50} /> {/* Spinner wait data */}
        </div>
      ) : (
        <MainMultiFilter
          filterConfig={filters}
          filterDisplayNames={filterDisplayNames}
          title={title}
          data={data}
        />
      )}
    </div>
  );
};

export default SectionFilterMulti;
