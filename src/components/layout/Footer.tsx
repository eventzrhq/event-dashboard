"use client";

import { Icon, type IconName } from "../icons";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const Footer = () => {
  const leftIcons = [
    { name: "Home2", icon: "home2" },
    { name: "Users3", icon: "users3" },
    { name: "Briefcase", icon: "briefcase" },
    { name: "News", icon: "news" },
    { name: "Call", icon: "call" },
  ];

  const footerIcons = [
    { name: "User Switch", icon: "user-switch" },
    { name: "Clock", icon: "clock" },
    { name: "Dollar", icon: "dollar" },
    { name: "IN", icon: "text", isText: true },
    { name: "Global", icon: "global" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800/50 text-white py-2 sm:py-[13px] px-2 sm:px-4 backdrop-blur-sm border-t border-slate-700/50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Left - Icons */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {/* Mobile: Show only first 3 icons */}
          <div className="flex sm:hidden items-center space-x-2">
            {leftIcons.slice(0, 3).map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-1 hover:bg-gray-700 dark:hover:bg-gray-800 touch-target"
                    >
                      <Icon name={item.icon as IconName} className="w-4 h-4 text-black hover:text-white transition-colors" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          
          {/* Desktop: Show all icons */}
          <div className="hidden sm:flex items-center space-x-4">
            {leftIcons.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-2 hover:bg-gray-700 dark:hover:bg-gray-800"
                    >
                      <Icon name={item.icon as IconName} className="w-5 h-5 text-black hover:text-white transition-colors" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Center - Copyright */}
        <div className="text-xs sm:text-sm text-black dark:text-gray-400 text-center">
          © 2025 Eventzr | Made with ❤️ in India
        </div>

        {/* Right - Additional Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile: Show only first 2 icons */}
          <div className="flex sm:hidden items-center space-x-2">
            {footerIcons.slice(0, 2).map((item, index) => (
              item.isText ? (
                <span key={index} className="text-xs text-black dark:text-gray-400">
                  {item.name}
                </span>
              ) : (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="p-1 hover:bg-gray-700 dark:hover:bg-gray-800 touch-target"
                      >
                        <Icon name={item.icon as IconName} className="w-4 h-4 text-black hover:text-white transition-colors" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            ))}
          </div>
          
          {/* Desktop: Show all icons */}
          <div className="hidden sm:flex items-center space-x-4">
            {footerIcons.map((item, index) => (
              item.isText ? (
                <span key={index} className="text-sm text-black dark:text-gray-400">
                  {item.name}
                </span>
              ) : (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="p-2 hover:bg-gray-700 dark:hover:bg-gray-800"
                      >
                        <Icon name={item.icon as IconName} className="w-5 h-5 text-black hover:text-white transition-colors" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
