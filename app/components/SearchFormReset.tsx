"use client"
import Link from "next/link";
const SearchFormReset = () => {
    const reset=()=>{
            const form =document.querySelector('.search-form') as HTMLFormElement;
            if(form) form.reset(); 
        }
  return (
    // Here we implemented the search Form Reset
    // We will use this component in the SearchForm component
    <div>
      <button type="reset" onClick={reset} className="search-btn text-white"> 
        X
      </button>
      <Link href="/" className="search-btn text-white">
        Go Home
      </Link>
    </div>
  )
}

export default SearchFormReset