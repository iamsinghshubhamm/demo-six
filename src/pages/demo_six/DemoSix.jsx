import React from 'react'
import ChartComponent from '../../components/totalsales/ChartComponent'
import DashboardCards from '../../components/dashboardcards/DashboardCards'
import SalesOverview from '../../components/salesoverview/SalesOverview'
import SalesByLocation from '../../components/salesbylocation/SalesByLocation'
import TopSellingProducts from '../../components/topsellingproducts/TopSellingProducts'
import BrowserStates from '../../components/browserstates/BrowserStates'

export default function DemoSix() {
  return (
    <div className="grid grid-cols-12 gap-[25px] bg-gray-100">
    <DashboardCards />
    <ChartComponent />
    <SalesOverview />
    <SalesByLocation />
    <TopSellingProducts />
    <BrowserStates />
  </div>
  )
}
