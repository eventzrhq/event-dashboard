"use client";

import { Icon, type IconName } from "../icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const AppsDropdown = () => {
  const aiApps = [
    {
      id: 1,
      icon: "ai-chip",
      title: "AI Bots",
      description: "Your AI Assistant One Bot, All Conversations.",
      actions: ["Text", "Voice", "Video"],
    },
    {
      id: 2,
      icon: "magic-wand",
      title: "Studio",
      description: "AI-Powered Creativity Made Simple.",
      actions: ["Generative AI", "Reels", "Albums"],
    },
    {
      id: 3,
      icon: "building",
      title: "Webify",
      description: "Simple, Fast, And Powerful Site Creation.",
      actions: ["Website Builder", "Landing Page Builder"],
    },
    {
      id: 4,
      icon: "ai-chip",
      title: "Lead-Gen",
      description: "Simple, Powerful Form Creation.",
      actions: ["Create Smart Forms"],
    },
    {
      id: 5,
      icon: "magic-wand",
      title: "Stream",
      description: "Broadcast Your Moments Instantly.",
      actions: ["Go Live"],
    },
    {
      id: 6,
      icon: "building",
      title: "Beacon",
      description: "Powering Modern Learning.",
      actions: ["Lms Platform"],
    },
  ];

  const standardApps = [
    {
      id: 1,
      icon: "bell-custom",
      title: "Marketing Suite",
      description: "Smarter, Faster Communication",
      actions: ["SMS", "Email", "WhatsApp"],
    },
    {
      id: 2,
      icon: "job-search",
      title: "Jobs",
      description: "Find And Hire Full-Time Talent With Ease",
      actions: ["Full-Time Resource Hiring"],
    },
    {
      id: 3,
      icon: "shopping-bag-custom",
      title: "Bazaar",
      description: "Rent Or Buy Products, Fast & Easy.",
      actions: ["Explore Bazaar"],
    },
    {
      id: 4,
      icon: "crm",
      title: "Marketplace",
      description: "Discovery And Booking Of Professionals",
      actions: ["Hire Professionals"],
    },
  ];

  const getIconComponent = (iconName: string): IconName => {
    const iconMap: { [key: string]: IconName } = {
      "ai-chip": "ai-chip",
      "magic-wand": "magic-wand",
      building: "building",
      "bell-custom": "bell-custom",
      "job-search": "job-search",
      search: "search",
      "shopping-bag-custom": "shopping-bag-custom",
      crm: "crm",
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
      <DropdownMenuContent
        className="w-[700px] p-0 rounded-none shadow-lg"
        align="start"
        sideOffset={30}
      >
        <Tabs defaultValue="ai-apps" className="w-full">
          <div className="  border-b border-gray-200 dark:border-gray-700">
            <TabsList className="grid w-full grid-cols-2 bg-transparent  p-0 h-auto shadow-none">
              <TabsTrigger
                value="ai-apps"
                className="text-sm font-medium pt-4 text-gray-600 dark:text-gray-400 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:rounded-none pb-3 px-0 shadow-none"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="magic-wand" className="w-4 h-4" />
                  <span>AI Apps</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="standard-apps"
                className="text-sm font-medium pt-4 text-gray-600 dark:text-gray-400 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:rounded-none pb-3 px-0 shadow-none"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="phone-app" className="w-4 h-4" />
                  <span>Standard Apps</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ai-apps" className="px-6 pb-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              {aiApps.map((app) => (
                <div
                  key={app.id}
                  className="p-4    bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col ">
                    <div className="flex items-start gap-x-2">
                      <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={getIconComponent(app.icon)}
                          className="w-5 h-5 text-gray-600"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                          <div className="font-semibold text-sm text-gray-900">
                          {app.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-3 leading-relaxed">
                          {app.description}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {app.actions.map((action, index) => (
                            <span
                              key={index}
                              className="text-xs text-gray-700 underline cursor-pointer hover:text-gray-900"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="standard-apps" className="p-4 mt-6">
            <div className="grid grid-cols-2 gap-4">
              {standardApps.map((app) => (
                <div
                  key={app.id}
                  className="p-3  rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col space-y-3">
                     <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={getIconComponent(app.icon)}
                          className="w-5 h-5 text-gray-600"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                          <div className="font-semibold text-sm text-gray-900">
                          {app.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-3 leading-relaxed">
                          {app.description}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {app.actions.map((action, index) => (
                            <span
                              key={index}
                              className="text-xs text-gray-700 underline cursor-pointer hover:text-gray-900"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppsDropdown;
