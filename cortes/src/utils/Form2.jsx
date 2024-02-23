import React from "react";

function Form2() {
  const coinValue = [
    { title: "$100,000" },
    { title: "$100,000" },
    { title: "$100,000" },
    { title: "$100,000" },
    { title: "$100,0000" },
    { title: "$100,0000" },
    { title: "$100,0000" },
  ];

  const tableValue = [
    { title: "Qoutes" },
    { title: "Term 10" },
    { title: "Term 15" },
    { title: "Term 20" },
    { title: "Term 30" },
  ];

  const tableBottomValue = [
    {
      row: [
        { title: "Preferred Plus" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
    {
      row: [
        { title: "Preferred" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
    {
      row: [
        { title: "Select" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
    {
      row: [
        { title: "Standard" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
    {
      row: [
        { title: "Table 2" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
    {
      row: [
        { title: "Tobacco" },
        { title: "$500.00", test: "1" },
        { title: "$515.00", test: "1" },
        { title: "$599.00", test: "1" },
        { title: "$600.00", test: "1" },
      ],
    },
  ];

  return (
    <>
      <div className="border border-gray-300 w-[60%] rounded-lg bg-[#FFFFFF] p-[24px]">
        <p className="text-[28px] font-bold">Table of Quotes</p>
        <p className="text-[#1D3557] font-medium">Please select any quote</p>
        <div className="grid grid-cols-5 gap-4 text-center bg-[#1D3557] text-[#ffffff] rounded-t-xl mt-4">
          {tableValue &&
            tableValue?.map((el, i) => (
              <div className="p-4" key={i}>
                {el.title}
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 text-center text-[#ffffff] rounded-b-xl mt-6">
          {tableBottomValue &&
            tableBottomValue.map((el, i) => (
              <div
                className={`w-full p-2 text-[#1D3557] grid grid-cols-5 gap-8 ${
                  i % 2 === 0 ? "bg-[#ffffff]" : "bg-[#EDF3FC]"
                }`}
                key={i}
              >
                {el.row.map((item, j) => (
                  <button
                    key={j}
                    className={`p-3.5 rounded-xl ${
                      item && item?.test == "1"
                        ? "border bg-[#ffffff] text-[18px] font-medium"
                        : "border-none text-[16px] font-bold opacity-40"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            ))}
        </div>
        <div className="mt-5">
          <p className="text-[28px] font-bold">Quick quote links</p>
          <div className="grid grid-cols-7 gap-0 mt-1">
            {coinValue &&
              coinValue?.map((item, i) => (
                <div className="w-full">
                  <button className="px-9 py-3 border text-[18px] text-[#1D3557]">
                    {item.title}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form2;
