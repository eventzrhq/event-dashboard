"use client";

import React from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";

const Vault = () => {
  const uploadFiles = [
    { id: 1, name: "Twitter task-01.zip", size: "25 MB", status: "completed", progress: 100 },
    { id: 2, name: "Twitter task-02.png", size: "25 MB", status: "uploading", progress: 75 },
    { id: 3, name: "Twitter task-3.mp4", size: "25 MB", status: "failed", progress: 0 },
  ];

  const storageData = [
    { label: "Storage Used", value: "15 GB", total: "25 GB", percentage: 60, color: "bg-blue-500" },
    { label: "Total Files", value: "05 GB", total: "24k files", percentage: 20, color: "bg-green-500" },
    { label: "Shared With Me", value: "05 GB", total: "16k files", percentage: 25, color: "bg-red-500" },
  ];

  const fileCategories = [
    { label: "Images", count: "24k files", size: "25 GB", color: "bg-blue-500", icon: "camera" },
    { label: "Documents", count: "15k files", size: "15 GB", color: "bg-red-500", icon: "document" },
    { label: "Media", count: "8k files", size: "8 GB", color: "bg-yellow-500", icon: "video" },
    { label: "Videos", count: "5k files", size: "5 GB", color: "bg-green-500", icon: "video" },
    { label: "Music 2025", count: "2k files", size: "2 GB", color: "bg-teal-600", icon: "music" },
  ];

  const recentFolders = [
    { name: "Product UI/UX Design", size: "680 MB", date: "15 Min Ago", items: 120 },
    { name: "App Design & Development", size: "1.6 GB", date: "30 Min Ago", items: 80 },
    { name: "Uiads-sketch-design.zip", size: "1.4GB", date: "Feb 25,2022", items: 32 },
    { name: "Anna.depot.pdf", size: "260 MB", date: "Feb 26,2022", items: 24 },
    { name: "Wireframes.Figma", size: "260 MB", date: "Feb 28,2022", items: 10 },
  ];

  const storageInsights = [
    { type: "Music", size: "6.5 GB", color: "bg-blue-500" },
    { type: "Videos", size: "2 GB", color: "bg-green-500" },
    { type: "Documents", size: "24 GB", color: "bg-yellow-500" },
    { type: "Photos", size: "6.5 GB", color: "bg-purple-500" },
    { type: "Others", size: "6.5 GB", color: "bg-gray-400" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Storage Usage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {storageData.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                      {index === 0 ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.36426 10.449L8.31343 5.49979C9.47996 4.33326 10.0632 3.75 10.788 3.75C11.5128 3.75 12.0961 4.33326 13.2626 5.49979L14.4999 6.73709C15.6664 7.90361 16.2497 8.48688 16.2497 9.21167C16.2497 9.93646 15.6664 10.5197 14.4999 11.6862L9.55072 16.6354C7.84238 18.3438 5.07261 18.3438 3.36426 16.6354C1.65592 14.9271 1.65592 12.1573 3.36426 10.449Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.08301 14.166C7.08301 13.4757 6.52336 12.916 5.83301 12.916C5.14265 12.916 4.58301 13.4757 4.58301 14.166C4.58301 14.8564 5.14265 15.416 5.83301 15.416C6.52336 15.416 7.08301 14.8564 7.08301 14.166Z" stroke="white" strokeWidth="1.25"/>
                          <path opacity="0.4" d="M12.083 4.45732L13.2357 3.30464C14.0508 2.48957 14.4583 2.08203 14.9647 2.08203C15.4711 2.08203 15.8787 2.48957 16.6937 3.30464C17.5088 4.11971 17.9163 4.52724 17.9163 5.03366C17.9163 5.54008 17.5088 5.94761 16.6937 6.76268L15.5411 7.91536" stroke="white" strokeWidth="1.25" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <Icon name="folder" className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {item.total}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                      <span className="text-gray-500">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* File Categories */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                File Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {fileCategories.map((category, index) => (
                  <div key={index} className="text-center p-4 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <Icon name={category.icon as "camera" | "document" | "video" | "music"} className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {category.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {category.count}
                    </p>
                    <p className="text-xs text-gray-400">
                      {category.size}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Folders */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Recent Folders
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-slate-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                        File Size
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                        Uploaded Date
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                        File Item
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentFolders.map((folder, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <Icon name="folder" className="w-5 h-5 text-blue-500" />
                            <span className="font-medium text-gray-900 dark:text-white">
                              {folder.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600 dark:text-gray-400">
                          {folder.size}
                        </td>
                        <td className="py-4 px-4 text-gray-600 dark:text-gray-400">
                          {folder.date}
                        </td>
                        <td className="py-4 px-4 text-gray-600 dark:text-gray-400">
                          {folder.items}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-colors">
                            <Icon name="more-vertical" className="w-4 h-4 text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Storage Insights & Upload */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Files Section */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Upload Files
              </h3>
              
              {/* Upload Area */}
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center mb-6 bg-blue-50 dark:bg-blue-900/10">
                <Icon name="upload" className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Select a file or drag and drop here
                </p>
                <p className="text-xs text-gray-500">
                  JPG, PNG or PDF, file size no more than 10MB
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Choose Location
                </h4>
                <select className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
                  <option>Flying Designs 2025</option>
                  <option>Documents</option>
                  <option>Images</option>
                </select>
              </div>

              {/* Upload Queue */}
              <div className="space-y-3 mt-6">
                {uploadFiles.map((file) => (
                  <div key={file.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className={`w-8 h-8 rounded flex items-center justify-center ${
                      file.status === 'completed' ? 'bg-green-100' : 
                      file.status === 'uploading' ? 'bg-blue-100' : 'bg-red-100'
                    }`}>
                      <Icon name={
                        file.status === 'completed' ? 'check' : 
                        file.status === 'uploading' ? 'upload' : 'x'
                      } className={`w-4 h-4 ${
                        file.status === 'completed' ? 'text-green-600' : 
                        file.status === 'uploading' ? 'text-blue-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {file.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-gray-500">{file.size}</p>
                        {file.status === 'uploading' && (
                          <span className="text-xs text-blue-600">Uploading...</span>
                        )}
                        {file.status === 'failed' && (
                          <span className="text-xs text-red-600">Try Again</span>
                        )}
                      </div>
                      {file.status === 'uploading' && (
                        <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-1 mt-1">
                          <div 
                            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                    <button className="p-1 hover:bg-gray-200 dark:hover:bg-slate-600 rounded">
                      <Icon name="x" className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                Save
              </Button>
            </div>

            {/* Storage Insights */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Storage Insights
              </h3>
              
              {/* Storage Details */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Storage Details
                </h4>
                <div className="space-y-3">
                  {storageInsights.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.type}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut Chart Placeholder */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full border-8 border-gray-200 dark:border-slate-700 relative">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{
                      background: `conic-gradient(
                        #3b82f6 0deg 130deg,
                        #10b981 130deg 180deg,
                        #f59e0b 180deg 270deg,
                        #8b5cf6 270deg 320deg,
                        #6b7280 320deg 360deg
                      )`
                    }}></div>
                    <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">15 GB</div>
                        <div className="text-xs text-gray-500">Used Space</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upgrade Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center text-white">
                <div className="mb-3">
                  <Icon name="rocket" className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Upgrade to Pro for Unlimited Storage</p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4 py-2">
                  Upgrade Now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
