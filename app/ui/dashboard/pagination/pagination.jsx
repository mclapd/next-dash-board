const Pagination = () => {
  return (
    <div className="flex justify-between p-2.5">
      <button className="cursor-pointer px-2.5 py-[5px] disabled:cursor-not-allowed">
        Previous
      </button>
      <button className="cursor-pointer px-2.5 py-[5px] disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
