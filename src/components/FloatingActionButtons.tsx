"use client";

import { useRouter } from "next/navigation";
import { Icon } from "./icons";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const FloatingActionButtons = () => {
  const router = useRouter();

  const handleChatClick = () => {
    router.push('/chat');
  };

  return (
    <div className="absolute bottom-20 right-6 flex flex-col space-y-3 z-50">
      {/* Chat Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              size="icon" 
              onClick={handleChatClick}
              className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Icon name="message-circle" className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat with AI Assistant</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
