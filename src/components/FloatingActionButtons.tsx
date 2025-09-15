"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import ChatDrawer from "./ChatDrawer";

const FloatingActionButtons = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div 
      className={`absolute bottom-20 flex flex-col p-1 rounded-full space-y-3 z-[100] transition-all duration-300 shadow-lg border border-gray-200 ${
        isDrawerOpen ? 'right-[416px]' : 'right-6'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >

      {/* Custom Drawer - Always rendered for functionality */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black/80"
            onClick={() => {
              console.log('Backdrop clicked - ignoring');
              // Do nothing - only close button can close
            }}
          />
          
          {/* Drawer Content */}
          <div className="fixed top-0 right-0 z-50 flex h-full w-[400px] flex-col border bg-background shadow-lg">
            <ChatDrawer />
          </div>
        </>
      )}

      {/* Chat Button - Always visible for other purposes */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              onClick={() => {
                console.log('Chat button clicked - other purpose');
                // Add your custom functionality here
                // For example: router.push('/chat'), open notifications, etc.
              }}
              className="w-10 h-10 bg-[#F7F7F7] hover:bg-green-700 text-black rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 z-50"
            >
              <Icon name="message-circle" className="w-6 h-6 drop-shadow-sm" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat & Messages</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Close Button - Only shows when drawer is open */}
      {isDrawerOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                onClick={() => {
                  console.log('Close button clicked, closing drawer');
                  setIsDrawerOpen(false);
                }}
                className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 z-50"
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-sm"
                >
                  <path 
                    opacity="0.4" 
                    d="M12.8334 1.16663L1.16675 12.8333" 
                    stroke="white" 
                    strokeWidth="1.25" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M1.16675 1.16663L12.8334 12.8333" 
                    stroke="white" 
                    strokeWidth="1.25" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Close Chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* ZP Button - Only shows when drawer is closed */}
      {!isDrawerOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                onClick={() => {
                  console.log('ZP button clicked, opening drawer');
                  setIsDrawerOpen(true);
                }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 font-bold text-lg z-50"
              >
                ZP
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>AI Assistant</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default FloatingActionButtons;
