"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { ResponsivePie } from "@nivo/pie";

interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'failed';
  progress: number;
  error?: string;
}

const Vault = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Files");
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [savedFiles, setSavedFiles] = useState<{[key: string]: Array<{id: string, name: string, type: string, size: string, date: string}>}>({
    'All Files': [],
    'Images': [],
    'Videos': [],
    'Audios': [],
    'Docs': [],
    'AI': [],
    'Others': []
  });

  // Sample data for different categories
  const sampleFiles = {
    'All Files': [
      { id: '1', name: 'Project Report.pdf', type: 'documents', size: '2.4 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Vacation Photo.jpg', type: 'image', size: '1.8 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'Meeting Recording.mp4', type: 'video', size: '45.2 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Podcast Episode.mp3', type: 'audio', size: '12.7 MB', date: '02.10.2025 14:22 PM' },
      { id: '5', name: 'AI Generated Art.png', type: 'ai', size: '3.1 MB', date: '01.10.2025 11:45 AM' }
    ],
    'Images': [
      { id: '1', name: 'Sunset Beach.jpg', type: 'image', size: '2.4 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Mountain View.png', type: 'image', size: '1.8 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'City Skyline.jpeg', type: 'image', size: '3.2 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Nature Photo.jpg', type: 'image', size: '2.1 MB', date: '02.10.2025 14:22 PM' },
      { id: '5', name: 'Portrait.png', type: 'image', size: '2.7 MB', date: '01.10.2025 11:45 AM' }
    ],
    'Videos': [
      { id: '1', name: 'Tutorial Video.mp4', type: 'video', size: '45.2 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Meeting Recording.mp4', type: 'video', size: '78.5 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'Demo Video.mov', type: 'video', size: '32.1 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Presentation.mp4', type: 'video', size: '56.8 MB', date: '02.10.2025 14:22 PM' }
    ],
    'Audios': [
      { id: '1', name: 'Podcast Episode.mp3', type: 'audio', size: '12.7 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Music Track.wav', type: 'audio', size: '8.3 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'Voice Note.m4a', type: 'audio', size: '2.1 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Interview.mp3', type: 'audio', size: '15.6 MB', date: '02.10.2025 14:22 PM' }
    ],
    'Docs': [
      { id: '1', name: 'Project Report.pdf', type: 'documents', size: '2.4 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Contract.docx', type: 'documents', size: '1.2 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'Presentation.pptx', type: 'documents', size: '5.8 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Spreadsheet.xlsx', type: 'documents', size: '0.8 MB', date: '02.10.2025 14:22 PM' }
    ],
    'AI': [
      { id: '1', name: 'AI Generated Art.png', type: 'ai', size: '3.1 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'ChatGPT Response.txt', type: 'ai', size: '0.1 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'AI Code Snippet.js', type: 'ai', size: '0.3 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Generated Content.md', type: 'ai', size: '0.5 MB', date: '02.10.2025 14:22 PM' }
    ],
    'Others': [
      { id: '1', name: 'Archive.zip', type: 'documents', size: '12.4 MB', date: '05.10.2025 10:49 AM' },
      { id: '2', name: 'Database.sql', type: 'documents', size: '2.1 MB', date: '04.10.2025 15:30 PM' },
      { id: '3', name: 'Config.json', type: 'documents', size: '0.1 MB', date: '03.10.2025 09:15 AM' },
      { id: '4', name: 'Backup.tar', type: 'documents', size: '45.7 MB', date: '02.10.2025 14:22 PM' }
    ]
  };

  // Helper function to format file size
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  // Helper function to get file icon based on type
  const getFileIcon = (type: string): string => {
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('video/')) return 'video';
    if (type.startsWith('audio/')) return 'audio';
    if (type.includes('zip') || type.includes('rar')) return 'documents';
    return 'documents';
  };

  // Helper function to determine file category
  const getFileCategory = useCallback((type: string, name: string): string => {
    if (type.startsWith('image/')) return 'Images';
    if (type.startsWith('video/')) return 'Videos';
    if (type.startsWith('audio/')) return 'Audios';
    if (type.includes('pdf') || type.includes('doc') || type.includes('xls') || type.includes('ppt')) return 'Docs';
    if (name.toLowerCase().includes('ai') || type.includes('ai-generated')) return 'AI';
    return 'Others';
  }, []);

  // Handle file selection
  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;

    console.log('Files selected:', files.length, Array.from(files).map(f => ({ name: f.name, type: f.type, size: f.size })));

    Array.from(files).forEach((file) => {
      const newFile: UploadFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        progress: 0
      };

      console.log('Adding file to upload queue:', newFile);
      setUploadFiles(prev => [...prev, newFile]);
      
      // Simulate upload progress
      simulateUpload(newFile.id);
    });
  }, []);

  // Simulate file upload with progress
  const simulateUpload = (fileId: string) => {
    console.log(`Starting upload simulation for file ID: ${fileId}`);
    
    // Safety timeout to ensure upload completes (max 10 seconds)
    const timeout = setTimeout(() => {
      console.log(`Upload timeout - forcing completion for file ID: ${fileId}`);
      setUploadFiles(prev => prev.map(file => 
        file.id === fileId && file.status === 'uploading' 
          ? { ...file, progress: 100, status: 'success' as const }
          : file
      ));
    }, 10000);
    
    const interval = setInterval(() => {
      setUploadFiles(prev => prev.map(file => {
        if (file.id === fileId && file.status === 'uploading') {
          const increment = Math.random() * 15 + 5; // 5-20% increment
          const newProgress = file.progress + increment;
          
          // Ensure we reach exactly 100% and complete
          if (newProgress >= 100) {
            console.log(`Upload completed for file ID: ${fileId}`);
            clearInterval(interval);
            clearTimeout(timeout); // Clear the safety timeout
            return { ...file, progress: 100, status: 'success' as const };
          }
          
          console.log(`Upload progress for ${fileId}: ${newProgress.toFixed(1)}%`);
          return { ...file, progress: Math.round(newProgress * 10) / 10 }; // Round to 1 decimal
        }
        return file;
      }));
    }, 300); // Faster updates for better UX
  };

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    console.log('Files dropped:', e.dataTransfer.files);
    handleFileSelect(e.dataTransfer.files);
  }, [handleFileSelect]);

  // Handle file input change
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File input changed:', e.target.files);
    handleFileSelect(e.target.files);
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [handleFileSelect]);

  // Remove file from upload list
  const removeFile = useCallback((fileId: string) => {
    setUploadFiles(prev => prev.filter(file => file.id !== fileId));
  }, []);

  // Retry failed upload
  const retryUpload = useCallback((fileId: string) => {
    setUploadFiles(prev => prev.map(file => 
      file.id === fileId 
        ? { ...file, status: 'uploading' as const, progress: 0, error: undefined }
        : file
    ));
    simulateUpload(fileId);
  }, []);

  // Save all files
  const handleSave = useCallback(() => {
    const successfulFiles = uploadFiles.filter(file => file.status === 'success');
    
    console.log('Save button clicked - uploadFiles:', uploadFiles);
    console.log('Successful files:', successfulFiles);
    
    if (successfulFiles.length === 0) {
      alert('No files to save!');
      return;
    }
    
    console.log('Saving files:', successfulFiles);
    
    // Use functional state updates to avoid stale closures
    setSavedFiles(prevSavedFiles => {
      const newSavedFiles = { ...prevSavedFiles };
      
      successfulFiles.forEach(file => {
        const category = getFileCategory(file.type, file.name);
        const fileData = {
          id: file.id,
          name: file.name,
          type: getFileIcon(file.type),
          size: formatFileSize(file.size),
          date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric'
          }) + ' ' + new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        };
        
        console.log(`Adding file to category: ${category}`, fileData);
        
        // Add to specific category
        newSavedFiles[category] = [...newSavedFiles[category], fileData];
        // Also add to All Files
        newSavedFiles['All Files'] = [...newSavedFiles['All Files'], fileData];
      });
      
      console.log('New saved files:', newSavedFiles);
      return newSavedFiles;
    });
    
    // Clear the upload queue
    console.log('Clearing upload queue');
    setUploadFiles([]);
    
    alert(`Saved ${successfulFiles.length} file(s) successfully!`);
  }, [uploadFiles, getFileCategory, formatFileSize]);

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
    {
      icon: "storage-used",
      title: "Storage Used",
      value: "15 GB",
      files: "46 Files",
      color: "text-red-500",
    },
    {
      icon: "total-files",
      title: "Total Files",
      value: "05 GB",
      files: "246 Files",
      color: "text-yellow-500",
    },
    {
      icon: "shared-with-me",
      title: "Shared With Me",
      value: "05 GB",
      files: "146 Files",
      color: "text-green-500",
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-6">
      <div className="w-full max-w-8xl mx-auto">
        {/* Top Navigation Bar */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          {/* Title */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              My Vault
            </h1>
          </div>

          {/* File Categories, Import Options, and Buy More Storage */}
          <div className="flex flex-col md:flex-row items-start md:items-center overflow-hidden justify-between gap-3 md:gap-4">
            {/* File Category Filters */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {fileCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border whitespace-nowrap ${
                    selectedCategory === category.name
                      ? "bg-white text-blue-600 border-blue-600"
                      : "bg-white text-black border-gray-200 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  <Icon
                    name={
                      category.icon as
                        | "documents"
                        | "image"
                        | "video"
                        | "audio"
                        | "ai-chip"
                    }
                    className="w-4 h-4"
                  />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle - Only show when Images is selected */}
            {selectedCategory === 'Images' && (
              <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                    <Icon name="plus" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                    <Icon name="chevron-down" className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Import Options, Refresh, and Buy More Storage */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap gap-1 sm:gap-2 w-full md:w-auto justify-start md:justify-end">
              {/* Import Options */}
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors bg-white">
                <span
                  className="text-xs sm:text-sm text-black dark:text-gray-400 whitespace-nowrap"
                >
                  Import from
                </span>
                <div className="flex items-center space-x-2">
                  {importOptions.map((option, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-500 hover:bg-gray-50"
                    >
                      <Icon
                        name={option.icon as "google-drive" | "dropbox"}
                        className="w-4 h-4"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Refresh Button */}
              <button className="flex items-center space-x-1 sm:space-x-2 p-2 sm:p-[10px] rounded-full text-sm bg-white text-black hover:bg-gray-50">
                <Icon name="refresh" className="w-4 h-4 sm:size-5" />
              </button>

              {/* Buy More Storage */}
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                <span className="whitespace-nowrap">Buy More Storage</span>
                <Icon name="arrow-right" className="w-3 h-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
          {/* Left Grid - Category Content */}
          <div className="flex-1 lg:w-3/4 xl:w-4/5">
            {selectedCategory === 'All Files' ? (
              /* Original Dashboard Layout for All Files */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Storage Details Card */}
            <div className="bg-white dark:bg-slate-800 rounded-[12px] p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-200 dark:border-slate-700 col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Storage Details
                  </h3>
                </div>
                <span className="bg-[#DC2626] text-white text-xs sm:text-sm font-semibold px-2 sm:px-4 py-1 sm:py-2 rounded-full dark:from-red-900 dark:to-red-800 dark:text-red-200">
                  Used 77%
                </span>
              </div>

              {/* Grid Layout: Pie Chart on left, Legend on right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
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
                      <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                        13 GB
                      </div>
                      <div className="text-xs">Used Space</div>
                    </div>
                  </div>
                </div>

                {/* Right side - Legend */}
                <div className="space-y-2 sm:space-y-3">
                  {storageBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {item.id}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                        {item.value} GB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Storage Insights Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-slate-700 col-span-1">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Storage Insights
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {storageInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 w-full p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-[#FF7272] dark:bg-red-900"
                          : index === 1
                          ? "bg-[#FFD279] dark:bg-yellow-900"
                          : "bg-[#7CEABC] dark:bg-green-900"
                      }`}
                    >
                      <Icon
                        name={
                          insight.icon as
                            | "storage-used"
                            | "total-files"
                            | "shared-with-me"
                        }
                        className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex w-full justify-between items-center mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                          {insight.title}
                        </h4>
                        <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {insight.value}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {insight.files}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio V 1.1 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 col-span-1 sm:col-span-2 lg:col-span-3 border border-blue-200 dark:border-blue-700">
              {/* Header with Studio logo and version badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Studio
                  </h3>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                    V 1.1
                  </span>
                </div>
              </div>

              {/* Greeting Section */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <p className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl font-medium mb-1">
                  Hello, Praveen
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-medium">
                  Want to try out a few things?
                </p>
              </div>

              {/* Suggestions Section */}
              <div className="mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 lg:px-[58px]">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Try something new
                  </h4>
                  <button className="text-[#9A9B9C] hover:text-gray-600 dark:hover:text-gray-300">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6682 0.999999L14.3414 1.7318C14.6421 2.05874 14.7925 2.22221 14.7395 2.3611C14.6866 2.5 14.474 2.5 14.0487 2.5C13.0967 2.5 11.9578 2.3462 11.0834 2.85498C10.5427 3.16954 10.1662 3.71887 9.52938 4.75M1.25 11.5H2.43561C3.88155 11.5 4.60452 11.5 5.21465 11.145C5.75531 10.8305 6.13178 10.2811 6.76862 9.25"
                        stroke="#141B34"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.6682 13L14.3414 12.2682C14.6421 11.9413 14.7925 11.7778 14.7395 11.6389C14.6866 11.5 14.474 11.5 14.0487 11.5C13.0967 11.5 11.9578 11.6538 11.0834 11.145C10.4732 10.79 10.0722 10.1361 9.27014 8.8282L7.02787 5.1718C6.22581 3.8639 5.82478 3.20995 5.21465 2.85498C4.60452 2.5 3.88155 2.5 2.43561 2.5H1.25"
                        stroke="#141B34"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {studioSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-700 rounded-lg p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors cursor-pointer border border-gray-200 dark:border-slate-600"
                    >
                      <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium mb-2 sm:mb-3">
                        {suggestion.title}
                      </div>
                      <div className="w-full h-20 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-md flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <div className="flex items-center bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                <Icon name="plus" className="w-4 h-4 text-black mr-3" />
                <input
                  type="text"
                  placeholder="ask Studio for anything"
                  className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-black focus:outline-none"
                />
                <div className="flex items-center space-x-3 ml-3">
                  <span className="text-xs text-black dark:text-gray-400">
                    Studio v 1.0
                  </span>
                  <Icon name="chevron-down" className="w-3 h-3 text-gray-400" />
                  <Icon name="mic" className="w-4 h-4 text-gray-400" />
                  <Icon name="chart" className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
              </div>
            ) : (
              /* Category File Browser Layout */
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-slate-700">
                {/* File Browser Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedCategory}
                  </h3>
                  <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Icon name="chevron-down" className="w-4 h-4" />
                    <span>Sort</span>
                  </button>
                </div>

                {/* File Grid/List */}
              {(savedFiles[selectedCategory]?.length > 0 || sampleFiles[selectedCategory as keyof typeof sampleFiles]?.length > 0) ? (
                <>
                  {selectedCategory === 'Images' && viewMode === 'grid' ? (
                    /* Images Grid View */
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                      {(savedFiles[selectedCategory]?.length > 0 ? savedFiles[selectedCategory] : sampleFiles[selectedCategory as keyof typeof sampleFiles])?.map((file) => (
                      <div key={file.id} className="group cursor-pointer">
                        <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-2">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                            <Icon name="image" className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-2 shadow-lg">
                              <Icon name="x" className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate mb-1">
                          {file.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {file.date}
                        </div>
                      </div>
                    ))}
                    </div>
                  ) : (
                    /* List View for all categories */
                    <div className="space-y-2">
                      {(savedFiles[selectedCategory]?.length > 0 ? savedFiles[selectedCategory] : sampleFiles[selectedCategory as keyof typeof sampleFiles])?.map((file) => (
                      <div key={file.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg cursor-pointer">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                            <Icon 
                              name={file.type as "documents" | "image" | "video" | "audio" | "ai-chip"} 
                              className="w-6 h-6 text-gray-400" 
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {file.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {file.date} • {file.size}
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Icon name="x" className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="documents" className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No {selectedCategory.toLowerCase()} yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Upload files to see them here
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

          {/* Right Grid - Upload Files */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/4 xl:w-1/5 xl:min-w-[320px]">
            {/* Upload Files Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-slate-700 flex flex-col h-fit lg:h-full overflow-hidden">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Upload Files
              </h3>

              {/* Drag & Drop Area */}
              <div 
                className={`border-2 border-dashed rounded-xl p-4 sm:p-6 md:p-8 text-center bg-white dark:bg-slate-800 mb-4 sm:mb-6 cursor-pointer transition-colors ${
                  isDragOver 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-blue-300 dark:border-blue-600 hover:border-blue-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => {
                  console.log('Upload area clicked, fileInputRef:', fileInputRef.current);
                  fileInputRef.current?.click();
                }}
              >
                <Icon
                  name="box"
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 transition-colors ${
                    isDragOver ? 'text-blue-500' : 'text-blue-400'
                  }`}
                />
                <p className={`font-medium text-xs sm:text-sm transition-colors ${
                  isDragOver ? 'text-blue-500' : 'text-blue-400'
                }`}>
                  {isDragOver ? 'Drop files here' : 'Select a file or drag and drop here'}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFileInputChange}
                  className="hidden"
                  accept="*/*"
                />
              </div>

              {/* Uploading Files Section */}
              <div className="mb-4 sm:mb-6 flex-1 overflow-y-auto min-h-[300px] ">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  Uploading Files
                </h4>

                <div className="space-y-2 sm:space-y-3">
                  {uploadFiles.map((file) => (
                    <div key={file.id} className="bg-[#F7F7F7] dark:bg-slate-700 rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-slate-600">
                      <div className="flex space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <Icon
                            name={getFileIcon(file.type) as "documents" | "image" | "video" | "audio"}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between w-full">
                            <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate max-w-[150px] sm:max-w-[200px]" title={file.name}>
                              {file.name}
                            </p>
                            <button 
                              onClick={() => removeFile(file.id)}
                              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                              <Icon name="x" className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mt-[5px]">
                              <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    file.status === 'success' 
                                      ? 'bg-green-500' 
                                      : file.status === 'failed' 
                                      ? 'bg-red-500' 
                                      : 'bg-purple-500'
                                  }`}
                                  style={{ width: `${file.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full mt-1 sm:mt-2">
                            {file.status === 'uploading' ? (
                              <p className="text-xs font-medium text-[#727272] dark:text-white">
                                {formatFileSize(file.size)}
                              </p>
                            ) : (
                              <p className={`text-xs font-medium ${
                                file.status === 'success' 
                                  ? 'text-[#727272] dark:text-white' 
                                  : 'text-red-600 dark:text-red-400'
                              }`}>
                                {file.status === 'success' ? 'Upload Successful' : 'Failed'}
                              </p>
                            )}
                            {file.status === 'failed' ? (
                              <button 
                                onClick={() => retryUpload(file.id)}
                                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xs flex items-center space-x-1"
                              >
                                <Icon name="refresh" className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                <span>Try Again</span>
                              </button>
                            ) : (
                              <p className="text-xs font-medium text-[#727272] dark:text-white">
                                {Math.round(file.progress)}%
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button - Now at bottom */}
              <button 
                onClick={handleSave}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 mt-auto text-xs sm:text-sm"
              >
                Save ({uploadFiles.filter(f => f.status === 'success').length} files)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
