"use client";

import { ResponsiveLine } from "@nivo/line";
import { cn } from "@/lib/utils";

interface RevenueChartProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

const RevenueChart = ({ selectedPeriod, onPeriodChange }: RevenueChartProps) => {
  // Mock data for different periods with more realistic fluctuations
  const chartData = {
    "2024": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [45000, 52000, 48000, 61000, 55000, 67000, 72000, 68000, 75000, 71000, 78000, 82000],
      profit: [32000, 38000, 35000, 45000, 41000, 50000, 54000, 51000, 57000, 53000, 59000, 62000],
      growth: [8, 15, -8, 27, -10, 22, 7, -6, 10, -5, 10, 5],
    },
    "2023": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [38000, 45000, 42000, 54000, 48000, 58000, 52000, 63000, 59000, 66000, 62000, 69000],
      profit: [28000, 33000, 31000, 40000, 36000, 44000, 39000, 47000, 44000, 50000, 46000, 52000],
      growth: [5, 18, -7, 29, -11, 21, -10, 21, -6, 12, -6, 11],
    },
    "2022": {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      revenue: [32000, 38000, 35000, 46000, 41000, 49000, 44000, 54000, 50000, 57000, 53000, 60000],
      profit: [24000, 28000, 26000, 34000, 31000, 37000, 33000, 40000, 37000, 43000, 40000, 45000],
      growth: [0, 19, -8, 31, -11, 20, -10, 23, -7, 14, -7, 13],
    },
  };

  const currentData = chartData[selectedPeriod as keyof typeof chartData] || chartData["2024"];
  
  // Transform data for Nivo format
  const nivoData = [
    {
      id: "Revenue",
      color: "#3B82F6",
      data: currentData.months.map((month, index) => ({
        x: month,
        y: currentData.revenue[index] / 1000, // Convert to K
      })),
    },
    {
      id: "Profit", 
      color: "#10B981",
      data: currentData.months.map((month, index) => ({
        x: month,
        y: currentData.profit[index] / 1000, // Convert to K
      })),
    },
  ];

  const revenueTotal = currentData.revenue.reduce((sum, value) => sum + value, 0);
  const profitTotal = currentData.profit.reduce((sum, value) => sum + value, 0);
  const avgGrowth = currentData.growth.reduce((sum, value) => sum + value, 0) / currentData.growth.length;
  const growth = avgGrowth > 0 ? `+${avgGrowth.toFixed(1)}%` : `${avgGrowth.toFixed(1)}%`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Revenue Forecast</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Overview of Profit & Growth</p>
        </div>
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
          {["2024", "2023", "2022"].map((period) => (
            <button
              key={period}
              onClick={() => onPeriodChange(period)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                selectedPeriod === period
                  ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-600/50"
              )}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Stats with improved design */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${(revenueTotal / 1000).toFixed(0)}K
          </div>
          <div className="text-sm text-blue-600/70 dark:text-blue-400/70">Total Revenue</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            ${(profitTotal / 1000).toFixed(0)}K
          </div>
          <div className="text-sm text-green-600/70 dark:text-green-400/70">Total Profit</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
          <div className={cn(
            "text-2xl font-bold",
            avgGrowth > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          )}>
            {growth}
          </div>
          <div className="text-sm text-purple-600/70 dark:text-purple-400/70">Avg Growth</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {((profitTotal / revenueTotal) * 100).toFixed(1)}%
          </div>
          <div className="text-sm text-orange-600/70 dark:text-orange-400/70">Profit Margin</div>
        </div>
      </div>

      {/* Nivo Line Chart */}
      <div className="h-80 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-gray-200 dark:border-slate-600">
        <ResponsiveLine
          data={nivoData}
          margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Months',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount (K)',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={8}
          pointColor={{ from: 'color' }}
          pointBorderWidth={3}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={true}
          areaOpacity={0.1}
          useMesh={true}
          enableSlices="x"
          theme={{
            background: 'transparent',
            text: {
              fontSize: 12,
              fill: '#6B7280',
              fontFamily: 'inherit'
            },
            axis: {
              domain: {
                line: {
                  stroke: '#E5E7EB',
                  strokeWidth: 1
                }
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: '#6B7280',
                  fontFamily: 'inherit'
                }
              },
              ticks: {
                line: {
                  stroke: '#E5E7EB',
                  strokeWidth: 1
                },
                text: {
                  fontSize: 11,
                  fill: '#6B7280',
                  fontFamily: 'inherit'
                }
              }
            },
            grid: {
              line: {
                stroke: '#F3F4F6',
                strokeWidth: 1,
                strokeDasharray: '2 2'
              }
            },
            crosshair: {
              line: {
                stroke: '#6B7280',
                strokeWidth: 1,
                strokeOpacity: 0.35,
                strokeDasharray: '6 6'
              }
            },
            tooltip: {
              container: {
                background: 'white',
                color: '#1F2937',
                fontSize: '12px',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #E5E7EB'
              }
            }
          }}
          colors={['#3B82F6', '#10B981']}
          lineWidth={3}
          enableGridX={false}
          enableGridY={true}
          animate={true}
          motionConfig="gentle"
          legends={[]}
        />
      </div>

      {/* Enhanced Legend with hover effects */}
      <div className="flex items-center justify-center space-x-8 mt-6">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/50 transition-shadow duration-300"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            Revenue (${(revenueTotal / 1000).toFixed(0)}K)
          </span>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg group-hover:shadow-green-200 dark:group-hover:shadow-green-900/50 transition-shadow duration-300"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
            Profit (${(profitTotal / 1000).toFixed(0)}K)
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className={cn(
            "w-4 h-4 rounded-full shadow-lg",
            avgGrowth > 0 
              ? "bg-gradient-to-r from-green-500 to-emerald-500" 
              : "bg-gradient-to-r from-red-500 to-rose-500"
          )}></div>
          <span className={cn(
            "text-sm font-medium transition-colors duration-300",
            avgGrowth > 0 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400"
          )}>
            Growth {growth}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
