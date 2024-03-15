import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const SalesOverview = () => {
  const menuItems = [
    { icon: "uil-print", label: "Printer" },
    { icon: "uil-book-alt", label: "PDF" },
    { icon: "uil-file-info-alt", label: "Google Sheet" },
    { icon: "uil-multiply", label: "Excel (XLSX)" },
    { icon: "uil-file", label: "CSV" },
  ];

  const [isOpen, setisOpen] = useState(false);
  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="col-span-12 2xl:col-span-4 md:col-span-6 ">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between  max-sm:h-auto max-sm:mb-[15px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
            Sales Overview
          </h2>
          <div
            className="sm:py-[16px] flex items-center gap-[15px] max-xs:flex-wrap max-xs:justify-center "
            data-te-dropdown-ref
          >
            <button
              className="text-[18px] text-light dark:text-subtitle-dark"
              type="button"
              id="timeline"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              <i className="uil uil-ellipsis-h" />
            </button>
            {isOpen && (
              <ul
                className="absolute top-10 right-2 z-[1000] ltr:float-left rtl:float-right m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:shadow-boxLargeDark dark:bg-box-dark-down [&[data-te-dropdown-show]]:block opacity-100"
                aria-labelledby="timeline"
                data-te-dropdown-menu-ref
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up gap-[6px]"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      <i className={`uil ${item.icon}`} /> {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center h-max mt-3 mb-3 font-bold">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={91}
              text={`${91}%`}
              styles={{
                path: { stroke: "#7e22ce", strokeLinecap: "round" },
                text: {
                  fill: "#000",
                  fontSize: "20px",
                  dominantBaseline: "middle",
                  textAnchor: "middle",
                },
              }}
            />
          </div>
        </div>

        <div className="p-[25px] pt-0">
          <div dir="ltr" className="salesOverview-two" />
          <div className="flex items-center justify-around mt-[5px]">
            <div className="text-center">
              <span className="text-dark dark:text-subtitle-dark text-[18px] capitalize">
                Completed <br />
                <span className="font-bold">123456</span>
              </span>
              <h3
                id="completedValue"
                className="text-[22px] font-semibold text-dark dark:text-title-dark"
              />
            </div>
            <div className="text-center">
              <span className="text-dark dark:text-subtitle-dark text-[18px] capitalize">
                In progress <br />
                <span className="font-bold">12456</span>
              </span>
              <h3
                id="inProgressValue"
                className="text-[22px] font-semibold text-dark dark:text-title-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
