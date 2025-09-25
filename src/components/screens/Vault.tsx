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
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 col-span-2 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Storage Details</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Overview of your storage usage</p>
                </div>
                <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full dark:from-red-900 dark:to-red-800 dark:text-red-200 shadow-sm">
                  Used 77%
                </span>
              </div>

              {/* Grid Layout: Pie Chart on left, Legend on right */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left side - Pie Chart */}
                <div className="flex flex-col items-center">
                  <div className="h-72 w-full -mt-10 ml-15 rotate-[95deg] relative">
                  <ResponsivePie
                    data={storageBreakdown}
                    margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
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
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 w-full -mt-18">
                    <div className="text-center">
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
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 col-span-1 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Storage Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quick overview</p>
              </div>
              
              <div className="space-y-4">
                {storageInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4 w-full p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${
                      insight.color === 'text-red-500' ? 'bg-red-100 dark:bg-red-900' :
                      insight.color === 'text-yellow-500' ? 'bg-yellow-100 dark:bg-yellow-900' :
                      'bg-green-100 dark:bg-green-900'
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
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 col-span-3 shadow-sm border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Studio V 1.1</h3>
              
              <div className="mb-6">
                <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, Praveen</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Want to try out a few things?</p>
              </div>

              {/* Suggestions Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Try something new</h4>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {studioSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex-shrink-0 bg-white dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-gray-200 dark:border-slate-600 min-w-[280px]">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {suggestion.title}
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-md flex items-center justify-center flex-shrink-0">
                          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <div className="flex items-center bg-gray-50 dark:bg-slate-700 rounded-lg p-3">
                <Icon name="plus" className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="ask Studio for anything"
                  className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none"
                />
                <div className="flex items-center space-x-2 ml-3">
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
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
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