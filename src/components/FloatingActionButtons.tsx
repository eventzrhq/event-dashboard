"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./icons";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SideDrawer } from "./ui/side-drawer";
import ChatDrawer from "./ChatDrawer";

const FloatingActionButtons = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={`absolute bottom-20 flex flex-col space-y-3 z-[100] transition-all duration-300 ${
      isDrawerOpen ? 'right-[416px]' : 'right-6'
    }`}>
      {/* Chat Button - Only shows when drawer is closed */}
      {!isDrawerOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={() => setIsDrawerOpen(true)}
                className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 z-50"
              >
                <Icon name="message-circle" className="w-6 h-6 drop-shadow-sm" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Chat with AI Assistant</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* SideDrawer - Always rendered for functionality */}
      <SideDrawer open={isDrawerOpen} onOpenChange={() => {}}>
        {/* Chat Drawer */}
        <ChatDrawer />
      </SideDrawer>

      {/* Close Button - Only shows when drawer is open */}
      {isDrawerOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon" 
                onClick={() => setIsDrawerOpen(false)}
                className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 z-50"
              >
                <Icon name="chevron-left" className="w-6 h-6 drop-shadow-sm" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Close Chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* ZP Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="icon" 
              onClick={() => router.push('/')}
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-200 font-bold text-lg z-50"
            >
              ZP
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Quick Actions</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingActionButtons;
