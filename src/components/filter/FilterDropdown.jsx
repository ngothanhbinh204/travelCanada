// import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
// Filter Dropdown Component
/**
 * FilterDropdown component renders a dropdown menu for filtering options with checkboxes.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.filterType - The key representing the filter category (e.g., "status", "category").
 * @param {string} props.displayName - The display name shown on the dropdown button.
 * @param {string[]} props.options - Array of filter option strings to display as checkboxes.
 * @param {Object.<string, string[]>} props.tempFilters - Temporary filter selections, keyed by filterType.
 * @param {Object.<string, string[]>} props.appliedFilters - Currently applied filters, keyed by filterType.
 * @param {boolean} props.isOpen - Whether the dropdown is currently open.
 * @param {function(string): void} props.onToggle - Callback to toggle the dropdown open/closed, receives filterType.
 * @param {function(string, string): void} props.onCheckboxChange - Callback when a checkbox is toggled, receives filterType and option.
 * @param {function(string): void} props.onReset - Callback to reset filters for a filterType.
 * @param {function(): void} props.onApply - Callback to apply the selected filters.
 * @param {React.RefObject<HTMLDivElement>} props.dropdownRef - Ref for the dropdown container, used for outside click handling.
 *
 * @returns {JSX.Element} The rendered FilterDropdown component.
 */
const FilterDropdown = ({
  filterType,
  displayName,
  options,
  tempFilters,
  appliedFilters,
  isOpen,
  onToggle,
  onCheckboxChange,
  onReset,
  onApply,
  dropdownRef,
}) => {
  // Check if there is any selected filter in tempFilters for this filterType
  const isApplyDisabled =
    !tempFilters[filterType] || tempFilters[filterType].length === 0;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => onToggle(filterType)}
        className={`relative z-10 flex items-center gap-2 px-6 py-3 border-2 border-white rounded-full transition-colors
      ${
        appliedFilters[filterType]?.length > 0
          ? "bg-white text-primary"
          : "hover:bg-link text-white"
      }
    `}
        aria-expanded={isOpen}
      >
        <span>{displayName}</span>
        {appliedFilters[filterType]?.length > 0 && (
          <span className="bg-primary text-white flex justify-center items-center rounded-full h-6 w-6 text-xs font-semibold">
            {appliedFilters[filterType].length}
          </span>
        )}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 mt-2 w-70 z-50"
          >
            <div className="bg-white rounded-sm shadow-lg border">
              <div className="p-4 max-h-72 overflow-y-auto">
                <div className="space-y-2">
                  {options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={tempFilters[filterType].includes(option)}
                        onChange={() => onCheckboxChange(filterType, option)}
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-red-500"
                      />
                      <span className="text-gray-700 text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="border-t p-4 flex justify-between items-center">
                <Button
                  variant="main"
                  onClick={onApply}
                  className={`!mt-0 ${
                    isApplyDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isApplyDisabled}
                >
                  Apply filter(s)
                </Button>
                <Button variant="white" onClick={() => onReset(filterType)}>
                  Reset
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
