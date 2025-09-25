"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { ResponsivePie } from "@nivo/pie";

const Vault = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Files");

  const fileCategories = [
    { name: "All Files", icon: "documents" },
    { name: "Images", icon: "image" },
    { name: "Videos", icon: "video" },
    { name: "Audios", icon: "audio" },
    { name: "Docs", icon: "documents" },
    { name: "AI", icon: "ai-chip" },
    { name: "Others", icon: "documents" },
  ];

  const importOptions = [
    { name: "Google Drive", icon: "google-drive" },
    { name: "Dropbox", icon: "dropbox" },
  ];

  const storageBreakdown = [
    { id: "Photos", value: 2.4, color: "#7CEABC" },
    { id: "Music", value: 2.1, color: "#879CEE" },
    { id: "Others", value: 1.5, color: "#68CEF9" },
    { id: "Videos", value: 1.2, color: "#FFD279" },
    { id: "AI Content", value: 0.268, color: "#075056" },
    { id: "Documents", value: 0.1, color: "#FF7272" },
  ];

  const studioSuggestions = [
    { title: "Plan my weekend getaway", image: "motorcycle-mountain" },
    { title: "Suggest trending concerts nearby", image: "concert-stage" },
    { title: "Create my personalized tour plan", image: "plane-city" },
    { title: "Show top foodie destinations", image: "food-plate" },
  ];

  const storageInsights = [
    { icon: "storage-used", title: "Storage Used", value: "15 GB", files: "46 Files", color: "text-red-500" },
    { icon: "total-files", title: "Total Files", value: "05 GB", files: "246 Files", color: "text-yellow-500" },
    { icon: "shared-with-me", title: "Shared With Me", value: "05 GB", files: "146 Files", color: "text-green-500" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-6">
      <div className="w-full ">
        {/* Top Navigation Bar */}
        <div className="mb-8">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Vault</h1>
                    </div>
                    
          {/* File Categories, Import Options, and Buy More Storage */}
          <div className="flex items-center justify-between">
            {/* File Category Filters */}
            <div className="flex items-center space-x-2">
              {fileCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    selectedCategory === category.name
                      ? "bg-white text-blue-600 border-blue-600"
                      : "bg-white text-black border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  <Icon name={category.icon as "documents" | "image" | "video" | "audio" | "ai-chip"} className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Import Options, Refresh, and Buy More Storage */}
            <div className="flex items-center space-x-1">
              {/* Import Options */}
              <div className="flex items-center space-x-3 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white">
                <span className="text-sm text-black
                 dark:text-gray-400">Import from</span>
                <div className="flex items-center space-x-2">
                  {importOptions.map((option, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-500 hover:bg-gray-50"
                    >
                      <Icon name={option.icon as "google-drive" | "dropbox"} className="w-4 h-4" />
                    </button>
                ))}
              </div>
            </div>

              {/* Refresh Button */}
              <button className="flex items-center space-x-2 p-[10px]  rounded-full text-sm  bg-white text-black hover:bg-gray-50">
                <Icon name="refresh" className="size-5" />
                          </button>

              {/* Buy More Storage */}
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 flex items-center space-x-2">
                <span>Buy More Storage</span>
                <Icon name="arrow-right" className="w-3 h-2" />
              </Button>
            </div>
          </div>
              </div>

        {/* Main Content - Two Grid Layout */}
        <div className="flex gap-6">
          {/* First Grid - Storage Details, Storage Insights, Studio V 1.1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 w-4/5">
            {/* Storage Details Card */}
            <div className="bg-white dark:bg-slate-800 rounded-[12px] p-8 border border-gray-200 dark:border-slate-700 col-span-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg/[24px] font-semibold text-gray-900 dark:text-white mb-1">Storage Details</h3>
                
                </div>
                <span className="bg-[#DC2626] text-white text-sm font-semibold px-4 py-2 rounded-full dark:from-red-900 dark:to-red-800 dark:text-red-200">
                  Used 77%
                </span>
              </div>

              {/* Grid Layout: Pie Chart on left, Legend on right */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left side - Pie Chart */}
                <div className="flex flex-col items-center">
                  <div className="h-72 w-full -mt-14 ml-15 rotate-[95deg] relative">
                  <ResponsivePie
                    data={storageBreakdown}
                    margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
                    innerRadius={0.7}
                    padAngle={0}
                    cornerRadius={0}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                      from: 'color',
                      modifiers: [['darker', 0.2]]
                    }}
                    enableArcLinkLabels={false}
                    enableArcLabels={false}
                    isInteractive={false}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: 'color',
                      modifiers: [['darker', 2]]
                    }}
                    colors={{ datum: 'data.color' }}
                    startAngle={175}
                    endAngle={355}
                    tooltip={({ datum }) => (
                      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: datum.color }}
                          ></div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {datum.id}: {datum.value} GB
                          </span>
                        </div>
                      </div>
                    )}
                    theme={{
                      background: 'transparent',
                      text: {
                        fontSize: 12,
                        fill: '#6b7280',
                        fontFamily: 'inherit'
                      },
                      tooltip: {
                        container: {
                          background: 'transparent',
                          color: 'inherit',
                          fontSize: 12,
                          borderRadius: 6,
                          boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
                          border: '1px solid #e5e7eb'
                        }
                      }
                    }}
                  />
                  </div>
                  
                  {/* Storage info */}
                  <div className="flex justify-between text-sm text-gray-600 pl-5 divi  pr-13 dark:text-gray-400 w-full -mt-23">
                    <div className="text-center border-r-2 pr-19 border-gray-200 dark:border-gray-700">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">15 GB</div>
                      <div className="text-xs">Total Space</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">13 GB</div>
                      <div className="text-xs">Used Space</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Legend */}
                <div className="space-y-3">
                  {storageBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.id}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value} GB</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Storage Insights Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 col-span-1">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Storage Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quick overview</p>
              </div>
              
              <div className="space-y-4">
                {storageInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4 w-full p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      insight.color === 'text-red-500' ? 'bg-[#FF7272] dark:bg-red-900' :
                      insight.color === 'text-yellow-500' ? 'bg-[#FFD279] dark:bg-yellow-900' :
                      'bg-[#7CEABC] dark:bg-green-900'
                    }`}>
                      <Icon 
                        name={insight.icon as "storage-used" | "total-files" | "shared-with-me"} 
                        className={`w-6 h-6 ${insight.color}`} 
                      />
                      </div>
                      <div className="flex-1">
                        <div className="flex w-full justify-between items-center mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{insight.title}</h4>
                          <div className="text-xl font-bold text-gray-900 dark:text-white">{insight.value}</div>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{insight.files}</div>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio V 1.1 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 col-span-3 border border-blue-200 dark:border-blue-700">
              {/* Header with Studio logo and version badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Studio</h3>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                    V 1.1
                  </span>
                </div>
              </div>
              
              {/* Greeting Section */}
              <div className="text-center mb-8">
                <p className="text-blue-600 dark:text-blue-400 text-xl/[24px] font-medium mb-1">Hello, Praveen</p>
                <p className="text-gray-600 dark:text-gray-400 text-xl/[24px] font-medium">Want to try out a few things?</p>
              </div>

              {/* Suggestions Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Try something new</h4>
                  <button className="text-[#9A9B9C] hover:text-gray-600 dark:hover:text-gray-300">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6682 0.999999L14.3414 1.7318C14.6421 2.05874 14.7925 2.22221 14.7395 2.3611C14.6866 2.5 14.474 2.5 14.0487 2.5C13.0967 2.5 11.9578 2.3462 11.0834 2.85498C10.5427 3.16954 10.1662 3.71887 9.52938 4.75M1.25 11.5H2.43561C3.88155 11.5 4.60452 11.5 5.21465 11.145C5.75531 10.8305 6.13178 10.2811 6.76862 9.25" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.6682 13L14.3414 12.2682C14.6421 11.9413 14.7925 11.7778 14.7395 11.6389C14.6866 11.5 14.474 11.5 14.0487 11.5C13.0967 11.5 11.9578 11.6538 11.0834 11.145C10.4732 10.79 10.0722 10.1361 9.27014 8.8282L7.02787 5.1718C6.22581 3.8639 5.82478 3.20995 5.21465 2.85498C4.60452 2.5 3.88155 2.5 2.43561 2.5H1.25" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </button>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {studioSuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-white dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-gray-200 dark:border-slate-600">
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">
                        {suggestion.title}
                      </div>
                      <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-md flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <div className="flex items-center bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <Icon name="plus" className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="ask Studio for anything"
                  className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none"
                />
                <div className="flex items-center space-x-3 ml-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Studio v 1.0</span>
                  <Icon name="chevron-down" className="w-3 h-3 text-gray-400" />
                  <Icon name="mic" className="w-4 h-4 text-gray-400" />
                  <Icon name="chart" className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Grid - Upload Files */}
          <div className="grid grid-cols-1 gap-6 w-1/5 min-w-[300px]">
            {/* Upload Files Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Upload Files</h3>
              
              {/* Drag & Drop Area */}
              <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl p-12 text-center bg-blue-50 dark:bg-blue-900/10">
                <Icon name="box" className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Select a file or drag and drop here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;