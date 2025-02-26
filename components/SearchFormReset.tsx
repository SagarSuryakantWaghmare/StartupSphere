"use client";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.closest("form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
