"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { cn } from "@/lib/utils";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const userData = {
    name: "Mathew Anderson",
    role: "Designer",
    coverImage: "/api/placeholder/800/300",
    profileImage: "/api/placeholder/150/150",
    stats: {
      posts: 2325,
      followers: 1506,
      following: 2659,
    },
    bio: "This board comprises all the plans and backend information to the masteral Olympiad by EasyTheme.",
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
    { id: "stories", label: "Stories", icon: "users3" },
    { id: "reels", label: "Reels", icon: "heart-custom" },
    { id: "posts", label: "Posts", icon: "camera" },
  ];


  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900">
      <div className=" mx-auto pb-10 px-10">
        {/* Cover Photo & Profile Section */}
        <div className="relative">
          {/* Cover Photo with realistic space scene */}
          <div className="h-80 relative overflow-hidden rounded-b-3xl" style={{
            backgroundImage: `linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%), 
                            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='stars' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='30' r='1' fill='white' opacity='0.8'/%3E%3Ccircle cx='80' cy='20' r='0.5' fill='white' opacity='0.6'/%3E%3Ccircle cx='40' cy='70' r='0.8' fill='white' opacity='0.7'/%3E%3Ccircle cx='90' cy='60' r='1.2' fill='white' opacity='0.9'/%3E%3Ccircle cx='10' cy='80' r='0.6' fill='white' opacity='0.5'/%3E%3Ccircle cx='60' cy='40' r='0.4' fill='white' opacity='0.6'/%3E%3Ccircle cx='30' cy='10' r='0.7' fill='white' opacity='0.8'/%3E%3Ccircle cx='70' cy='90' r='0.9' fill='white' opacity='0.7'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23stars)'/%3E%3C/svg%3E")`
          }}>
            {/* Realistic space elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-purple-900/40"></div>
            
            {/* Planet Earth in bottom left */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 opacity-80">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/30 to-green-400/30"></div>
            </div>
            
            {/* Bright star/sun in top left */}
            <div className="absolute top-6 left-8 w-6 h-6 bg-yellow-300 rounded-full shadow-lg opacity-90">
              <div className="absolute inset-0 bg-yellow-200 rounded-full animate-pulse"></div>
          </div>

            {/* Additional stars */}
            <div className="absolute top-12 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
            <div className="absolute top-20 right-32 w-2 h-2 bg-blue-200 rounded-full opacity-70"></div>
            <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-60"></div>
            
            {/* Social icons in top left */}
            <div className="absolute bottom-6 left-6 flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="facebook" className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <Icon name="twitter-x" className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Icon name="instagram" className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Icon name="video" className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Profile Picture - Centered and overlapping */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  {/* Realistic person avatar */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                    MA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="pt-20 pb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {userData.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            {userData.role}
          </p>
          
          {/* Social Icons Row */}
      
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-8">
            {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2",
                    activeTab === tab.id
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:text-blue-600"
                  )}
                >
                {tab.label}
                </button>
              ))}
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Add to Story
          </Button>
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Create Post */}
            <div className="lg:col-span-2">
              {/* Post Creation */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Create Post
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    MA
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
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Icon name="camera" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Icon name="message-circle" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Icon name="camera" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Icon name="document" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Public Post
                  </Button>
                </div>
              </div>

              {/* Posts Timeline */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  {/* Arjun Post 1 */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        AR
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Arjun Raamadaasan</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 Days Ago</p>
                          </div>
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                            <Icon name="more-vertical" className="w-5 h-5 text-gray-400" />
                          </button>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          We&apos;re fully committed to making this the most accessible and results-driven AI course on the planet! This requires us to be there when you need our help. That&apos;s why we&apos;ve put together a team of professional Data Scientists to support you in your journey, meaning you&apos;ll get a response from us within 48 hours maximum.
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
                            <div className="relative z-10 text-center text-white">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                  <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-700"></div>
                            <div className="relative z-10 text-center text-white">
                              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                                <Icon name="video" className="w-6 h-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <span>1204 Like</span>
                            <span>12 Comments</span>
                            <span>1 Share</span>
                          </div>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              AR
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                placeholder="Post your comment"
                                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arjun Post 2 */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        AR
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Arjun Raamadaasan</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                          </div>
                          <span className="text-sm text-gray-500">6h</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          If you quit just because your design looks bad, without pushing through, testing, and learning how to make it not suck, you were never designing in the first place.<br/><br/>
                          Design isn&apos;t about getting it right the first time. It&apos;s about having the eye to see what&apos;s wrong and the grit to fix it.
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <span>1204 Like</span>
                            <span>12 Comments</span>
                            <span>1 Share</span>
                          </div>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              AR
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                placeholder="Post your comment"
                                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ambarish Post */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                        AK
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Ambarish Kumar Sigania</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</p>
                          </div>
                          <span className="text-sm text-gray-500">6h</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          If you quit just because your design looks bad, without pushing through, testing, and learning how to make it not suck, you were never designing in the first place.<br/><br/>
                          Design isn&apos;t about getting it right the first time. It&apos;s about having the eye to see what&apos;s wrong and the grit to fix it.
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <span>1204 Like</span>
                            <span>12 Comments</span>
                            <span>1 Share</span>
                          </div>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              AK
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                placeholder="Post your comment"
                                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Last Arjun Post with large image */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        AR
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Arjun Raamadaasan</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 Days Ago</p>
                          </div>
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                            <Icon name="more-vertical" className="w-5 h-5 text-gray-400" />
                          </button>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          We&apos;re fully committed to making this the most accessible and results-driven AI course on the planet! This requires us to be there when you need our help. That&apos;s why we&apos;ve put together a team of professional Data Scientists to support you in your journey, meaning you&apos;ll get a response from us within 48 hours maximum.
                        </p>
                        <div className="mb-4">
                          <div className="aspect-video bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 via-pink-600/80 to-blue-700/80"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                  <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                                </div>
                                <div className="space-y-2">
                                  <div className="h-2 bg-white/20 rounded w-32 mx-auto"></div>
                                  <div className="h-2 bg-white/20 rounded w-24 mx-auto"></div>
                                  <div className="h-2 bg-white/20 rounded w-28 mx-auto"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <span>1204 Like</span>
                            <span>12 Comments</span>
                            <span>1 Share</span>
                          </div>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              AR
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                placeholder="Post your comment"
                                className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    MA
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{userData.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@victorynamic</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Edit Profile
                  </Button>
                </div>
              </div>

              {/* About Me Section */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  This event combines all the data and backend information to the frontend. Organized by EnvyTheme.
                </p>
              </div>

              {/* Work Section */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Work
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Working as UI/UX Designer
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

              {/* Follower Stats */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2325</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Follower</div>
                      </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1506</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
                </div>
              </div>
            </div>

              {/* Shared Media Section */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Shared Media
                  </h3>
                  <Icon name="x" className="w-5 h-5 text-gray-400 cursor-pointer" />
                </div>

                {/* Attachments */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Attachments
                    </h4>
                    <Icon name="chevron-down" className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <Icon name="document" className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          Very important file.figma
                        </p>
                        <p className="text-xs text-gray-500">7.5 MB 3:22 22, 11:15 AM</p>
                </div>
              </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                      <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
                        <Icon name="document" className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          Some file. scratch
                        </p>
                        <p className="text-xs text-gray-500">7.5 MB 3:22 22, 11:15 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <Icon name="document" className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          List of something .xd
                        </p>
                        <p className="text-xs text-gray-500">7.5 MB 3:22 22, 11:15 AM</p>
                          </div>
                        </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <Icon name="document" className="w-4 h-4 text-orange-600" />
                        </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          Very important file.svg
                        </p>
                        <p className="text-xs text-gray-500">7.5 MB 3:22 22, 11:15 AM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Images
                    </h4>
                    <Icon name="chevron-down" className="w-4 h-4 text-gray-400" />
                        </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-500 rounded-lg overflow-hidden group cursor-pointer">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden group cursor-pointer">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                  </div>
                </div>
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg overflow-hidden group cursor-pointer">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Links
                    </h4>
                    <Icon name="chevron-down" className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                {/* Videos */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Videos
                    </h4>
                    <Icon name="chevron-down" className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
