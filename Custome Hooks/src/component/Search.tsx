import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function Search() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) return;

    console.log("API Call:", debouncedSearch);

    // fetchData(debouncedSearch)
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default Search;
