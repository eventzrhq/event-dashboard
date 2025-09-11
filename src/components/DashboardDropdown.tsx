"use client";

import { Icon, type IconName } from "./icons";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const DashboardDropdown = () => {
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
      icon: "megaphone",
      title: "Marketing Suite",
      description: "Smarter, Faster Communication",
      actions: ["SMS", "Email", "WhatsApp"]
    },
    {
      id: 2,
      icon: "search",
      title: "Jobs",
      description: "Find And Hire Full-Time Talent With Ease",
      actions: ["Full-Time Resource Hiring"]
    },
    {
      id: 3,
      icon: "store",
      title: "Bazaar",
      description: "Rent Or Buy Products, Fast & Easy.",
      actions: ["Explore Bazaar"]
    },
    {
      id: 4,
      icon: "users",
      title: "Marketplace",
      description: "Discovery And Booking Of Professionals",
      actions: ["Hire Professionals"]
    }
  ];

  const getIconComponent = (iconName: string): IconName => {
    const iconMap: { [key: string]: IconName } = {
      "ai-chip": "ai-chip",
      "magic-wand": "magic-wand",
      "building": "building",
      "megaphone": "bell-custom",
      "search": "search",
      "store": "shopping-bag-custom",
      "users": "crm"
    };
    return iconMap[iconName] || "dashboard";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="">
          <Icon
            name="dashboard"
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[600px] p-0" align="start">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Applications
          </h3>
        </div>
        
        <Tabs defaultValue="ai-apps" className="w-full">
          <div className="px-4 pt-2">
            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="ai-apps" 
                className="text-sm font-medium text-gray-600 dark:text-gray-400 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:rounded-none pb-2 px-0"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="magic-wand" className="w-4 h-4" />
                  <span>AI Apps</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="standard-apps" 
                className="text-sm font-medium text-gray-600 dark:text-gray-400 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:rounded-none pb-2 px-0"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="briefcase" className="w-4 h-4" />
                  <span>Standard Apps</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ai-apps" className="px-4 pb-4 mt-4">
            <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {aiApps.map((app) => (
                <DropdownMenuItem key={app.id} className="p-3 cursor-pointer rounded-lg">
                  <div className="flex flex-col space-y-2 w-full">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon 
                          name={getIconComponent(app.icon)} 
                          className="w-4 h-4 text-blue-600 dark:text-blue-400" 
                        />
                      </div>
                      <div className="font-medium text-sm text-gray-900 dark:text-white">
                        {app.title}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {app.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {app.actions.map((action, index) => (
                        <span
                          key={index}
                          className="text-xs text-blue-600 dark:text-blue-400 underline cursor-pointer hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="standard-apps" className="px-4 pb-4 mt-4">
            <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {standardApps.map((app) => (
                <DropdownMenuItem key={app.id} className="p-3 cursor-pointer rounded-lg">
                  <div className="flex flex-col space-y-2 w-full">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon 
                          name={getIconComponent(app.icon)} 
                          className="w-4 h-4 text-gray-600 dark:text-gray-400" 
                        />
                      </div>
                      <div className="font-medium text-sm text-gray-900 dark:text-white">
                        {app.title}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {app.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {app.actions.map((action, index) => (
                        <span
                          key={index}
                          className="text-xs text-blue-600 dark:text-blue-400 underline cursor-pointer hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardDropdown;
