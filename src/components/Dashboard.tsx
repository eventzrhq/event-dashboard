"use client";

import { ResponsiveBar } from "@nivo/bar";
import { Icon } from "./icons";

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
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-y-4 p-4 bg-white rounded-md w-full">
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

            <div className="flex flex-col gap-y-4 p-4 bg-white rounded-md w-full">
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

            <div className="flex flex-col gap-y-4 p-4 bg-white rounded-md w-full">
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

            <div className="flex flex-col gap-y-4 p-4 bg-white rounded-md w-full">
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

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Revenue Analytics
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Current Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Previous Year</span>
              </div>
            </div>
          </div>
          
          <div style={{ height: "400px" }}>
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
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Industry Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="trending-up" className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Events & Meetings
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  +18.5% Growth
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="users" className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Active Users
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  +12.3% Growth
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Icon name="dollar" className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Revenue Growth
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  +25.1% Growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="calendar" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Event Management
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive event planning and management tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="trending-up" className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Analytics
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time analytics and performance insights
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Team Collaboration
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Seamless team collaboration and communication
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="support" className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Support System
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                24/7 customer support and ticket management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;