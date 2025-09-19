"use client";

import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { Icon } from "../icons";

const Dashboard = () => {
  const chartData = [
    { month: "Jan", current: 60, previous: 40 },
    { month: "Feb", current: 80, previous: 45 },
    { month: "Mar", current: 70, previous: 50 },
    { month: "Apr", current: 50, previous: 65 },
    { month: "May", current: 75, previous: 60 },
    { month: "Jun", current: 80, previous: 55 },
    { month: "Jul", current: 90, previous: 45 },
    { month: "Aug", current: 65, previous: 70 },
    { month: "Sep", current: 85, previous: 40 },
    { month: "Oct", current: 100, previous: 35 },
    { month: "Nov", current: 55, previous: 50 },
    { month: "Dec", current: 60, previous: 45 },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Dashboard Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Dashboard Overview
          </h2>
          <div className="grid-cols-4 grid gap-4">
            <div className="flex flex-col gap-y-4 p-4 bg-white dark:bg-slate-800 rounded-md w-full">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="flex flex-col gap-y-1 items-start w-full">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Total Events
                </p>
                <div className="flex items-center justify-between w-full">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    2,847
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    +12.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4 bg-white dark:bg-slate-800 rounded-md w-full">
              <div className="w-10 h-10 bg-cyan-400 rounded-full"></div>
              <div className="flex flex-col gap-y-1 items-start w-full">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Active Destinations
                </p>
                <div className="flex items-center justify-between w-full">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    156
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    +8.2%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4 bg-white dark:bg-slate-800 rounded-md w-full">
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
              <div className="flex flex-col gap-y-1 items-start w-full">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Upcoming Tours
                </p>
                <div className="flex items-center justify-between w-full">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    96
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    +15.3%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4 bg-white dark:bg-slate-800 rounded-md w-full">
              <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              <div className="flex flex-col gap-y-1 items-start w-full">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Total Revenue
                </p>
                <div className="flex items-center justify-between w-full">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    $847K
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    +18.5%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Revenue Forecast */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border col-span-3 border-gray-200 dark:border-slate-700 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Revenue Forecast
              </h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#8C9EFD" }}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Current Year
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#8CDAAA" }}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Previous Year
                  </span>
                </div>
              </div>
            </div>

            {/* Nivo Bar Chart */}
            <div className="h-72 bg-gray-50 dark:bg-slate-700 rounded-2xl overflow-hidden">
              <ResponsiveBar
                data={chartData}
                keys={["current", "previous"]}
                indexBy="month"
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                padding={0.4}
                innerPadding={4}
                groupMode="grouped"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={["#8C9EFD", "#8CDAAA"]}
                borderRadius={8}
                borderWidth={0}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Months",
                  legendPosition: "middle",
                  legendOffset: 40,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Revenue ($K)",
                  legendPosition: "middle",
                  legendOffset: -45,
                }}
                enableGridX={false}
                enableGridY={true}
                theme={{
                  background: "transparent",
                  text: {
                    fontSize: 12,
                    fill: "#6B7280",
                    fontFamily: "inherit",
                  },
                  axis: {
                    domain: {
                      line: {
                        stroke: "#E5E7EB",
                        strokeWidth: 1,
                      },
                    },
                    legend: {
                      text: {
                        fontSize: 12,
                        fill: "#6B7280",
                        fontFamily: "inherit",
                      },
                    },
                    ticks: {
                      line: {
                        stroke: "#E5E7EB",
                        strokeWidth: 1,
                      },
                      text: {
                        fontSize: 11,
                        fill: "#6B7280",
                        fontFamily: "inherit",
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: "#D1D5DB",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                      strokeOpacity: 0.6,
                    },
                  },
                  tooltip: {
                    container: {
                      background: "white",
                      color: "#1F2937",
                      fontSize: "12px",
                      borderRadius: "8px",
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      border: "1px solid #E5E7EB",
                    },
                  },
                }}
                enableLabel={false}
                animate={true}
                motionConfig="gentle"
                legends={[]}
              />
            </div>
          </div>

          {/* Industry Insights */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 ">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Industry Insights
            </h3>

            <div>
              <div className="flex items-center space-x-3 py-4">
                <div className="size-11 bg-green-500 rounded-full"></div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Events & Meetings
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Growth
                    </div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      +18.5%
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-4">
                <div className="size-11 bg-red-500 rounded-full"></div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Entertainment & Arts
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Growth
                    </div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      +25.2%
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-4">
                <div className="size-11 bg-blue-500 rounded-full"></div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Travel & Hospitality
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Growth
                    </div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      +31.7%
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 py-4">
                <div className="size-11 bg-cyan-400 rounded-full"></div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Media & Marketing
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Growth
                    </div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      +12.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Core Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Vault Activity */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex gap-x-[10px]">
                <div className="size-12 bg-green-500 rounded-full">

                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Vault Activity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Files & Documents</p>
                </div>
              </div>
              <div className="mt-10 space-y-1">
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                    Shared:
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    1,247 files shared
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                    Stored:
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    8.9GB stored
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex gap-x-[10px]">
                <div className="size-12 bg-red-500 rounded-full">
                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Timeline</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Event Scheduling</p>
                </div>
              </div>
              <div className="mt-10 space-y-1">
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                    Progress:
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    89% On Schedule
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                  Upcoming:
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  23 Events Pending
                </div>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex gap-x-[10px]">
                <div className="size-12 bg-blue-500 rounded-full">
                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Campaign Performance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Engagement Metrics</p>
                </div>
              </div>
              <div className="mt-10 space-y-1">
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                    Clicks:
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    45.2K Clicks
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-medium text-[#4A5565] dark:text-gray-400">
                  Signups:
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  2.8K Signups
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 bg-white p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Stats
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex items-center space-x-4">
              
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 10.667C26.2091 10.667 28 8.87613 28 6.66699C28 4.45785 26.2091 2.66699 24 2.66699C21.7909 2.66699 20 4.45785 20 6.66699C20 8.87613 21.7909 10.667 24 10.667Z" stroke="#E60076" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z" stroke="#E60076" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 29.333C26.2091 29.333 28 27.5421 28 25.333C28 23.1239 26.2091 21.333 24 21.333C21.7909 21.333 20 23.1239 20 25.333C20 27.5421 21.7909 29.333 24 29.333Z" stroke="#E60076" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.4531 18.0137L20.5598 23.3203" stroke="#E60076" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.5465 8.67969L11.4531 13.9864" stroke="#E60076" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    156
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Files Shared Today
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex items-center space-x-4">

                  <Icon
                    name="document"
                    className="w-9 h-9 text-purple-600 dark:text-purple-400"
                  />
          
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    89
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Documents Created
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
              <div className="flex items-center space-x-4">
               
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3337 28V25.3333C21.3337 23.9188 20.7718 22.5623 19.7716 21.5621C18.7714 20.5619 17.4148 20 16.0003 20H8.00033C6.58584 20 5.22928 20.5619 4.22909 21.5621C3.2289 22.5623 2.66699 23.9188 2.66699 25.3333V28" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.333 4.1709C22.4767 4.46739 23.4895 5.13525 24.2126 6.06965C24.9356 7.00405 25.3279 8.15208 25.3279 9.33357C25.3279 10.515 24.9356 11.6631 24.2126 12.5975C23.4895 13.5319 22.4767 14.1997 21.333 14.4962" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M29.333 27.9995V25.3329C29.3321 24.1512 28.9388 23.0032 28.2148 22.0693C27.4908 21.1353 26.4772 20.4683 25.333 20.1729" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0003 14.6667C14.9458 14.6667 17.3337 12.2789 17.3337 9.33333C17.3337 6.38781 14.9458 4 12.0003 4C9.05481 4 6.66699 6.38781 6.66699 9.33333C6.66699 12.2789 9.05481 14.6667 12.0003 14.6667Z" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
             
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    234
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Active Collaborators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer & Audience Growth */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Customer & Audience Growth
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              User signups in the last 7 days
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  1,378
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Signups
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  267
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Latest Day
                </div>
              </div>
            </div>

            {/* Weekly Bar Chart */}
            <div className="h-72  rounded-2xl overflow-hidden">
              <ResponsiveBar
                data={[
                  { day: "Mon", signups: 180 },
                  { day: "Tue", signups: 220 },
                  { day: "Wed", signups: 290 },
                  { day: "Thu", signups: 340 },
                  { day: "Fri", signups: 255 },
                  { day: "Sat", signups: 170 },
                  { day: "Sun", signups: 102 },
                ]}
                keys={["signups"]}
                indexBy="day"
                margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
                padding={0.6}
                innerPadding={4}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={({ index }) => {
                  const lightness = 90 - (index * 10); // Creates gradient from light to dark
                  return `hsl(217, 91%, ${lightness}%)`;
                }}
                borderRadius={13}
                borderWidth={0}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Days",
                  legendPosition: "middle",
                  legendOffset: 40,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Signups",
                  legendPosition: "middle",
                  legendOffset: -45,
                }}
                enableGridX={false}
                enableGridY={true}
                theme={{
                  background: "transparent",
                  text: {
                    fontSize: 12,
                    fill: "#6B7280",
                    fontFamily: "inherit",
                  },
                  axis: {
                    domain: {
                      line: {
                        stroke: "#E5E7EB",
                        strokeWidth: 1,
                      },
                    },
                    legend: {
                      text: {
                        fontSize: 12,
                        fill: "#6B7280",
                        fontFamily: "inherit",
                      },
                    },
                    ticks: {
                      line: {
                        stroke: "#E5E7EB",
                        strokeWidth: 1,
                      },
                      text: {
                        fontSize: 11,
                        fill: "#6B7280",
                        fontFamily: "inherit",
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: "#D1D5DB",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                      strokeOpacity: 0.6,
                    },
                  },
                  tooltip: {
                    container: {
                      background: "white",
                      color: "#1F2937",
                      fontSize: "12px",
                      borderRadius: "8px",
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      border: "1px solid #E5E7EB",
                    },
                  },
                }}
                enableLabel={false}
                animate={true}
                motionConfig="gentle"
                legends={[]}
              />
            </div>
          </div>

          {/* Performance Panel */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Performance Panel
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Key operational metrics
              </p>
            </div>
             <div className="flex gap-x-[60px] py-11">
              <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-4">
                 <div className="size-12 bg-[#F7F7F7] rounded-full items-center justify-center flex">
                   <Icon
                     name="shopping-bag-custom"
                     className="w-6 h-6 text-[#635BFF]"
                   />
                 </div>
                 <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                    156 New Orders
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Processing
                  </div>
                 </div>
               </div>
               <div className="flex gap-x-4">
                 <div className="size-12 bg-[#F7F7F7] rounded-full items-center justify-center flex">
                 <Icon
  name="shopping-bag-on-hold"
  className="w-6 h-6 text-[#635BFF]"
/>
                 </div>
                 <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                4 Orders
                  </div>
                  <div className="text-sm text-gray-600 font-normal dark:text-gray-400">
                   On hold
                  </div>
                 </div>
               </div>
               <div className="flex gap-x-4">
                 <div className="size-12 bg-[#F7F7F7] rounded-full items-center justify-center flex">
                   <Icon
                     name="delivered"
                     className="w-6 h-6 text-[#16CDC7]"
                   />
                 </div>
                 <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                    12 Orders 
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                  Delivered
                  </div>
                 </div>
               </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                 <div className="relative w-[212px] h-[120px]">
                   <svg className="w-[212px] h-[120px]" viewBox="0 0 212 120">
                      <defs>
                        <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#A8FFD9" />
                          <stop offset="100%" stopColor="#09F731" />
                        </linearGradient>
                      </defs>
                      {/* Background semicircle */}
                      <path
                        d="M 20 100 A 86 86 0 0 1 192 100"
                        stroke="#F0F0F0"
                        strokeWidth="16"
                        fill="none"
                      />
                      {/* Progress semicircle with gradient */}
                      <path
                        d="M 20 100 A 86 86 0 0 1 192 100"
                        stroke="url(#donutGradient)"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray={270}
                        strokeDashoffset={68}
                        strokeLinecap="round"
                      />
                    </svg>
                  <div className="absolute inset-0 flex items-center justify-center mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">
                        3.75
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Good
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center text-gray-500 max-w-[195px] dark:text-gray-400">
                  Learn more how to manage all aspects of your startup.
                </p>
              </div>
             </div>

            {/* Performance Summary */}
            <div className="pt-4 mt-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Performance Summary
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                    94.2%
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Success Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold  text-gray-900 dark:text-white">
                    2.1 Hrs
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Avg Response Time
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                    4.8/5
                  </div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Customer Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales / Ticketing Overview */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Sales / Ticketing Overview
            </h3>

            <div className="text-left mb-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                $2.4M
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Donut Chart */}
              <div className="w-32 h-32">
                <ResponsivePie
                  data={[
                    { id: "Ticket Sales", value: 52.1, color: "#EC4899" },
                    { id: "Sponsorship", value: 22.8, color: "#06B6D4" },
                    { id: "Merchandise", value: 13.9, color: "#8B5CF6" },
                    { id: "Add-ons", value: 11.2, color: "#10B981" }
                  ]}
                  margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  innerRadius={0.6}
                  padAngle={1}
                  cornerRadius={2}
                  colors={({ data }: { data: { color: string } }) => data.color}
                  enableArcLabels={false}
                  enableArcLinkLabels={false}
                  isInteractive={true}
                  animate={true}
                  motionConfig="gentle"
                />
              </div>

              {/* Legend */}
              <div className="flex-1 ml-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Ticket Sales
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    52.1%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Sponsorship
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    22.8%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Merchandise
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    13.9%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Add-ons
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    11.2%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue by Product */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 ">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Revenue by Product
            </h3>

            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span>Tours</span>
              <span>Events</span>
              <span>Sponsorships</span>
              <span>Others</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-slate-700">
                    <th className="text-left pb-3 font-normal">Assigned</th>
                    <th className="text-center pb-3 font-normal">Progress</th>
                    <th className="text-center pb-3 font-normal">Priority</th>
                    <th className="text-right pb-3 font-normal">Budget</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr>
                    <td colSpan={4} className="pb-2"></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Minecraft App
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Jason Roy
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="text-sm text-gray-900 dark:text-white">
                        73.2%
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        Low
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        $3.5k
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">W</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            Web App Project
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Mathew Flintoff
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="text-sm text-gray-900 dark:text-white">
                        50.8%
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                        Medium
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        $3.5k
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;