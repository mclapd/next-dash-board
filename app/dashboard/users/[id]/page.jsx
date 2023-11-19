import Image from "next/image";
import { fetchUser } from "@/app/lib/data";

const SingleUser = async ({ params }) => {
  const { id } = params;
  const res = await fetchUser(id);
  const user = await res.json();

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[color:var(--bgSoft)] font-bold text-[color:var(--textSoft)] h-max p-5 rounded-[10px]">
        <div className="w-full h-[300px] relative overflow-hidden mb-5 rounded-[10px]">
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-[3] bg-[color:var(--bgSoft)] p-5 rounded-[10px]">
        <form action={""} className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={user.id}
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Password</label>
          <input
            type="password"
            name="password"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label className="text-xs">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="w-full bg-[teal] text-[color:var(--text)] cursor-pointer mt-5 p-5 rounded-[5px] border-none">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
