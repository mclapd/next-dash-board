"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] w-max p-2.5 rounded-[10px]">
      <MdSearch />
      <input
        onChange={handleSearch}
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-[color:var(--text)] border-none"
      />
    </div>
  );
};

export default Search;
