"use client";

import { useState, useEffect } from "react";
import { Icon, type IconName, ThemeIcon, DownloadIcon } from "./icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";


interface MenuItem {
  id: string;
  label: string;
  icon?: IconName;
  badge?: number;
  isActive?: boolean;
  children?: MenuItem[];
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>("my-assets");
  const [openChildAccordion, setOpenChildAccordion] = useState<string | undefined>(
    undefined
  );
  const [selectedItem, setSelectedItem] = useState<string>("my-assets");
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [selectedSubChild, setSelectedSubChild] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
      icon: "my-zars",
      children: [
        {
          id: "my-zars-1",
          label: "zar 1 Praveen",
        },
        {
          id: "my-zars-2",
          label: "zar 2 Uday",
        },
        {
          id: "my-zars-3",
          label: "zar 3 Vijay",
        },
      ],
      badge: 2,
    },
    {
      id: "my-rfps",
      label: "My RFPs",
      icon: "my-rfps",
      badge: 1,
      children: [
        {
          id: "my-rfps-1",
          label: "RFP 1 - Event Planning",
        },
        {
          id: "my-rfps-2",
          label: "RFP 2 - Venue Management",
        },
        {
          id: "my-rfps-3",
          label: "RFP 3 - Catering Services",
        },
        {
          id: "my-rfps-4",
          label: "RFP 4 - Audio Visual",
        },
      ],
    },
    {
      id: "my-assets",
      label: "My Assets",
      icon: "vault",
      badge: 3,
      children: [
        {
          id: "events",
          label: "Events",
          icon: "calendar",
          children: [
            { id: "conferences", label: "Conferences" },
            { id: "workshops", label: "Workshops" },
            { id: "seminars", label: "Seminars" },
            { id: "webinars", label: "Webinars" },
            { id: "trade-shows", label: "Trade Shows" },
            { id: "exhibitions", label: "Exhibitions" },
          ],
        },
        {
          id: "tours",
          label: "Tours",
          icon: "timeline",
          children: [
            { id: "city-tours", label: "City Tours" },
            { id: "cultural-tours", label: "Cultural Tours" },
            { id: "adventure-tours", label: "Adventure Tours" },
            { id: "food-tours", label: "Food Tours" },
            { id: "historical-tours", label: "Historical Tours" },
            { id: "nature-tours", label: "Nature Tours" },
          ],
        },
        {
          id: "campaigns",
          label: "Campaigns",
          icon: "dashboard",
          children: [
            { id: "marketing-campaigns", label: "Marketing Campaigns" },
            { id: "social-media", label: "Social Media" },
            { id: "email-campaigns", label: "Email Campaigns" },
            { id: "promotional", label: "Promotional" },
            { id: "brand-awareness", label: "Brand Awareness" },
            { id: "lead-generation", label: "Lead Generation" },
          ],
        },
        {
          id: "venues",
          label: "Venues",
          icon: "vault",
          children: [
            { id: "conference-rooms", label: "Conference Rooms" },
            { id: "hotels", label: "Hotels" },
            { id: "restaurants", label: "Restaurants" },
            { id: "outdoor-venues", label: "Outdoor Venues" },
            { id: "convention-centers", label: "Convention Centers" },
            { id: "entertainment-venues", label: "Entertainment Venues" },
          ],
        },
        {
          id: "brands",
          label: "Brands",
          icon: "crm",
          children: [
            { id: "partner-brands", label: "Partner Brands" },
            { id: "sponsor-brands", label: "Sponsor Brands" },
            { id: "vendor-brands", label: "Vendor Brands" },
            { id: "client-brands", label: "Client Brands" },
            { id: "premium-brands", label: "Premium Brands" },
            { id: "local-brands", label: "Local Brands" },
          ],
        },
        {
          id: "destinations",
          label: "Destinations",
          icon: "timeline",
          children: [
            { id: "domestic", label: "Domestic" },
            { id: "international", label: "International" },
            { id: "popular-destinations", label: "Popular Destinations" },
            { id: "emerging-destinations", label: "Emerging Destinations" },
            { id: "business-destinations", label: "Business Destinations" },
            { id: "leisure-destinations", label: "Leisure Destinations" },
          ],
        },
      ],
    },
    {
      id: "my-profiles",
      label: "My Profiles",
      icon: "crm",
      badge: 3,
      children: [
        {
          id: "my-profiles-1",
          label: "Profile 1 - Admin",
        },
        {
          id: "my-profiles-2",
          label: "Profile 2 - Manager",
        },
        {
          id: "my-profiles-3",
          label: "Profile 3 - Coordinator",
        },
        {
          id: "my-profiles-4",
          label: "Profile 4 - Assistant",
        },
        {
          id: "my-profiles-5",
          label: "Profile 5 - Guest",
        },
      ],
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
    { name: "WhatsApp", icon: "whatsapp", url: "https://wa.me/your-whatsapp-number" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/your-instagram" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/your-facebook" },
    { name: "X", icon: "twitter-x", url: "https://x.com/your-twitter" },
    { name: "Telegram", icon: "telegram", url: "https://t.me/your-telegram" },
  ];

  const renderMenuItem = (item: MenuItem) => {
    const isSelected = selectedItem === item.id;
    
    return (
      <div 
        key={item.id} 
        className={`relative group ${isCollapsed ? "pl-0" : "pl-6"}`}
        onClick={() => setSelectedItem(item.id)}
      >
        {/* Blue highlight bar - shows on hover or when selected */}
        <div
          className={`absolute -left-4 top-0 bottom-0 w-1 bg-blue-500 transition-opacity duration-200 ${
            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        <div
          className={`flex items-center cursor-pointer transition-all duration-200 ${
            isCollapsed ? "justify-center py-2" : "py-2"
          } ${isSelected ? " text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}
        >
          <div className={`${isCollapsed ? "flex justify-center px-2" : "flex items-center justify-between px-2 w-full"}`}>
            <div className="flex items-center space-x-3">
              {item.icon && (
                <Icon
                  name={item.icon}
                  className={`transition-all w-5 h-5 duration-200 ${
                    isSelected
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                />
              )}

              {!isCollapsed && (
                <span
                  className={`transition-all text-sm font-normal duration-200 ${
                    isSelected
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>

            {!isCollapsed && item.badge && (
              <span className="bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMenuSection = (title: string, items: MenuItem[]) => (
    <div className="py-2 px-4">
      {!isCollapsed && (
        <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 px-5 py-2 uppercase tracking-wider">
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
        className={`bg-white dark:bg-slate-800/50 border-r border-gray-200 dark:border-slate-700/50 flex flex-col h-screen transition-all duration-300 backdrop-blur-sm ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div
          className="border-b border-gray-200 dark:border-gray-700 relative"
          style={
            isCollapsed
              ? {
                  paddingLeft: 18,
                  paddingTop: 24,
                  paddingRight: 18,
                  paddingBottom: 24,
                }
              : { padding: 24 }
          }
        >
          <div className="flex items-center justify-between">
            {isCollapsed ? (
              <div className="flex justify-center size-8 shrink-0">
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
          <div className="py-2 px-4">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 px-5 py-2 uppercase tracking-wider">
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
                            className={`absolute -left-4 top-0 bottom-0 w-1 bg-blue-500 transition-opacity duration-200 ${
                              item.isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            } ${
                              selectedItem === item.id   ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                           <AccordionTrigger
                             className={`py-2 hover:no-underline [&>svg]:hidden group ${
                               isCollapsed ? "justify-center" : "justify-start"
                             } ${
                               selectedItem === item.id ? " text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
                             } hover:text-blue-600 transition-all duration-200`}
                             onClick={() => setSelectedItem(item.id)}
                           >
                            {!isCollapsed && (
                              <div className="flex items-center space-x-3 px-2 w-full">
                                {openAccordion === item.id ? (
                                  <ChevronUpIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                                ) : (
                                  <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                                )}
                                {item.icon && (
                                  <Icon
                                    name={item.icon}
                                    className={`w-5 h-5 transition-all duration-200 ${
                                      selectedItem === item.id
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                    }`}
                                  />
                                )}
                                <span
                                  className={`text-sm font-normal transition-all duration-200 ${
                                    selectedItem === item.id
                                      ? "text-blue-600 dark:text-blue-400"
                                      : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
                                  <div
                                    className="cursor-pointer pointer-events-auto"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      alert("Add Assets");
                                      console.log(
                                        "Plus clicked for",
                                        item.label
                                      );
                                    }}
                                  >
                                    <Icon name="user-plus-custom" className="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" />
                                  </div>
                                </div>
                              </div>
                            )}
                             {isCollapsed && (
                               <div className="flex flex-col items-center">
                                 {item.icon && (
                                   <Icon
                                     name={item.icon}
                                     className={`w-5 h-5 ${
                                       selectedItem === item.id
                                         ? "text-blue-600 dark:text-blue-400"
                                         : "text-gray-600 dark:text-gray-300"
                                     }`}
                                   />
                                 )}
                                 {item.badge && (
                                   <span className="bg-red-500 text-white text-xs rounded-full size-4 flex items-center justify-center mt-1">
                                     {item.badge}
                                   </span>
                                 )}
                               </div>
                             )}
                          </AccordionTrigger>
                        </div>
                         <AccordionContent className="pb-0">
                           <div className="">
                             {item.children.map((child) => (
                               <div
                                 key={child.id}
                                 className="border-l border-gray-300 ml-8"
                               >
                                 {item.id === "my-assets" ? (
                                   <Accordion
                                     type="single"
                                     collapsible
                                     className="w-full"
                                     value={openChildAccordion}
                                     onValueChange={setOpenChildAccordion}
                                   >
                                     <AccordionItem
                                       value={child.id}
                                       className="border-none"
                                     >
                                       <AccordionTrigger
                                         className={`py-2 hover:no-underline [&>svg]:hidden group ${
                                           isCollapsed
                                             ? "justify-center"
                                             : "justify-start"
                                         } ${
                                           selectedChild === child.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
                                         } hover:text-blue-600 transition-all duration-200`}
                                         onClick={() => setSelectedChild(child.id)}
                                       >
                                         {!isCollapsed && (
                                           <div className="flex items-center space-x-2 px-8 w-full">
                                             {openChildAccordion === child.id ? (
                                               <ChevronUpIcon className="text-gray-500 dark:text-gray-400 size-4 shrink-0 transition-transform duration-200" />
                                             ) : (
                                               <ChevronDownIcon className="text-gray-500 dark:text-gray-400 size-4 shrink-0 transition-transform duration-200" />
                                             )}
                                             <span className="text-sm font-normal text-gray-700 dark:text-gray-200">
                                               {child.label}
                                             </span>
                                           </div>
                                         )}
                                         {isCollapsed &&
                                           (openChildAccordion === child.id ? (
                                             <ChevronUpIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                                           ) : (
                                             <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform duration-200" />
                                           ))}
                                       </AccordionTrigger>
                                       <AccordionContent className="pb-0">
                                         <div className="">
                                           {child.children?.map((subChild) => (
                                             <div
                                               key={subChild.id}
                                               className="relative group"
                                             >
                                               <div
                                                 className={`flex items-center cursor-pointer transition-all ml-10  duration-200 border-l border-gray-300 ${
                                                   isCollapsed
                                                     ? "justify-center py-1"
                                                     : "py-2"
                                                 } ${
                                                   selectedSubChild === subChild.id
                                                     ? " text-blue-600 dark:text-blue-400"
                                                     : "text-gray-700 dark:text-gray-200"
                                                 }`}
                                                 onClick={() => setSelectedSubChild(subChild.id)}
                                               >
                                                 {!isCollapsed && (
                                                   <div className="flex items-center space-x-3 px-10 w-full">
                                                     <span
                                                       className={`transition-all text-sm font-normal duration-200 ${
                                                         selectedSubChild === subChild.id
                                                           ? "text-blue-600 dark:text-blue-400"
                                                           : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                                       }`}
                                                     >
                                                       {subChild.label}
                                                     </span>
                                                   </div>
                                                 )}
                                               </div>
                                             </div>
                                           ))}
                                         </div>
                                       </AccordionContent>
                                     </AccordionItem>
                                   </Accordion>
                                 ) : (
                                   <div
                                     className={`flex items-center cursor-pointer transition-all duration-200 group ${
                                       isCollapsed
                                         ? "justify-center py-2"
                                         : "py-2"
                                     } ${
                                       selectedChild === child.id
                                         ? " text-blue-600 dark:text-blue-400"
                                         : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                                     }`}
                                     onClick={() => setSelectedChild(child.id)}
                                   >
                                     {!isCollapsed && (
                                       <div className="flex items-center space-x-3 px-8 w-full">
                                         <span
                                           className={`transition-all text-sm font-normal duration-200 ${
                                             selectedChild === child.id
                                               ? "text-blue-600 dark:text-blue-400"
                                               : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                           }`}
                                         >
                                           {child.label}
                                         </span>
                                       </div>
                                     )}
                                   </div>
                                 )}
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
          <div className="py-2 px-4">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3 px-4">
                Others
              </h3>
            )}
            <div >
              {otherItems.map((item) => (
                <div key={item.id}>
                  {item.id === "change-theme" ? (
                    // Custom theme toggle component
                    <div className="group relative">
                      <div
                        className={`flex items-center cursor-pointer transition-all duration-200 ${
                          isCollapsed ? "justify-center py-2" : "py-2"
                        }`}
                      >
                        <div className={`${isCollapsed ? "flex justify-center pl-0" : "flex items-center gap-x-2 pl-6 w-full"}`}>
                          {isCollapsed ? (
                            <ThemeIcon
                              className={`transition-all w-5 h-5 duration-200 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400`}
                            />
                          ) : (
                            <>
                              <ThemeIcon
                                className={`transition-all w-5 h-5 duration-200 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400`}
                              />
                              <div className="flex items-center justify-between w-full ">
                                <span className="text-sm font-normal text-gray-700 dark:text-gray-200 flex-1 whitespace-nowrap">Change Theme</span>
                                <div className="flex items-center">
                                  <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                                      isDarkMode ? "bg-blue-500" : "bg-gray-200"
                                    }`}
                                  >
                                    <span
                                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                        isDarkMode ? "translate-x-7" : "translate-x-1"
                                      }`}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-between px-1">
                                      <Icon name="sun" className={`w-3 h-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
                                      <Icon name="moon" className={`w-3 h-3 ${isDarkMode ? "text-white" : "text-gray-400"}`} />
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : item.id === "download-app" ? (
                    // Download App component
                    <div className="group relative">
                      <div
                        className={`flex items-center cursor-pointer transition-all duration-200 ${
                          isCollapsed ? "justify-center py-2" : "py-2"
                        }`}
                      >
                        <div className={`${isCollapsed ? "flex justify-center pl-0" : "flex items-center gap-x-2 pl-6 w-full"}`}>
                          {isCollapsed ? (
                            <DownloadIcon
                              className={`transition-all w-5 h-5 duration-200 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400`}
                            />
                          ) : (
                            <>
                              <DownloadIcon
                                className={`transition-all w-5 h-5 duration-200 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400`}
                              />
                              <span className="text-sm font-normal text-gray-700 dark:text-gray-200 flex-1 whitespace-nowrap">Download App</span>
                              <div className="flex items-center space-x-2">
                                <Icon name="app-store" className="size-6"/>
                                <Icon name="play-store" className="size-6"/>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    renderMenuItem(item)
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div
            className={`flex ${
              isCollapsed ? "justify-center" : "justify-center "
            }`}
          >
              {(isCollapsed ? socialIcons.slice(0, 1) : socialIcons).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" p-2 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-full"
                  title={social.name}
                >
                  <Icon name={social.icon as IconName} className=" text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white transition-colors" />
                </a>
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
