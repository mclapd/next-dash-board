import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative mb-5 px-6 py-5 rounded-[10px] linear-gradient(to top, #182237, #253352)">
        <div className="absolute w-6/12 h-3/6 right-0 bottom-0">
          <Image
            className="object-contain opacity-20"
            src="/astronaut.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-medium text-xs text-[color:var(--textSoft)]">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[color:var(--textSoft)] font-medium text-xs">
            Takes 4 minutes to learn
          </span>
          <p className="text-[color:var(--textSoft)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2.5 w-max bg-[#5d57c9] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative mb-5 px-6 py-5 rounded-[10px] linear-gradient(to top, #182237, #253352)">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-medium text-xs text-[color:var(--textSoft)]">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-[color:var(--textSoft)] font-medium text-xs">
            Boost your productivity
          </span>
          <p className="text-[color:var(--textSoft)] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2.5 w-max bg-[#5d57c9] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
