"use client";

import { Icon } from "./icons";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

interface UserProfileDropdownProps {
  onNavigate?: (page: string) => void;
}

const UserProfileDropdown = ({ onNavigate }: UserProfileDropdownProps) => {
  const handleSignOut = () => {
    // Handle sign out logic here
    console.log("User signed out");
  };

  const menuItems = [
    {
      id: "profile",
      label: "My Profile",
      icon: "user-plus-custom" as const,
      onClick: () => onNavigate?.("timeline")
    },
    {
      id: "subscription", 
      label: "My Subscription",
      icon: "calendar" as const,
      onClick: () => console.log("Navigate to subscription")
    },
    {
      id: "invoice",
      label: "My Invoice", 
      icon: "document" as const,
      badge: "4",
      onClick: () => console.log("Navigate to invoices")
    },
    {
      id: "settings",
      label: "Account Settings",
      icon: "settings" as const,
      onClick: () => console.log("Navigate to account settings")
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center bg-[#FAFAFA] space-x-1 sm:space-x-2 pl-1 sm:pl-2 p-1 sm:p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
          <div className="relative">
            <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
              />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
            <Badge className="absolute -top-1 -right-1 size-2 sm:size-3 p-0 bg-white border-0">
              <Icon name="check-custom" className="size-2 sm:size-3 text-white" />
            </Badge>
            <div className="absolute bottom-[1px] left-[2px] sm:left-[3px] rounded-full bg-green-400 size-1 sm:size-1.5 flex items-center justify-center animate-pulse">
              <div className="absolute rounded-full bg-green-400 size-1 sm:size-1.5 animate-ping"></div>
            </div>
          </div>
          <span className="hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
            David McMichael
          </span>
          <Icon
            name="chevron-down"
            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300"
          />
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-80 p-0" align="end" side="bottom" sideOffset={8}>
        {/* User Info Header */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
                  alt="Profile"
                />
                <AvatarFallback className="bg-blue-600 text-white font-semibold">DM</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-800"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">David McMichael</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  Pro
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">info@MatDash.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-600 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                  <Icon 
                    name={item.icon} 
                    className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" 
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <DropdownMenuSeparator className="my-1" />

        {/* Sign Out */}
        <div className="p-2">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
              <Icon 
                name="x" 
                className="w-4 h-4 text-red-600 dark:text-red-400" 
              />
            </div>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">
              Sign Out
            </span>
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
