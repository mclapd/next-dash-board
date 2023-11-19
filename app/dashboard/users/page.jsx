import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

const Users = async ({ searchParams }) => {
  // const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);
  const users = [];
  return (
    <div className="bg-[color:var(--bgSoft)] mt-5 p-5 rounded-[10px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="bg-[#5d57c9] text-[color:var(--text)] cursor-pointer p-2.5 rounded-[5px] border-none">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => ( */}
          <tr>
            {/* <tr key={user.id}> */}
            <td>
              <div className="flex items-center gap-2.5">
                <Image
                  src={"/noavatar.png"}
                  // src={user.img || "/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                {/* {user.username} */}John Doe
              </div>
            </td>
            <td className="p-2.5">john@gmail.com</td>
            <td className="p-2.5">13.01.2022</td>
            <td className="p-2.5">Admin</td>
            <td className="p-2.5">Active</td>
            <td className="p-2.5">
              <div className="flex gap-2.5">
                <Link href={"/dashboard/users/1"}>
                  <button className="text-[color:var(--text)] cursor-pointer px-2.5 py-[5px] rounded-[5px] border-none bg-[teal]">
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" value={""} />
                  <button className="text-[color:var(--text)] cursor-pointer px-2.5 py-[5px] rounded-[5px] border-none bg-[crimson]">
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
