"use client";

import { useState } from "react";
import { Icon, type IconName, PlusIcon } from "./icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: IconName;
  badge?: number;
  isActive?: boolean;
  children?: MenuItem[];
}


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>("my-assets");

  const mainMenuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard",
     
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
      icon: "vault",
      badge: 3,
      isActive: true,
      children: [
        {
          id: "events",
          label: "Events",
          icon: "calendar",
        },
        {
          id: "agendas",
          label: "Agendas",
          icon: "document",
          isActive: true,
        },
        {
          id: "ticketing",
          label: "Ticketing",
          icon: "document",
        },
      ],
    },
    {
      id: "tours",
      label: "Tours",
      icon: "timeline",
    },
    {
      id: "campaigns",
      label: "Campaigns",
      icon: "dashboard",
    },
    {
      id: "venues",
      label: "Venues",
      icon: "vault",
    },
    {
      id: "brands",
      label: "Brands",
      icon: "crm",
    },
    {
      id: "destinations",
      label: "Destinations",
      icon: "timeline",
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
    <div key={item.id} className="relative group px-6">
      {/* Blue highlight bar - shows on hover or when active */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-opacity duration-200 ${
          item.isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
      
      <div
        className={`flex items-center cursor-pointer  transition-all duration-200 ${
          isCollapsed 
            ? "justify-center py-3" 
            : "space-x-2 px-4 py-3"
        } ${
          item.isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700"
        }`}
      >
        <Icon 
          name={item.icon} 
          className={`transition-all w-5 h-5 duration-200 ${
            item.isActive 
              ? "text-blue-600" 
              : "text-gray-600 group-hover:text-blue-600"
          }`}
        />
     
        {!isCollapsed && (
          <>
            <span 
              className={`transition-all text-sm font-normal duration-200 ${
                item.isActive 
                  ? "text-blue-600" 
                  : "text-black group-hover:text-blue-600"
              }`}
            >
              {item.label}
            </span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center ml-auto">
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
        <h3 className="text-xs font-semibold text-black px-6 py-2 uppercase tracking-wider">
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
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Main Menu */}
        {renderMenuSection("Main Menu", mainMenuItems)}
        {/* <div className="mb-6">
          <div className="space-y-1">{mainMenuItems.map(renderMenuItem)}</div>
          
        </div> */}

        {/* User Menu with Individual Accordions */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-black px-6 py-2 uppercase tracking-wider">
              User Menu
            </h3>
          )}
          <div className="space-y-1">
            {userMenuItems.map((item) => {
              if (item.children) {
                return (
                  <Accordion 
                    key={item.id} 
                    type="single" 
                    collapsible 
                    className="w-full"
                    value={openAccordion}
                    onValueChange={setOpenAccordion}
                  >
                    <AccordionItem value={item.id} className="border-none">
                      <div className="relative group">
                        {/* Blue highlight bar - shows on hover or when active */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-opacity duration-200 ${
                            item.isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                        <AccordionTrigger 
                          className={`px-6 py-3 hover:no-underline [&>svg]:hidden ${
                            isCollapsed ? "justify-center" : "justify-start"
                          } ${
                            item.isActive
                              ? " text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                        {!isCollapsed && (
                          <div className="flex items-center space-x-2 w-full">
                            {openAccordion === item.id ? (
                              <ChevronUpIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                            ) : (
                              <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                            )}
                            <Icon 
                              name={item.icon} 
                              className={`w-5 h-5 ${
                                item.isActive ? "text-blue-600" : "text-gray-600"
                              }`}
                            />
                            <span 
                              className={`text-sm font-normal ${
                                item.isActive ? "text-blue-600" : "text-black"
                              }`}
                            >
                              {item.label}
                            </span>
                             <div className="flex gap-2 ml-auto">
                              {item.badge && (
                                <span className="bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center">
                                  {item.badge}
                                </span>
                              )}
                              <PlusIcon className="w-4 h-4 text-gray-400" />
                             </div>
                       
                          </div>
                        )}
                        {isCollapsed && (
                          <Icon 
                            name={item.icon} 
                            className={`w-5 h-5 ${
                              item.isActive ? "text-blue-600" : "text-gray-600"
                            }`}
                          />
                        )}
                      </AccordionTrigger>
                      </div>
                      <AccordionContent className="pb-0">
                        <div className=" ">
                          {item.children.map((child) => (
                            <div key={child.id} className="relative group ">
                              <div
                                className={`flex items-center cursor-pointer transition-all duration-200 border-l ml-8 border-gray-300 ${
                                  isCollapsed 
                                    ? "justify-center py-2 px-6" 
                                    : "space-x-2 px-8 py-2"
                                } ${
                                  child.isActive
                                    ? " text-blue-600"
                                    : "text-gray-700"
                                }`}
                              >
                                {/* {!isCollapsed && (
                                  <div className="w-4 h-4 flex items-center justify-center">
                                    <div className="w-0.5 h-4 bg-gray-300"></div>
                                  </div>
                                )} */}
                                <Icon 
                                  name={child.icon} 
                                  className={`transition-all w-5 h-5 duration-200 ${
                                    child.isActive 
                                      ? "text-blue-600" 
                                      : "text-gray-600 group-hover:text-blue-600"
                                  }`}
                                />
                                {!isCollapsed && (
                                  <span 
                                    className={`transition-all text-sm font-normal duration-200 ${
                                      child.isActive 
                                        ? "text-blue-600" 
                                        : "text-black group-hover:text-blue-600"
                                    }`}
                                  >
                                    {child.label}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              } else {
                return renderMenuItem(item);
              }
            })}
          </div>
        </div>

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
