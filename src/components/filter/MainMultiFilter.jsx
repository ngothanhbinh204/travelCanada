import React, { useState, useEffect, useRef, useMemo } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterTags from "./FilterTags";
import ResultsGrid from "./ResultsGrid";
import { buildFilterURL, slugify } from "../../utils/urlHelpers";
import { parseFiltersFromURL } from "../../utils/paramKeyMapReverse";
import { motion, AnimatePresence } from "framer-motion";

const MainMultiFilter = ({
  data = [],
  filterConfig = {},
  filterDisplayNames = {},
  title = "Things to do",
  renderItem = null,
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  containerClassName = "max-w-full",
}) => {
  const currentData = useMemo(() => data || [], [data]);
  const currentFilterConfig = useMemo(() => filterConfig || {}, [filterConfig]);
  const currentFilterDisplayNames = useMemo(
    () => filterDisplayNames || {},
    [filterDisplayNames]
  );

  const [filters, setFilters] = useState({});
  const [tempFilters, setTempFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [filteredData, setFilteredData] = useState(currentData);
  const [isFiltering, setIsFiltering] = useState(false);

  const dropdownRefs = useRef({});

  useEffect(() => {
    Object.keys(currentFilterConfig).forEach((key) => {
      if (!dropdownRefs.current[key]) {
        dropdownRefs.current[key] = React.createRef();
      }
    });
  }, [currentFilterConfig]);

  useEffect(() => {
    if (Object.keys(currentFilterConfig).length) {
      const initialFilters = Object.fromEntries(
        Object.keys(currentFilterConfig).map((key) => [key, []])
      );
      setFilters(initialFilters);
      setTempFilters(initialFilters);
      setAppliedFilters(initialFilters);
    }
  }, [currentFilterConfig]);

  useEffect(() => {
    if (Object.keys(currentFilterConfig).length === 0) return;

    const urlFilters = parseFiltersFromURL(window.location.search);

    const restoredFilters = Object.fromEntries(
      Object.keys(currentFilterConfig).map((key) => {
        const options = currentFilterConfig[key];
        const urlValues = urlFilters[key] || [];

        const matchedValues = urlValues
          .map((slug) => options.find((opt) => slugify(opt) === slug))
          .filter(Boolean);

        return [key, matchedValues];
      })
    );

    setFilters(restoredFilters);
    setAppliedFilters(restoredFilters);
    setTempFilters(restoredFilters);
  }, [currentFilterConfig]);

  useEffect(() => {
    if (!Object.keys(appliedFilters).length) return;

    let filtered = currentData;
    Object.keys(appliedFilters).forEach((filterType) => {
      if (appliedFilters[filterType]?.length) {
        filtered = filtered.filter(
          (item) =>
            appliedFilters[filterType].includes(item[filterType]) ||
            (item[filterType] === "All seasons" && filterType === "season")
        );
      }
    });

    setFilteredData(filtered);
  }, [appliedFilters, currentData]);

  const updateURL = (newFilters) => {
    const newUrl = buildFilterURL(window.location.pathname, newFilters);
    window.history.replaceState({}, "", newUrl);
  };

  const toggleDropdown = (filterType) => {
    setDropdownOpen((prev) => (prev === filterType ? null : filterType));
    setTempFilters({ ...appliedFilters });
  };

  const handleCheckboxChange = (filterType, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const applyFilters = () => {
    setDropdownOpen(null);
    setIsFiltering(true);
    setTimeout(() => {
      setFilters(tempFilters);
      setAppliedFilters(tempFilters);
      updateURL(tempFilters);
      setIsFiltering(false);
    }, 100);
  };

  const removeFilter = (filterType, value) => {
    const newFilters = {
      ...appliedFilters,
      [filterType]: appliedFilters[filterType].filter((item) => item !== value),
    };
    setFilters(newFilters);
    setAppliedFilters(newFilters);
    setTempFilters(newFilters);
    updateURL(newFilters);
  };

  const resetFilter = (filterType) => {
    const newFilters = { ...appliedFilters, [filterType]: [] };
    setFilters(newFilters);
    setAppliedFilters(newFilters);
    setTempFilters(newFilters);
    updateURL(newFilters);
    setDropdownOpen(null);
  };

  const clearAllFilters = () => {
    const empty = Object.fromEntries(
      Object.keys(currentFilterConfig).map((key) => [key, []])
    );
    setFilters(empty);
    setAppliedFilters(empty);
    setTempFilters(empty);
    updateURL(empty);
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownOpen) return;

      const ref = dropdownRefs.current[dropdownOpen];
      if (ref?.current && !ref.current.contains(event.target)) {
        setTempFilters(appliedFilters);
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen, appliedFilters]);

  return (
    <div className={containerClassName}>
      <div className="bg-primary max-w-container text-white p-4">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-4">
          {Object.keys(currentFilterConfig).map((filterType) => (
            <FilterDropdown
              key={filterType}
              filterType={filterType}
              displayName={currentFilterDisplayNames[filterType]}
              options={currentFilterConfig[filterType]}
              tempFilters={tempFilters}
              appliedFilters={appliedFilters}
              isOpen={dropdownOpen === filterType}
              onToggle={toggleDropdown}
              onCheckboxChange={handleCheckboxChange}
              onReset={resetFilter}
              onApply={applyFilters}
              dropdownRef={dropdownRefs.current[filterType]}
            />
          ))}
        </div>
      </div>

      <FilterTags
        filteredData={filteredData}
        title={title}
        appliedFilters={appliedFilters}
        onRemoveFilter={removeFilter}
        onClearAll={clearAllFilters}
      />

      <AnimatePresence mode="wait">
        {isFiltering ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center py-10"
          >
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ResultsGrid
              filteredData={filteredData}
              title={title}
              renderItem={renderItem}
              onClearAll={clearAllFilters}
              gridCols={gridCols}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainMultiFilter;
