"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [postType, setPostType] = useState("post");

  // Mock user data
  const userData = {
    name: "David McMichael",
    role: "Designer",
    coverImage: "/api/placeholder/800/300",
    profileImage: "/api/placeholder/150/150",
    stats: {
      posts: 938,
      followers: 3586,
      following: 2659,
    },
    bio: "Hello, I am David McMichael. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      education: "Sir, P P Institute Of Science",
      email: "xyzjonathan@gmail.com",
      website: "www.xyz.com",
      location: "Newyork, USA - 100001",
    },
    photos: Array.from({ length: 9 }, (_, i) => `/api/placeholder/200/200?${i + 1}`),
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "user-plus-custom" },
    { id: "followers", label: "Followers", icon: "users3" },
    { id: "friends", label: "Friends", icon: "heart-custom" },
    { id: "gallery", label: "Gallery", icon: "camera" },
  ];

  const postTypes = [
    { id: "photos", label: "Photos / Video", icon: "camera" },
    { id: "article", label: "Article", icon: "document" },
    { id: "post", label: "Post", icon: "edit" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Cover Photo & Profile Section */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 right-4">
              <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Icon name="camera" className="w-4 h-4 mr-2" />
                Change Cover
              </Button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-16 lg:-mt-12">
              {/* Profile Picture & Basic Info */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-6">
                <div className="relative mb-4 lg:mb-0">
                  <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      DM
                    </div>
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
                    <Icon name="camera" className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-center lg:text-left lg:mb-4">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    {userData.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {userData.role}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 lg:mt-0">
                <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="plus" className="w-4 h-4 mr-2" />
                  Add To Story
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-6 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {userData.stats.posts.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Posts</div>
              </div>
              <div className="text-center border-x border-gray-200 dark:border-slate-700">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {userData.stats.followers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {userData.stats.following.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-1">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  <Icon name={tab.icon as "user-plus-custom" | "users3" | "heart-custom" | "camera"} className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Introduction */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Introduction
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {userData.bio}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="building" className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {userData.details.education}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="message-circle" className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {userData.details.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="global" className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {userData.details.website}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="home" className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {userData.details.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Photos Section */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Photos
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {userData.photos.slice(0, 9).map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform duration-200">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Posts/Content */}
            <div className="lg:col-span-2">
              {/* Post Creation */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    DM
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="What's on your mind?"
                      className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Post Type Selection */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {postTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setPostType(type.id)}
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          postType === type.id
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700"
                        )}
                      >
                        <Icon name={type.icon as "camera" | "document" | "edit"} className="w-4 h-4" />
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Post
                  </Button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  {/* Sample Posts */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        DM
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">David McMichael</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Just finished working on a new design project! Really excited to share it with everyone. 
                          The client was thrilled with the results. 🎨✨
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="heart-custom" className="w-4 h-4" />
                            <span>24 Likes</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="message-circle" className="w-4 h-4" />
                            <span>8 Comments</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="send" className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        DM
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">David McMichael</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">1 day ago</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Working on some amazing new features for our dashboard. The user experience is going to be incredible!
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center">
                            <Icon name="camera" className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
                            <Icon name="camera" className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="heart-custom" className="w-4 h-4" />
                            <span>42 Likes</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="message-circle" className="w-4 h-4" />
                            <span>15 Comments</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                            <Icon name="send" className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "followers" && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Followers ({userData.stats.followers.toLocaleString()})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                          U{i + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">User {i + 1}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Designer</p>
                        </div>
                        <Button size="sm" variant="outline">Follow</Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "friends" && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Friends ({userData.stats.following.toLocaleString()})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          F{i + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">Friend {i + 1}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Icon name="check-custom" className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-200">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
