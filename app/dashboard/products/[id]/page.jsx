import Image from "next/image";

const SingProudct = async ({ params }) => {
  // const { id } = params;
  // const user = await fetchUser(id);

  const user = null;
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[color:var(--bgSoft)] font-bold text-[color:var(--textSoft)] h-max p-5 rounded-[10px]">
        <div className="w-full h-[300px] relative overflow-hidden mb-5 rounded-[10px]">
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {/* {user.username} */}
        iPhone
      </div>
      <div className="flex-[3] bg-[color:var(--bgSoft)] p-5 rounded-[10px]">
        <form action={""} className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value=""
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Price</label>
          <input
            type="number"
            name="price"
            placeholder="user email"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Stock</label>
          <input
            type="number"
            name="23"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">size</label>
          <textarea
            type="text"
            name="address"
            placeholder="user address"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          />
          <label className="text-xs">Is Admin?</label>
          <select
            name="cat"
            id="cat"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          >
            <option value="kitchen">kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-xs">Descriptions</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
            className="bg-[color:var(--bg)] text-[color:var(--text)] mx-0 my-2.5 p-5 rounded-[5px] border-2 border-solid border-[#2e374a]"
          ></textarea>
          <button className="w-full bg-[teal] text-[color:var(--text)] cursor-pointer mt-5 p-5 rounded-[5px] border-none">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingProudct;
