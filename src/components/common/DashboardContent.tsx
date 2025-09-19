"use client";

import { useState } from "react";
import { Icon, type IconName } from "../icons";
import { Button } from "../ui/button";

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState("ai-apps");

  const aiApps = [
    {
      id: 1,
      icon: "ai-chip",
      title: "AI Bots",
      description: "Your AI Assistant One Bot, All Conversations.",
      actions: ["Text", "Voice", "Video"]
    },
    {
      id: 2,
      icon: "magic-wand",
      title: "Studio",
      description: "AI-Powered Creativity Made Simple.",
      actions: ["Generative AI", "Reels", "Albums"]
    },
    {
      id: 3,
      icon: "building",
      title: "Webify",
      description: "Simple, Fast, And Powerful Site Creation.",
      actions: ["Website Builder", "Landing Page Builder"]
    },
    {
      id: 4,
      icon: "ai-chip",
      title: "Lead-Gen",
      description: "Simple, Powerful Form Creation.",
      actions: ["Create Smart Forms"]
    },
    {
      id: 5,
      icon: "magic-wand",
      title: "Stream",
      description: "Broadcast Your Moments Instantly.",
      actions: ["Go Live"]
    },
    {
      id: 6,
      icon: "building",
      title: "Beacon",
      description: "Powering Modern Learning.",
      actions: ["Lms Platform"]
    }
  ];

  const standardApps = [
    {
      id: 1,
      icon: "calendar",
      title: "Calendar",
      description: "Manage your events and schedules.",
      actions: ["View Calendar", "Create Event"]
    },
    {
      id: 2,
      icon: "document",
      title: "Documents",
      description: "Create and manage your documents.",
      actions: ["New Document", "Templates"]
    },
    {
      id: 3,
      icon: "users",
      title: "Team",
      description: "Collaborate with your team members.",
      actions: ["Invite Members", "Manage Roles"]
    }
  ];

  const getIconComponent = (iconName: string): IconName => {
    // Map icon names to actual icon components
    const iconMap: { [key: string]: IconName } = {
      "ai-chip": "ai-chip",
      "magic-wand": "magic-wand",
      "building": "building",
      "calendar": "calendar",
      "users": "crm"
    };
    return iconMap[iconName] || "dashboard";
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Applications
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from our collection of AI-powered and standard applications
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-black dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("ai-apps")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "ai-apps"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                AI Apps
              </button>
              <button
                onClick={() => setActiveTab("standard-apps")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "standard-apps"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Standard Apps
              </button>
            </nav>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "ai-apps" ? aiApps : standardApps).map((app) => (
            <div
              key={app.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              {/* App Icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <Icon 
                    name={getIconComponent(app.icon)} 
                    className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {app.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {app.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                {app.actions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
