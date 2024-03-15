import React from "react";
import { cardsData } from "../../mock/cardsData";

const DashboardCards = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <div key={index} className="col-span-12 lg:col-span-3 sm:col-span-6">
          <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
            <div className="flex justify-between">
              <div
                className={`bg-primary/10 flex h-[58px] items-center justify-center rounded-2xl text-primary w-[58px] order-2 ${
                  card.count == "125"
                    ? "bg-blue-100 text-blue-400"
                    : "" || card.count == "854"
                    ? "bg-violet-100 text-blue-600"
                    : ""
                } `}
              >
                <div className="flex items-center text-[30px]">
                  <i className={`uil ${card.icon}`} />
                </div>
              </div>
              <div>
                <h4 className="mb-0 text-3xl max-lg:text-[26px] max-sm:text-2xl font-semibold leading-normal text-dark dark:text-title-dark">
                  <span
                    className="flex items-center countCategories"
                    data-number={card.count}
                  >
                    <span className="countNumber">{card.count}</span>
                    <span>+</span>
                  </span>
                </h4>
                <span className="font-normal text-body dark:text-subtitle-dark text-15">
                  {card.title}
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="inline-flex items-center w-full py-[12px] bg-normalBG dark:bg-box-dark-up px-2.5 rounded-lg gap-x-[10px] gap-y-[5px] flex-wrap">
                <span
                  className={`flex font-medium gap-[2px] items-center text-sm ${
                    card.percentage >= 0 ? "text-success" : "text-danger"
                  }`}
                >
                  <i
                    className={`uil uil-arrow-${
                      card.percentage >= 0 ? "up" : "down"
                    } text-[18px]`}
                  />{" "}
                  {Math.abs(card.percentage)}%
                </span>
                <span className="text-sm text-light dark:text-subtitle-dark">
                  {card.since}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DashboardCards;
