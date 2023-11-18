import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[color:var(--bgSoft)] flex gap-5 cursor-pointer w-full p-5 rounded-[10px] hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="flex flex-col gap-5">Total Users</span>
        <span className="text-2xl font-medium">10.273</span>
        <span className="text-sm font-light">
          <span className="text-[lime]">12%</span> More than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
