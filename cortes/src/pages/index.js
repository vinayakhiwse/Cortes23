import { SideNavIcon } from "@/navigations/Navigations";
import icon from "@/assets/icon.svg";
import cortesIcon from "@/assets/cortesIcon.svg";
import profile from "@/assets/Ellipse.png";
import { useState } from "react";
import Link from "next/link";
import Form1 from "@/utils/Form1";
import Form2 from "@/utils/Form2";

// import { cabin } from "next/font/google";

// const inter = Inter({ subsets: ["cabin"] });

export default function Home() {
  const [show, setShow] = useState(false);

  const list = [
    {
      title: "Run Quote",
      icon: 1,
    },
    {
      title: "Underwriting Questions",
      icon: 2,
    },
    {
      title: "ID Check",
      icon: 3,
    },
    {
      title: "Underwriting Decision",
      icon: 4,
    },
    {
      title: "Payment",
      icon: 5,
    },
    {
      title: "Bind Coverage",
      icon: 6,
    },
  ];

  return (
    <>
      <div className="w-full flex gap-5">
        <div
          className={`bg-[#1D3557] text-white h-[1010px] px-1 rounded-tr-2xl ${
            show
              ? "w-[16%] transition-all duration-300 ease-in-out"
              : "w-[5%] transition-all duration-300 ease-in-out"
          }`}
        >
          <div className="w-[80%] m-auto mt-5 ml-4">
            {show ? (
              <img src={icon.src} alt="logo.svg" />
            ) : (
              <img src={cortesIcon.src} alt="logo.svg" />
            )}
          </div>
          <div className="mt-10 flex flex-col gap-2">
            {SideNavIcon &&
              SideNavIcon?.map((item, i) => (
                <div
                  className="px-[20px] py-[15px] flex gap-[10px] cursor-pointer hover:bg-gradient-to-r from-[#E63946]"
                  key={i}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <img
                    src={item.icon.src}
                    className="w-[24px]"
                    alt="icon.svg"
                  />
                  {show ? (
                    <p className="text-[18px] font-medium">{item.title}</p>
                  ) : null}
                </div>
              ))}
          </div>
          <div
            className={`flex ${
              show ? "w-full px-[20px] py-[15px] gap-[10px]" : "w-[50%]"
            }  m-auto mt-96`}
          >
            {show ? (
              <>
                <img src={profile.src} alt="profile.png" className="h-6" />
                <p className="text-[18px] font-medium">Sarah Patrick</p>
              </>
            ) : (
              <img src={profile.src} alt="profile.png" className="h-6" />
            )}
          </div>
        </div>
        <div className="w-full pr-5">
          <div className="flex flex-col gap-0 mt-3">
            <p className="text-[42px] font-bold text-[#1D3557]">
              New Application
            </p>
            <p className="text-[16px]">
              Run a quote and start a new application to get a policy in
              minutes.
            </p>
          </div>
          <div className="bg-[#C7DAF5] grid grid-cols-6 gap-8 border-2 border-[#C7DAF5] w-full mt-[6px]">
            {list &&
              list?.map((el, i) => (
                <div className="flex gap-2 px-1 py-3 items-center justify-center">
                  <div className="bg-[#ffffff] border-2 rounded-full p-2 w-[26px] h-[26px] flex items-center justify-center">
                    {el.icon}
                  </div>
                  <p
                    className={`text-[16px] text-[#1D3557] font-bold cursor-pointer ${
                      i === 0 ? "opacity-100" : "opacity-[40%]"
                    }`}
                  >
                    {el.title}
                  </p>
                </div>
              ))}
          </div>
          <div className="mt-4 w-full flex gap-8">
            <Form1 />
            <Form2 />
          </div>
          <div className="flex justify-between my-2">
            <div className="flex items-end">
              <p className="text-end">
                Cortes Transaction Serial Number: 2323234{" "}
              </p>
            </div>
            <div>
              <button className="bg-[#2C3A5F] text-white py-3 px-20 rounded-xl text-[16px]">
                Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
