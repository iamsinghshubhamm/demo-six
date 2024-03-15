import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
  const chartOptionsList = [
    {
      title: "Total Sales",
      subtitle: "(Last 10 Months)",
      price: "8,550.00",
      percent: "25",
      data: [
        {
          name: "Total Sales",
          data: [
            0, 30000, 20000, 35000, 40000, 55000, 60000, 52000, 80000, 48000,
          ],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      color: "#6d28d9",
    },
    {
      title: "Total Orders",
      subtitle: "(Last 7 days)",
      price: "10,550.00",
      percent: "15",
      data: [
        {
          name: "Total Sales",
          data: [0, 34000, 20000, 35000, 40000, 55000, 60000],
        },
      ],
      categories: ["Sat", "Sun", "Monday", "Tue", "Wed", "Thu", "Fri"],
      color: "#ea580c",
    },
    {
      title: "Total Subscribers",
      subtitle: "(Last 8 days)",
      price: "2,550.00",
      percent: "5",
      data: [
        {
          name: "Total Sales",
          data: [0, 43000, 23000, 35000, 52000, 80000, 48000],
        },
      ],
      categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
      color: "#16a34a",
    },
  ];

  return (
    <>
      {chartOptionsList.map((chart, index) => (
        <div
          className="col-span-12 2xl:col-span-4 md:col-span-6 p-1"
          key={index}
        >
          <div className="bg-white dark:bg-box-dark m-0 p-0 text-theme-gray dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
            <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
              <h1 className="mb-0 inline-flex items-center py-[16px] max-sm:pb-[5px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark gap-[5px]">
                {chart.title}
                <span className="text-[12px] text-theme-gray dark:text-subtitle-dark font-medium">
                  {chart.subtitle}
                </span>
              </h1>
              <div className="relative flex items-center">
                <span className="inline-block text-dark dark:text-title-dark me-1 ms-2.5 text-18 font-semibold">
                  {chart.price}
                </span>
                <span
                  className={`flex font-medium gap-[2px] items-center text-sm ${
                    chart.percent < 10 ? "text-red-500" : "text-success"
                  }`}
                >
                  <i
                    className={`uil ${
                      chart.percent < 10 ? "uil-arrow-down" : "uil-arrow-up"
                    }  uil-arrow-up text-[18px]`}
                  />{" "}
                  {chart.percent}
                </span>
              </div>
            </div>
            <div className="p-[25px] pt-0">
              <ReactApexChart
                options={{
                  chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  xaxis: {
                    categories: chart.categories,
                  },
                  yaxis: {
                    tickAmount: 4,
                    labels: {
                      formatter: function (value) {
                        return value === 0 ? "0K" : value / 1000 + "K";
                      },
                    },
                  },
                  colors: [chart.color],
                }}
                series={chart.data}
                type="line"
                height={350}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChartComponent;
