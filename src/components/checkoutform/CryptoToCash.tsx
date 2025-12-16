import { useState } from "react";

function CryptoToCash() {
  const [transactionType, setTransactionType] =
    useState<string>("crypto to cash");

  const navItems = [
    { id: "crypto to cash", label: "Crypto to cash" },
    { id: "cash to crypto", label: "Cash to crypto" },
    { id: "crypto to fiat loan", label: "Crypto to fiat loan" },
  ];

  return (
    <>
      {/* Transaction type selector */}
      <div
        role="tablist"
        aria-label="Transaction type"
        className="flex justify-between items-center max-w-[392px] w-[80%] overflow-hidden mx-auto rounded-[30px] bg-navBg"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={transactionType === item.id}
            onClick={() => setTransactionType(item.id)}
            className={`
                py-2 px-4 rounded-[30px] font-medium text-sm transition-colors cursor-pointer
                ${
                  transactionType === item.id
                    ? "text-white bg-green"
                    : "text-navTextGray hover:text-green"
                }
              `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Step 1 content */}
      <div className="mt-10 flex flex-col gap-6">
        <div className="p-6 border border-formBorder rounded-[30px] flex flex-col gap-2">
          <label className="text-navTextGray text-base font-medium">
            You Pay
          </label>

          <aside className="flex justify-between items-center">
            {/* Amount and BlockChain */}
            <input
              className="text-black font-semibold text-2xl border-0 outline-0"
              value={"1.00"}
              type="text"
              name=""
              id=""
            />
            <select
              className="py-2 px-3 flex gap-1 rounded-[20px] bg-selectBg border-formBorder border-0 outline-0"
              name=""
              id=""
            >
              {/* TODO: fix images */}
              <img src="/" alt="Eth Icon" />
              <option
                className="text-sm font-medium leading-5 text-green"
                value={"Eth"}
              >
                ETH
              </option>
            </select>
          </aside>
        </div>

        <div className="p-6 border border-formBorder rounded-[30px] flex flex-col gap-2">
          <label className="text-navTextGray text-base font-medium">
            You recieve
          </label>

          <aside className="flex justify-between items-center">
            {/* Amount and Currency */}
            <input
              className="text-black font-semibold text-2xl border-0 outline-0"
              value={"1.00"}
              type="text"
              name=""
              id=""
            />
            <select
              className="py-2 px-3 flex gap-1 rounded-[20px] bg-selectBg border-formBorder border-0 outline-0"
              name=""
              id=""
            >
              {/* TODO: fix images */}
              <img src="/" alt="Eth Icon" />
              <option
                className="text-sm font-medium leading-5 text-green"
                value={"Eth"}
              >
                NGN
              </option>
            </select>
          </aside>
        </div>

        {/* Pay from */}
        <div className="flex flex-col gap-4">
          <label
            className="text-green leading-[100%] text-base font-medium"
            htmlFor=""
          >
            Pay from
          </label>

          <select className="border border-formBorder rounded-[30px] p-6 text-base font-normal text-green">
            <option value={""}>Select an option</option>
          </select>
        </div>

        {/* Pay To */}
        <div className="flex flex-col gap-4">
          <label
            className="text-green leading-[100%] text-base font-medium"
            htmlFor=""
          >
            Pay To
          </label>

          <select className="border border-formBorder rounded-[30px] p-6 text-base font-normal text-green">
            <option value={""}>Select an option</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default CryptoToCash;
