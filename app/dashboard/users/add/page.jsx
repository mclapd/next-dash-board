const addUser = () => {
  return (
    <div className="bg-[color:var(--bgSoft)] mt-5 p-5 rounded-[10px]">
      <form action={""} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="user name"
          name="username"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="passowrd"
          placeholder="passowrd"
          name="password"
          required
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        >
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="bg-[color:var(--bg)] text-[color:var(--text)] mb-[30px] p-[30px] rounded-[5px] border-2 border-solid border-[#2e374a] w-[45%]"
        >
          <option value={false} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          required
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
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

export default addUser;
