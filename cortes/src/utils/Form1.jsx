import React, { useState } from "react";

function Form1() {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const checkboxes = [
    { id: "checkbox1", label: "Terminal illness Rider" },
    { id: "checkbox2", label: "Critical illness Rider" },
    { id: "checkbox3", label: "Chronic illness Rider" },
    { id: "checkbox4", label: "Waiver of premium" },
    { id: "checkbox5", label: "Accidental death Rider" },
    { id: "checkbox6", label: "Child Rider" },
    { id: "checkbox6", label: "Conversion option" },
  ];

  const handleIndex1 = () => {
    setShowCheckBox(!showCheckBox);
    setIndex(1);
  };

  const handleIndex2 = () => {
    setShowCheckBox(!showCheckBox);
    setIndex(0);
  };

  return (
    <>
      <div className="border border-gray-300 w-[38%] rounded-lg bg-[#FFFFFF] p-[24px]">
        <p className="text-[#1D3557] font-bold text-[28px] font-barlow">
          Get a Quote
        </p>
        <div className="w-full flex flex-col gap-2">
          <div>
            <label
              for="countries"
              className="block mb-1 text-[18px] text-[#1D3557] font-cabin font-bold"
            >
              Carrier and Product
            </label>
            <select
              id="countries"
              className="border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            >
              <option>Butter Life Insurance Term</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 overflow-scroll h-[600px] whitespace-nowrap scrollbar-hide">
            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                Gender
              </label>
              <div className="border border-gray-300 w-full grid grid-cols-2 gap-2 px-2 py-1 rounded-md">
                <button
                  onClick={() => setIndex3(0)}
                  className={`${
                    index3 === 0 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  }  px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Female
                </button>
                <button
                  onClick={() => setIndex3(1)}
                  className={`${
                    index3 === 1 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  } px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Male
                </button>
              </div>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                State
              </label>
              <select
                id="countries"
                className="border text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option>PA</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="w-full flex gap-16">
              <div className="w-[48%]">
                <label
                  for="countries"
                  className="block mb-1 w-full text-[18px] font-medium text-[#1D3557]"
                >
                  Date of Birth
                </label>
                <input type="date" className="w-full" />
              </div>
              <div className="w-[48%]">
                <label
                  for="countries"
                  className="block mb-1 text-[18px] font-medium text-[#1D3557]"
                >
                  Age
                </label>
                <input type="text" className="w-full" />
              </div>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                Show Rates as
              </label>
              <div className="border border-gray-300 w-full grid grid-cols-2 gap-2 px-2 py-1 rounded-md">
                <button
                  onClick={() => setIndex2(0)}
                  className={`${
                    index2 === 0 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  }  px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIndex2(1)}
                  className={`${
                    index2 === 1 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  } px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Annually
                </button>
              </div>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                Coverage amount
              </label>
              <select
                id="countries"
                className="border text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option>$500,000</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                Benefit Type
              </label>
              <div className="border border-gray-300 w-full grid grid-cols-2 gap-2 px-2 py-1 rounded-md">
                <button
                  onClick={() => setIndex1(0)}
                  className={`${
                    index1 === 0 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  }  px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Lump sum payout
                </button>
                <button
                  onClick={() => setIndex1(1)}
                  className={`${
                    index1 === 1 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  } px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Monthly payout
                </button>
              </div>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-1 text-[18px] font-medium text-[#1D3557]"
              >
                Tobacco
              </label>
              <div className="border border-gray-300 w-full grid grid-cols-2 gap-2 px-2 py-1 rounded-md">
                <button
                  onClick={handleIndex2}
                  className={`${
                    index === 0 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  }  px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  No
                </button>
                <button
                  onClick={handleIndex1}
                  className={`${
                    index === 1 &&
                    "border border-[#A8DADC] bg-[#A8DADC] bg-opacity-[10%]"
                  } px-3 py-2 rounded-md text-[#1D3557] text-[16px]`}
                >
                  Yes
                </button>
              </div>
            </div>

            <div>
              {showCheckBox && (
                <div className="border border-gray-00 rounded-lg px-6 pb-5">
                  {checkboxes &&
                    checkboxes?.map((checkbox, i) => (
                      <div className="flex items-center mt-6" key={i}>
                        <input
                          id={checkbox.id}
                          type="checkbox"
                          value=""
                          className="w-5 h-5 text-[#A8DADC] bg-gray-100 border-gray-300 rounded focus:ring-[#A8DADC] dark:focus:ring-[#A8DADC] dark:ring-offset-gray-800 focus:ring-2 dark:bg-[#A8DADC]"
                        />
                        <label
                          for="default-checkbox"
                          className="ms-4 text-[14px] font-medium text-gray-900 dark:text-gray-300"
                        >
                          {checkbox.label}
                        </label>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form1;
