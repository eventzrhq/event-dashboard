"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import AppsDropdown from "./AppsDropdown";

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  onNavigate?: (page: string) => void;
}

const Header = ({ onMobileMenuToggle, onNavigate }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-700/50 backdrop-blur-sm">
      {/* Main Header */}
      <div className="flex items-center gap-x-2 sm:gap-x-4 justify-between py-3 px-3 sm:px-6">
        {/* Left Side - Mobile Menu + Logo and Navigation */}
        <div className="flex items-center gap-x-2">
          {/* Mobile Menu Button - Only visible on mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden touch-manipulation active:scale-95 transition-transform duration-150"
            onClick={onMobileMenuToggle}
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="home"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AppsDropdown />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Apps</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-[300px] sm:max-w-[500px] lg:max-w-[764px] mx-2 sm:mx-4 lg:mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="search" className="w-4 h-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 sm:pr-16 py-2 rounded-full bg-[#F7F7F7] dark:bg-slate-700/50 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent border-slate-600/30 text-sm sm:text-base"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <kbd className="hidden sm:block px-2 py-1 text-xs sm:text-base font-semibold text-black dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600">
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.264 12C2.51733 12 1.92 11.7813 1.472 11.344C1.03467 10.9067 0.816 10.32 0.816 9.584C0.816 8.80533 1.04533 8.20267 1.504 7.776C1.97333 7.33867 2.66133 7.12 3.568 7.12H4.512V5.36H3.568C2.66133 5.36 1.97333 5.14667 1.504 4.72C1.04533 4.28267 0.816 3.67467 0.816 2.896C0.816 2.16 1.03467 1.57333 1.472 1.136C1.92 0.698666 2.51733 0.48 3.264 0.48C3.86133 0.48 4.33067 0.591999 4.672 0.815999C5.024 1.04 5.26933 1.33867 5.408 1.712C5.55733 2.08533 5.632 2.496 5.632 2.944V4.272H7.392V2.944C7.392 2.496 7.46133 2.08533 7.6 1.712C7.74933 1.33867 7.99467 1.04 8.336 0.815999C8.688 0.591999 9.16267 0.48 9.76 0.48C10.5067 0.48 11.0987 0.698666 11.536 1.136C11.984 1.57333 12.208 2.16 12.208 2.896C12.208 3.67467 11.9787 4.28267 11.52 4.72C11.0613 5.14667 10.3733 5.36 9.456 5.36H8.512V7.12H9.456C10.3733 7.12 11.0613 7.33867 11.52 7.776C11.9787 8.20267 12.208 8.80533 12.208 9.584C12.208 10.32 11.984 10.9067 11.536 11.344C11.0987 11.7813 10.5067 12 9.76 12C9.16267 12 8.688 11.888 8.336 11.664C7.99467 11.44 7.74933 11.1413 7.6 10.768C7.46133 10.3947 7.392 9.984 7.392 9.536V8.208H5.632V9.536C5.632 9.984 5.55733 10.3947 5.408 10.768C5.26933 11.1413 5.024 11.44 4.672 11.664C4.33067 11.888 3.86133 12 3.264 12ZM8.512 2.912V4.272H9.456C10.0213 4.272 10.432 4.16 10.688 3.936C10.944 3.70133 11.072 3.35467 11.072 2.896C11.072 2.42667 10.944 2.09067 10.688 1.888C10.4427 1.68533 10.1333 1.584 9.76 1.584C9.344 1.584 9.02933 1.70667 8.816 1.952C8.61333 2.18667 8.512 2.50667 8.512 2.912ZM3.568 4.272H4.512V2.912C4.512 2.50667 4.40533 2.18667 4.192 1.952C3.98933 1.70667 3.68 1.584 3.264 1.584C2.89067 1.584 2.576 1.68533 2.32 1.888C2.07467 2.09067 1.952 2.42667 1.952 2.896C1.952 3.35467 2.08 3.70133 2.336 3.936C2.592 4.16 3.00267 4.272 3.568 4.272ZM5.632 7.12H7.392V5.36H5.632V7.12ZM3.264 10.896C3.68 10.896 3.98933 10.7787 4.192 10.544C4.40533 10.2987 4.512 9.97333 4.512 9.568V8.208H3.568C3.00267 8.208 2.592 8.32533 2.336 8.56C2.08 8.784 1.952 9.12533 1.952 9.584C1.952 10.0533 2.07467 10.3893 2.32 10.592C2.576 10.7947 2.89067 10.896 3.264 10.896ZM8.512 9.568C8.512 9.97333 8.61333 10.2987 8.816 10.544C9.02933 10.7787 9.344 10.896 9.76 10.896C10.1333 10.896 10.4427 10.7947 10.688 10.592C10.944 10.3893 11.072 10.0533 11.072 9.584C11.072 9.12533 10.944 8.784 10.688 8.56C10.432 8.32533 10.0213 8.208 9.456 8.208H8.512V9.568ZM25.027 12H23.579L19.907 6.968L18.955 8.112V12H17.835V0.799999H18.955V6.368L23.619 0.799999H25.083L20.643 6.088L25.027 12Z" fill="black"/>
                </svg>
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Side - User Actions */}
        <div className="flex items-center gap-x-2 sm:gap-x-5">
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex border-r pr-3 sm:pr-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="user-plus-custom"
                      className="text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add User</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="bell-custom"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className=""
                    onClick={() => onNavigate?.("chat")}
                  >
                    <Icon
                      name="box"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="heart-custom"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Favorites</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="shopping-bag-custom"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shopping Bag</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex md:hidden">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="">
                    <Icon
                      name="bell-custom"
                      className="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Settings Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => onNavigate?.("settings")}
                  className=""
                >
                  <Icon
                    name="settings"
                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* User Profile */}
          <div className="flex items-center bg-[#FAFAFA] space-x-1 sm:space-x-2 pl-1 sm:pl-2 p-1 sm:p-2 rounded-full">
            <div className="relative">
              <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <Badge className="absolute -top-1 -right-1 size-2 sm:size-3 p-0 bg-white border-0">
                <Icon name="check-custom" className="size-2 sm:size-3 text-white" />
              </Badge>
              <div className="absolute bottom-[1px] left-[2px] sm:left-[3px] rounded-full bg-green-400 size-1 sm:size-1.5 flex items-center justify-center animate-pulse">
                <div className="absolute rounded-full bg-green-400 size-1 sm:size-1.5 animate-ping"></div>
              </div>
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
              Praveen
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-1">
                    <Icon
                      name="chevron-down"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>User Menu</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
