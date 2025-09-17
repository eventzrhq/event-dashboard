"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import RevenueChart from "./RevenueChart";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2024");

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Welcome Back David
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Here&apos;s what&apos;s happening with your business today
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="download" className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="plus" className="w-4 h-4 mr-2" />
                Add New
              </Button>
            </div>
          </div>

          {/* Budget Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-90">Budget</h3>
                <Icon name="dollar" className="w-5 h-5 opacity-75" />
              </div>
              <div className="text-3xl font-bold mb-1">$98,450</div>
              <div className="text-sm opacity-75">Total budget allocated</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium opacity-90">Budget</h3>
                <Icon name="dollar" className="w-5 h-5 opacity-75" />
              </div>
              <div className="text-3xl font-bold mb-1">$2,440</div>
              <div className="text-sm opacity-75">Remaining budget</div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Customers</h3>
                <div className="flex items-center text-red-500 text-sm">
                  <Icon name="chevron-down" className="w-4 h-4 mr-1" />
                  -12%
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">36,358</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total customers</div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Projects</h3>
                <div className="flex items-center text-green-500 text-sm">
                  <Icon name="chevron-up" className="w-4 h-4 mr-1" />
                  +31.8%
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">78,298</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active projects</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Forecast */}
          <div className="lg:col-span-2">
            <RevenueChart 
              selectedPeriod={selectedPeriod} 
              onPeriodChange={setSelectedPeriod} 
            />
          </div>

          {/* Your Performance */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last check on 25 february</p>
              </div>
              
              <div className="flex-1 space-y-6">
                {/* Performance Metrics */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Icon name="shopping-bag-custom" className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-900 dark:text-blue-100">64 new orders</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Processing</p>
                        </div>
                      </div>
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">64</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Icon name="clock" className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-yellow-900 dark:text-yellow-100">4 orders</p>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">On hold</p>
                        </div>
                      </div>
                      <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">4</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="check-custom" className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-green-900 dark:text-green-100">12 orders</p>
                          <p className="text-sm text-green-600 dark:text-green-400">Delivered</p>
                        </div>
                      </div>
                      <span className="text-3xl font-bold text-green-600 dark:text-green-400">12</span>
                    </div>
                  </div>
                </div>

                {/* Insights Card */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-3">275</div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                      Learn insights how to manage all aspects of your startup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customers */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customers</h3>
              <div className="flex items-center text-green-500 text-sm">
                <Icon name="chevron-up" className="w-4 h-4 mr-1" />
                +26.5%
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last 7 days</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 07 - April 14</p>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">6,380</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Week: 4,298</p>
          </div>

          {/* Sales Overview */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Overview</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">Last 7 days</span>
            </div>
            
            {/* Progress bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">0%</span>
                  <span className="text-gray-600 dark:text-gray-400">25%</span>
                  <span className="text-gray-600 dark:text-gray-400">50%</span>
                  <span className="text-gray-600 dark:text-gray-400">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue by Product */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue by Product</h3>
            <div className="flex items-center space-x-4 text-sm mb-4">
              <span className="text-gray-500 dark:text-gray-400">Sep 2024</span>
              <span className="text-gray-500 dark:text-gray-400">Oct 2024</span>
              <span className="text-gray-500 dark:text-gray-400">Nov 2024</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">App</span>
                <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Mobile</span>
                <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">SaaS</span>
                <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Others</span>
                <div className="w-24 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Projects</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Assigned
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Budget
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3">
                        <Icon name="briefcase" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Minecraft App</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Jason Roy</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">73.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 rounded-full">
                      Medium
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    $3.5K
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-3">
                        <Icon name="global" className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Web App Project</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Mathew Flintoff</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mr-3">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">73.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 rounded-full">
                      Very High
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    $24.5K
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mr-3">
                        <Icon name="dashboard" className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Modernize Dashboard</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Anil Kumar</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mr-3">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">73.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full">
                      Low
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    $12.8K
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mr-3">
                        <Icon name="chart" className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Dashboard Co</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">George Cruize</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mr-3">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">73.2%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full">
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    $2.4K
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total settlements</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$122,580</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total balance</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$122,580</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Withdrawals</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$31,640</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Revenue</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">$98,450</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
