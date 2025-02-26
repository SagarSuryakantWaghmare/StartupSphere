import React from "react";
import SearchFormReset from "@/components/SearchFormReset"; 
import { Search } from "lucide-react";

const SearchForm = ({ query = "" }: { query?: string }) => {
  return (
    <form action="/" className="search-form flex items-center">
      <input
        name="query"
        defaultValue={query}
        className="search-input "
        placeholder="Search for startups"
      />

      <div className="flex gap-2 items-center">
        {query.trim() && <SearchFormReset />} {/* Ensuring query exists before trimming */}
        
        <button type="submit" className="search-btn bg-primary text-white p-2 rounded-md">
          <Search className="size-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
