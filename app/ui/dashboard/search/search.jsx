import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] w-max p-2.5 rounded-[10px]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-[color:var(--text)] border-none"
      />
    </div>
  );
};

export default Search;
