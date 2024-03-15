import React, { useState } from "react";
import {
  productsData1,
  productsData2,
  productsData3,
} from "../../mock/topSellingProductData";

const Table = ({ data }) => (
  <table className="min-w-full text-sm font-light text-left whitespace-nowrap">
    <thead>
      <tr className="whitespace-nowrap">
        <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-start text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden rounded-s-[4px]">
          PRODUCTS NAME
        </th>
        <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden">
          PRICE
        </th>
        <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden">
          SOLD
        </th>
        <th className="bg-regularBG dark:bg-box-dark-up px-4 py-2.5 text-end text-light dark:text-title-dark text-[12px] font-medium border-none before:hidden rounded-e-[4px]">
          REVENUE
        </th>
      </tr>
    </thead>
    <tbody className="bg-white dark:bg-box-dark">
      {data.map((product, index) => (
        <tr key={index} className="group">
          <td className="ps-0 pe-4 py-2.5 text-start last:text-end text-dark dark:text-title-dark group-hover:bg-transparent text-15 font-medium border-none before:hidden rounded-s-[4px]">
            <div className="flex items-center">
              <div className="me-2.5 w-[34px] h-[34px]">
                <img
                  className="min-w-[34px] h-[34px] rounded-4"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <span className="font-medium capitalize text-dark dark:text-title-dark text-15">
                {product.name}
              </span>
            </div>
          </td>
          <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
            {product.price}
          </td>
          <td className="px-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent">
            {product.sold}
          </td>
          <td className="ps-4 pe-4 py-2.5 font-normal last:text-end capitalize text-[14px] text-dark dark:text-title-dark border-none group-hover:bg-transparent rounded-e-[4px]">
            {product.revenue}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TopSellingProducts = () => {
  const [activeTab, setActiveTab] = useState("today");
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  let activeData;
  switch (activeTab) {
    case "today":
      activeData = productsData1;
      break;
    case "week":
      activeData = productsData2;
      break;
    case "month":
      activeData = productsData3;
      break;
    default:
      activeData = [];
  }

  return (
    <div className="col-span-12 2xl:col-span-6">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
          <h2 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark  capitalize">
            Top Selling Products
          </h2>
          <ul
            className="py-[16px] max-ssm:py-[10px] flex items-center max-xs:flex-wrap max-xs:justify-center"
            role="tablist"
            data-te-nav-ref
          >
            {["today", "week", "month"].map((tab) => (
              <li key={tab} role="presentation">
                <a
                  onClick={() => handleTabClick(tab)}
                  href={`#tsp-${tab}`}
                  data-te-toggle="pill"
                  data-te-target={`#tsp-${tab}`}
                  role="tab"
                  aria-controls={`tsp-${tab}`}
                  aria-selected={activeTab === tab}
                  className={`inline-flex items-center h-8 px-3 font-medium capitalize rounded-md text-13 dark:hover:text-white dark:text-subtitle-dark hover:text-primary text-light ${
                    activeTab === tab ? "bg-purple-200 text-purple-600" : ""
                  }`}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-[25px] pt-0">
          <div className="max-h-[320px] scrollbar overflow-y-auto">
            <div
              id={`tsp-${activeTab}`}
              role="tabpanel"
              data-te-tab-active
              className="opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            >
              <Table data={activeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
