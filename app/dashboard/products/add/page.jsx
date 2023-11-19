// import { addProduct } from "@/app/lib/actions";

const AddProduct = () => {
  return (
    <div className="bg-[color:var(--bgSoft)] mt-5 p-5 rounded-[10px]">
      <form action={""} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <select
          name="cat"
          id="cat"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[teal] text-[color:var(--text)] cursor-pointer p-[30px] rounded-[5px] border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
