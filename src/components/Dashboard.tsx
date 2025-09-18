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
          <div className="grid-cols-4 grid gap-4">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Revenue Forecast */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border col-span-3 border-gray-200 dark:border-slate-700 shadow-sm">
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
            <div className="h-72 bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden">
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
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Core Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vault Activity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="vault" className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Vault Activity
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Files & Documents
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Shared</div>
                  <div className="text-gray-600 dark:text-gray-400">Stored</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    1,247 files shared
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    8.9GB stored
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="clock" className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Timeline
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Event Scheduling
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Progress
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Upcoming
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    89% On Schedule
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    23 Events Pending
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="chart" className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Campaign Performance
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Engagement Metrics
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Clicks</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Signups
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    45.2K Clicks
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    2.8K Signups
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Stats
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center">
                <Icon
                  name="heart-custom"
                  className="w-6 h-6 text-pink-600 dark:text-pink-400"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  156
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Files Shared Today
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Icon
                  name="document"
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  89
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Documents Created
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Icon
                  name="users3"
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                />
              </div>
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

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer & Audience Growth */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Customer & Audience Growth
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              User signups in the last 7 days
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  1,378
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Signups
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  267
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Latest Day
                </div>
              </div>
            </div>

            {/* Weekly Bar Chart */}
            <div className="flex justify-between items-end space-x-3 h-32 bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => {
                  const heights = [40, 60, 85, 100, 75, 50, 30];
                  return (
                    <div
                      key={day}
                      className="flex flex-col items-center space-y-2 flex-1"
                    >
                      <div
                        className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t shadow-sm transition-all duration-300 hover:shadow-md"
                        style={{
                          height: `${heights[index]}%`,
                          maxHeight: "96px",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {day}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Performance Panel */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Performance Panel
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Key operational metrics
            </p>

            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 128 128"
                >
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-slate-700"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={351.86}
                    strokeDashoffset={87.97}
                    className="text-green-500 transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      3.75
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Performance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  94.2%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  2.1 Hrs
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Avg Response Time
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  4.8/5
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales / Ticketing Overview */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Sales / Ticketing Overview
            </h3>

            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                $2.4M
              </div>
            </div>

            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-40 h-40" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="180"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="291"
                  strokeLinecap="round"
                  transform="rotate(98 80 80)"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="325"
                  strokeLinecap="round"
                  transform="rotate(180 80 80)"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="335"
                  strokeLinecap="round"
                  transform="rotate(260 80 80)"
                />
              </svg>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
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
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
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
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
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
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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

          {/* Revenue by Product */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Revenue by Product
            </h3>

            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>Tours</span>
              <span>Events</span>
              <span>Sponsorships</span>
              <span>Others</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Assigned
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Priority
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Budget
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Minecraft App
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      @Ashton
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-900 dark:text-white">
                    73.2%
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Low
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    $3.5k
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">W</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Web App Project
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      @Mathew Flintoff
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-900 dark:text-white">
                    50.8%
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                    Medium
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    $3.5k
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
