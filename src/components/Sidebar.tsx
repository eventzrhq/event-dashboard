"use client";

import { useState } from "react";
import { Icon, type IconName } from "./icons";

interface MenuItem {
  id: string;
  label: string;
  icon: IconName;
  badge?: number;
  isActive?: boolean;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mainMenuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard",
      isActive: true,
    },
    {
      id: "timeline",
      label: "Timeline",
      icon: "timeline",
    },
    {
      id: "vault",
      label: "Vault",
      icon: "vault",
    },
    {
      id: "crm",
      label: "CRM",
      icon: "crm",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: "calendar",
      badge: 2,
    },
  ];

  const userMenuItems: MenuItem[] = [
    {
      id: "my-zars",
      label: "My ZARs",
      icon: "document",
      badge: 2,
    },
    {
      id: "my-rfps",
      label: "My RFPs",
      icon: "document",
      badge: 1,
    },
    {
      id: "my-assets",
      label: "My Assets",
      icon: "document",
      badge: 3,
    },
    {
      id: "my-profiles",
      label: "My Profiles",
      icon: "crm",
      badge: 3,
    },
  ];

  const helpItems: MenuItem[] = [
    {
      id: "support",
      label: "Support",
      icon: "support",
    },
    {
      id: "settings",
      label: "Setting",
      icon: "settings",
    },
  ];

  const otherItems: MenuItem[] = [
    {
      id: "change-theme",
      label: "Change Theme",
      icon: "theme",
    },
    {
      id: "download-app",
      label: "Download App",
      icon: "download",
    },
  ];

  const socialIcons = [
    { name: "WhatsApp", icon: "💬" },
    { name: "Instagram", icon: "📷" },
    { name: "Facebook", icon: "📘" },
    { name: "X", icon: "🐦" },
    { name: "Telegram", icon: "✈️" },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="relative">
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
          item.isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            item.isActive ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <Icon name={item.icon} />
        </div>
        {!isCollapsed && (
          <>
            <span className="font-medium">{item.label}</span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                {item.badge}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );

  const renderMenuSection = (title: string, items: MenuItem[]) => (
    <div className="mb-6">
      {!isCollapsed && (
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
          {title}
        </h3>
      )}
      <div className="space-y-1">{items.map(renderMenuItem)}</div>
    </div>
  );

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 flex flex-col h-screen transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div
          className="border-b border-gray-200 relative"
          style={
            isCollapsed
              ? { paddingLeft: 18, paddingTop: 24, paddingRight: 18, paddingBottom: 24 }
              : { padding: 24 }
          }
        >
          <div className="flex items-center justify-between">
            {isCollapsed ? (
              <div className="flex justify-center w-8 shrink-0">
                <Icon name="eventzr-logo-collapsed" />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Icon name="eventzr-logo" />
              </div>
            )}
            {!isCollapsed && (
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="bg-blue-500 hover:bg-blue-600 absolute right-0 top-1/2 transform -translate-y-1/2 py-[14px] pl-0.5 text-white rounded-tl rounded-bl  transition-colors flex items-center justify-center"
                >
                <Icon name="chevron-left" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {/* Main Menu */}
        <div className="mb-6">
          <div className="space-y-1">{mainMenuItems.map(renderMenuItem)}</div>
        </div>

        {/* User Menu */}
        {renderMenuSection("User Menu", userMenuItems)}

        {/* Help */}
        {renderMenuSection("Help", helpItems)}

        {/* Others */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
              Others
            </h3>
          )}
          <div className="space-y-1">
            {otherItems.map((item) => (
              <div key={item.id}>
                {renderMenuItem(item)}
                 {item.id === "change-theme" && !isCollapsed && (
                   <div className="px-4 py-2 flex items-center space-x-2">
                     <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                       <Icon name="sun" className="w-4 h-4 text-yellow-600" />
                     </div>
                     <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                       <Icon name="moon" className="w-4 h-4 text-gray-600" />
                     </div>
                   </div>
                 )}
                 {item.id === "download-app" && !isCollapsed && (
                   <div className="px-4 py-2 flex items-center space-x-2">
                     <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                       <span className="text-white text-xs font-bold">A</span>
                     </div>
                     <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                       <Icon name="app-store" className="w-4 h-4 text-white" />
                     </div>
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="p-4 border-t border-gray-200">
        <div
          className={`flex ${
            isCollapsed ? "justify-center" : "justify-center space-x-3"
          }`}
        >
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
              title={social.name}
            >
              <span className="text-sm">{social.icon}</span>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Collapse Button - Outside when collapsed */}
      {isCollapsed && (
        <div className="absolute top-6 -right-4 z-10">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-tr rounded-br py-[14px] pr-0.5 transition-colors flex items-center justify-center shadow-lg"
          >
            <Icon name="chevron-right" className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
