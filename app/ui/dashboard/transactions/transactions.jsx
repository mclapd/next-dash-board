import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[color:var(--bgSoft)] p-5 rounded-[10px]">
      <h2 className="font-extralight text-[color:var(--textSoft)] mb-5">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Date</td>
            <td className="p-2.5">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex gap-2.5 items-center">
                <Image
                  src={"/noavatar.png"}
                  width={40}
                  height={40}
                  alt="image"
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">
              <span className="text-sm text-[white] p-[5px] rounded-[5px] bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-2.5">14.02.2024</td>
            <td className="p-2.5">$3.200</td>
          </tr>
          <tr>
            <td className="p-2.5">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">
              <span className="text-sm text-[white] p-[5px] rounded-[5px] bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="p-2.5">14.02.2024</td>
            <td className="p-2.5">$3.200</td>
          </tr>
          <tr>
            <td className="p-2.5">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">
              <span className="text-sm text-[white] p-[5px] rounded-[5px] bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-2.5">14.02.2024</td>
            <td className="p-2.5">$3.200</td>
          </tr>
          <tr>
            <td className="p-2.5">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-2.5">
              <span className="text-sm text-[white] p-[5px] rounded-[5px] bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-2.5">14.02.2024</td>
            <td className="p-2.5">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
