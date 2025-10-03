"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { GridIcon } from "../icons/GridIcon";
import { ListIcon } from "../icons/ListIcon";
// @ts-expect-error - react-gauge-chart doesn't have TypeScript definitions
import GaugeChart from "react-gauge-chart";

interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'failed';
  progress: number;
  error?: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  showImages?: boolean;
}

// Random AI responses
const aiResponses = [
  "I've created some beautiful designs for you! Check out these options and let me know which one you prefer.",
  "Here are some amazing results based on your request! I've generated multiple variations for you to choose from.",
  "Great idea! I've prepared several design concepts that match your vision. Take a look!",
  "I've curated these stunning options for you. Each one has a unique style - let me know what you think!",
  "Here are some creative interpretations of your request. Feel free to ask for modifications!",
  "I've generated these personalized results just for you! Which style catches your eye?",
  "Perfect! Here are some design variations that should work well for your needs.",
  "I've put together these options based on your requirements. Let me know if you'd like any adjustments!"
];

const Vault = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Files");
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [aiQuery, setAiQuery] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [showImageCustomization, setShowImageCustomization] = useState(false);
  const [imageSettings, setImageSettings] = useState({
    numberOfImages: '03',
    resolution: '512X768',
    width: 512,
    height: 768,
    quality: 'HD',
    effects: 'All',
    realPhoto: false,
    smoothing: true,
  });
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

  // Calculate total storage used
  const totalStorageUsed = storageBreakdown.reduce((sum, item) => sum + item.value, 0);
  const storagePercentage = Math.round((totalStorageUsed / 10) * 100); // Assuming 10GB total capacity
  const storagePercent = totalStorageUsed / 10; // Decimal value for gauge chart (0.76 for 76%)

  const studioSuggestions = [
    { 
      title: "Statue of Liberty", 
      description: "New York, USA",
      gradient: "from-cyan-400 via-blue-400 to-blue-500"
    },
    { 
      title: "Taj Mahal", 
      description: "Agra, India",
      gradient: "from-teal-400 via-cyan-400 to-blue-400"
    },
    { 
      title: "Eiffel Tower", 
      description: "Paris, France",
      gradient: "from-purple-400 via-pink-400 to-red-400"
    },
    { 
      title: "Great Wall", 
      description: "Beijing, China",
      gradient: "from-orange-400 via-amber-400 to-yellow-400"
    },
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

  // Generate random AI response
  const generateAIResponse = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * aiResponses.length);
    return aiResponses[randomIndex];
  }, []);

  // Handle sending chat message
  const handleSendMessage = useCallback(() => {
    if (!aiQuery.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: aiQuery,
      timestamp: new Date(),
      showImages: false
    };

    setChatMessages(prev => [...prev, userMessage]);
    setAiQuery("");
    setIsTyping(true);

    // Simulate AI typing and response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(),
        timestamp: new Date(),
        showImages: true
      };

      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      setSelectedImageIndex(0);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  }, [aiQuery, generateAIResponse]);

  // Handle Enter key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Scroll to bottom when new messages arrive
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

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

            {/* Import Options, View Toggle, Refresh, and Buy More Storage */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap gap-1 sm:gap-2 w-full md:w-auto justify-start md:justify-end">
                  {/* View Mode Toggle - Show for all categories except All Files */}
                  {selectedCategory !== 'All Files' && (
                   <div className="flex items-center bg-white rounded-full p-1 border border-gray-200">
                     <button
                       onClick={() => setViewMode('list')}
                       className={`p-2 rounded-full transition-colors cursor-pointer ${
                         viewMode === 'list' 
                           ? 'bg-[#EFF4FF] text-blue-600' 
                           : 'text-gray-500 hover:text-gray-700'
                       }`}
                     >
                       <ListIcon className="w-4 h-4" />
                     </button>
                     <button
                       onClick={() => setViewMode('grid')}
                       className={`p-2 rounded-full transition-colors cursor-pointer ${
                         viewMode === 'grid' 
                           ? 'bg-[#EFF4FF] text-blue-600' 
                           : 'text-gray-500 hover:text-gray-700'
                       }`}
                     >
                       <GridIcon className="w-4 h-4" />
                     </button>
                   </div>
                 )}
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
                  Used {storagePercentage}%
                </span>
              </div>

              {/* Grid Layout: Gauge Chart on left, Legend on right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Left side - Gauge Chart */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-lg mx-auto">
                    <GaugeChart
                      id="storage-gauge-chart"
                      nrOfLevels={storageBreakdown.length}
                      colors={storageBreakdown.map(item => item.color)}
                      arcWidth={0.2}
                      percent={storagePercent}
                      textColor="#000000"
                      hideText={true}
                      formatTextValue={(value: string) => `${value}%`}
                      needleColor="#374151"
                      needleBaseColor="#374151"
                      arcPadding={0.0}
                    />
                  </div>

                  {/* Storage info */}
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 w-full mt-4 px-4">
                    <div className="text-center border-r-2 pr-8 border-gray-200 dark:border-gray-700">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">10 GB</div>
                      <div className="text-xs">Total Space</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                        {totalStorageUsed.toFixed(1)} GB
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

            {/* Studio V 1.1 Card - AI Chat Interface */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 col-span-1 sm:col-span-2 lg:col-span-3 border border-blue-200 dark:border-blue-700 flex flex-col" style={{ minHeight: '600px' }}>
              {/* Header with Studio logo and version badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Studio
                  </h3>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                    V 1.1
                  </span>
                </div>
                </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-6 px-2">
                {chatMessages.map((message) => (
                  <React.Fragment key={message.id}>
                    {message.type === 'user' ? (
                      /* User Message */
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] shadow-sm">
                          <p className="text-sm font-medium">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* AI Response */
                      <div className="flex justify-start">
                        <div className="w-full max-w-full">
                          {/* AI Header */}
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white text-sm font-bold">AI</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              Studio Assistant
                            </span>
                  </div>

                          {message.showImages && (
                            <>
                              {/* Results Grid - Image Cards */}
                              <div className="grid grid-cols-3 gap-4 mb-4">
                      {studioSuggestions.slice(0, 3).map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedImageIndex(index);
                            setShowImageCustomization(true);
                          }}
                          className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square ${
                            selectedImageIndex === index ? 'ring-4 ring-blue-500 ring-offset-2' : ''
                          }`}
                        >
                          {/* Image with gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${suggestion.gradient}`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            {/* Decorative elements to simulate landmarks */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white p-4">
                                <div className="w-16 h-16 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Radio Button - Left Side */}
                          <div className="absolute top-3 left-3 z-10">
                            <div 
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                selectedImageIndex === index 
                                  ? 'bg-blue-500 border-blue-500' 
                                  : 'bg-white/90 backdrop-blur-sm border-white'
                              }`}
                            >
                              {selectedImageIndex === index && (
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                          
                          {/* Action buttons overlay - Center */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex space-x-2">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle refresh action
                                }}
                                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                              >
                                <Icon name="refresh" className="w-5 h-5 text-gray-700" />
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle plus action
                                }}
                                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                              >
                                <Icon name="plus" className="w-5 h-5 text-gray-700" />
                          </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Description Text */}
                    <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 border border-gray-200 dark:border-slate-600">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Modern hero section for a travel website. A vibrant collage of world monuments: Eiffel Tower, Taj Mahal, Colosseum, Statue of Liberty with natural wonders (beach, snowy greenery, water fall)
                      </p>
                      
                      {/* Action Icons */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                        <div className="flex items-center space-x-3">
                          <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Icon name="refresh" className="w-4 h-4" />
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg>
                          </button>
                </div>
              </div>
            </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Bar */}
              <div className="bg-white dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm">
                <div className="flex items-center px-4 py-3">
                  <button className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg transition-colors mr-3">
                    <span>Studio v 1.1</span>
                    <Icon name="chevron-down" className="w-3 h-3" />
                  </button>
                  <input
                    type="text"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Studio for anything..."
                    className="flex-1 bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none"
                  />
                  <div className="flex items-center space-x-2 ml-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                      <Icon name="mic" className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                      <Icon name="plus" className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 text-sm font-medium transition-colors ml-2"
                    >
                      Send
                    </button>
                  </div>
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
                  {viewMode === 'grid' ? (
                    /* Grid View for all categories */
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                      {(savedFiles[selectedCategory]?.length > 0 ? savedFiles[selectedCategory] : sampleFiles[selectedCategory as keyof typeof sampleFiles])?.map((file) => (
                      <div key={file.id} className="group cursor-pointer">
                        <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-2">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                            <Icon 
                              name={file.type as "documents" | "image" | "video" | "audio" | "ai-chip"} 
                              className="w-8 h-8 text-gray-400" 
                            />
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

          {/* Right Grid - Upload Files / Image Customization */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-1/4 xl:w-1/5 xl:min-w-[320px]">
            {showImageCustomization ? (
              /* Image Customization Panel */
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 flex flex-col overflow-y-auto max-h-[calc(100vh-200px)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Image Settings
                  </h3>
                  <button 
                    onClick={() => setShowImageCustomization(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* No of Images */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      No of Images
                    </label>
                    <div className="flex gap-2">
                      {['01', '02', '03', '04', 'Custom'].map((num) => (
                        <button
                          key={num}
                          onClick={() => setImageSettings(prev => ({ ...prev, numberOfImages: num }))}
                          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            imageSettings.numberOfImages === num
                              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Resolution */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Image Resolution
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {['512X512', '512X768', '768X768'].map((res) => (
                        <button
                          key={res}
                          onClick={() => setImageSettings(prev => ({ ...prev, resolution: res }))}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            imageSettings.resolution === res
                              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-500'
                              : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {res}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['1080X768', '1080X1080', '2064X768'].map((res) => (
                        <button
                          key={res}
                          onClick={() => setImageSettings(prev => ({ ...prev, resolution: res }))}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            imageSettings.resolution === res
                              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-500'
                              : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {res}
                        </button>
                      ))}
                    </div>

                    {/* Width Slider */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600 dark:text-gray-400">W</span>
                        <span className="text-xs font-medium text-gray-900 dark:text-white">{imageSettings.width} PX</span>
                      </div>
                      <input
                        type="range"
                        min="256"
                        max="2048"
                        value={imageSettings.width}
                        onChange={(e) => setImageSettings(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                      />
                    </div>

                    {/* Height Slider */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600 dark:text-gray-400">H</span>
                        <span className="text-xs font-medium text-gray-900 dark:text-white">{imageSettings.height} PX</span>
                      </div>
                      <input
                        type="range"
                        min="256"
                        max="2048"
                        value={imageSettings.height}
                        onChange={(e) => setImageSettings(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                      />
                    </div>
                  </div>

                  {/* Image Quality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Image Quality
                    </label>
                    <div className="flex gap-2">
                      {['Standard', 'HD', 'Genius'].map((quality) => (
                        <button
                          key={quality}
                          onClick={() => setImageSettings(prev => ({ ...prev, quality }))}
                          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            imageSettings.quality === quality
                              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-500'
                              : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {quality}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Effects */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Effects
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['All', 'Earthy', 'Vibrant', 'SoftHue'].map((effect) => (
                        <button
                          key={effect}
                          onClick={() => setImageSettings(prev => ({ ...prev, effects: effect }))}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            imageSettings.effects === effect
                              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-500'
                              : 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {effect}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Real Photo Toggle */}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Real Photo</span>
                    <button
                      onClick={() => setImageSettings(prev => ({ ...prev, realPhoto: !prev.realPhoto }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        imageSettings.realPhoto ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          imageSettings.realPhoto ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Smoothing Toggle */}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Smoothing</span>
                    <button
                      onClick={() => setImageSettings(prev => ({ ...prev, smoothing: !prev.smoothing }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        imageSettings.smoothing ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          imageSettings.smoothing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setImageSettings({
                        numberOfImages: '03',
                        resolution: '512X768',
                        width: 512,
                        height: 768,
                        quality: 'HD',
                        effects: 'All',
                        realPhoto: false,
                        smoothing: true,
                      })}
                      className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => {
                        console.log('Saved settings:', imageSettings);
                        setShowImageCustomization(false);
                        alert('Image settings saved successfully!');
                      }}
                      className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Upload Files Card */
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
