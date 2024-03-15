import React, { useState } from "react";
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
} from "../../mock/salesByLocationData";

const SalesByLocation = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [isOpen, setIsOpen] = useState(false);
  const toogleHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const Table = ({ data }) => {
    return (
      <table className="min-w-full text-sm font-light text-left whitespace-nowrap">
        <thead>
          <tr>
            <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-start text-light dark:text-title-dark text-12 font-medium border-none before:hidden rounded-bl-[0] rounded-s-[4px] sticky top-0">
              Top Region
            </th>
            <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-start text-light dark:text-title-dark text-12 font-medium border-none before:hidden sticky top-0">
              Order
            </th>
            <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-start text-light dark:text-title-dark text-12 font-medium border-none before:hidden rounded-br-[0] rounded-e-[4px] sticky top-0">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 pb-2.5 pt-[20px] text-start text-dark dark:text-title-dark dark:group-hover:bg-box-dark-up text-15 font-medium border-none before:hidden whitespace-nowrap">
                {row.region}
              </td>
              <td className="px-4 pb-2.5 pt-[20px] text-start text-body dark:text-white/[60] dark:group-hover:bg-box-dark-up border-none before:hidden">
                {row.order}
              </td>
              <td className="px-4 pb-2.5 pt-[20px] text-start text-body dark:text-white/[60] dark:group-hover:bg-box-dark-up border-none before:hidden">
                {row.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderDynamicTableOne = () => {
    switch (activeTab) {
      case "today":
        return <Table data={data1} />;
      case "week":
        return <Table data={data2} />;
      case "month":
        return <Table data={data3} />;
      case "year":
        return <Table data={data4} />;
      default:
        return null;
    }
  };
  const renderDynamicTableTwo = () => {
    switch (activeTab) {
      case "today":
        return <Table data={data5} />;
      case "week":
        return <Table data={data6} />;
      case "month":
        return <Table data={data7} />;
      case "year":
        return <Table data={data8} />;
      default:
        return null;
    }
  };

  return (
    <div className="col-span-12 2xl:col-span-8">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative xl:h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px] border-b border-regular dark:border-white/10 max-ssm:gap-[5px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
            Sales By Location
          </h2>
          <div className="ssm:py-[16px] flex items-center ssm:gap-[15px] gap-[5px] max-xs:flex-wrap max-xs:justify-center max-ssm:flex-col">
            <ul className="flex items-center">
              {[
                { label: "today", id: "location-today" },
                { label: "week", id: "location-week" },
                { label: "month", id: "location-month" },
                { label: "year", id: "location-year" },
              ].map(({ label, id }, index) => (
                <li key={index} role="presentation">
                  <a
                    onClick={() => handleTabClick(label)}
                    href={`#${id}`}
                    data-te-toggle="pill"
                    data-te-target={`#${id}`}
                    role="tab"
                    aria-controls={id}
                    aria-selected={activeTab === label}
                    className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                      activeTab === label ? "bg-purple-200 text-purple-600" : ""
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative" data-te-dropdown-ref>
              <button
                className="text-[18px] text-light dark:text-subtitle-dark"
                type="button"
                id="salesByLocation"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                onClick={toogleHandler}
              >
                <i className="uil uil-ellipsis-h" />
              </button>
              {isOpen && (
                <ul
                  className="absolute z-[1000] ltr:float-left rtl:float-right m-0 right-0 top-8 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:shadow-boxLargeDark dark:bg-box-dark-down  [&[data-te-dropdown-show]]:block"
                  aria-labelledby="salesByLocation"
                  data-te-dropdown-menu-ref
                >
                  {[
                    { icon: "uil uil-print", text: "printer" },
                    { icon: "uil uil-book-alt", text: "pdf" },
                    { icon: "uil uil-file-info-alt", text: "google sheet" },
                    { icon: "uil uil-multiply", text: "Excel (XLSX)" },
                    { icon: "uil uil-file", text: "CSV" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        className="block w-full px-4 py-2 text-sm font-normal capitalize bg-transparent whitespace-nowrap text-neutral-700 hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-subtitle-dark dark:hover:bg-box-dark-up gap-[6px]"
                        href="#"
                        data-te-dropdown-item-ref
                      >
                        <i className={item.icon} /> {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="px-[25px] pt-[25px] pb-[57px] ">
          <div className="grid grid-cols-12 gap-y-[25px] gap-5">
            <div className="col-span-12 md:col-span-6 ">
              <div className="max-h-[280px] scrollbar relative overflow-hidden border-1 border-solid border-regular dark:border-white/10 rounded-[5px] hover:overflow-y-auto transition duration-300 ease-linear">
                {renderDynamicTableOne()}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div className="max-h-[280px] scrollbar relative overflow-hidden border-1 border-solid border-regular dark:border-white/10 rounded-[5px] hover:overflow-y-auto transition duration-300 ease-linear">
                {renderDynamicTableTwo()}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div id="svgMap" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default SalesByLocation;
