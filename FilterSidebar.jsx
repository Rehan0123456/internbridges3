import React from "react";
import { X } from "lucide-react";

const FIELDS = [
  "All", "STEM", "CS", "AI", "Engineering", "Medicine", "Business",
  "Design", "Law", "Science", "Finance", "Tech", "Research", "Arts",
  "Healthcare", "Education", "Policy", "Journalism", "Environment",
];

const LOCATIONS = [
  "All", "Virtual", "U.S.", "MA", "CA", "DC", "NY", "TX", "PA", "IL", "CT",
];

const DEADLINES = [
  "All", "Rolling", "Jan", "Feb", "Mar", "Apr",
];

export default function FilterSidebar({ filters, setFilters, totalCount, filteredCount, onClose }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gray-600">Filters</h3>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-all">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="font-mono text-xs text-gray-400">
        {filteredCount} of {totalCount} opportunities
      </div>

      {/* Field Filter */}
      <div>
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2 block">
          Field
        </label>
        <div className="flex flex-wrap gap-1.5">
          {FIELDS.map((field) => (
            <button
              key={field}
              onClick={() => updateFilter("field", field === "All" ? "" : field)}
              className={`font-mono text-[10px] px-2.5 py-1.5 rounded-md transition-all duration-150 ${
                (field === "All" && !filters.field) || filters.field === field
                  ? "bg-[#007BFF] text-white"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100"
              }`}
            >
              {field}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2 block">
          Location
        </label>
        <div className="flex flex-wrap gap-1.5">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => updateFilter("location", loc === "All" ? "" : loc)}
              className={`font-mono text-[10px] px-2.5 py-1.5 rounded-md transition-all duration-150 ${
                (loc === "All" && !filters.location) || filters.location === loc
                  ? "bg-[#007BFF] text-white"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* Deadline Filter */}
      <div>
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-2 block">
          Deadline
        </label>
        <div className="flex flex-wrap gap-1.5">
          {DEADLINES.map((dl) => (
            <button
              key={dl}
              onClick={() => updateFilter("deadline", dl === "All" ? "" : dl)}
              className={`font-mono text-[10px] px-2.5 py-1.5 rounded-md transition-all duration-150 ${
                (dl === "All" && !filters.deadline) || filters.deadline === dl
                  ? "bg-[#007BFF] text-white"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100"
              }`}
            >
              {dl}
            </button>
          ))}
        </div>
      </div>

      {/* Clear All */}
      {(filters.field || filters.location || filters.deadline) && (
        <button
          onClick={() => setFilters({ field: "", location: "", deadline: "", search: filters.search })}
          className="font-mono text-[10px] text-[#007BFF] hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
