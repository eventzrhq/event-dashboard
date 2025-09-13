"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "./icons";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SideDrawer, SideDrawerTrigger } from "./ui/side-drawer";
import ChatDrawer from "./ChatDrawer";

const FloatingActionButtons = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={`absolute bottom-20 flex flex-col space-y-3 z-50 transition-all duration-300 ${
      isDrawerOpen ? 'right-[416px]' : 'right-6'
    }`}>
      {/* Chat Button */}
      <SideDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SideDrawerTrigger asChild>
                <Button 
                  size="icon" 
                  className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Icon name="message-circle" className="w-6 h-6" />
                </Button>
              </SideDrawerTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Chat with AI Assistant</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        {/* Chat Drawer */}
        <ChatDrawer />
      </SideDrawer>

      {/* ZP Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="icon" 
              onClick={() => router.push('/')}
              className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-bold text-lg"
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
