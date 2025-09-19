"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { cn } from "@/lib/utils";

interface SettingsPanelProps {
  onClose?: () => void;
}

const SettingsPanel = ({ onClose }: SettingsPanelProps = {}) => {
  console.log("SettingsPanel rendered!"); // Debug log
  const [theme, setTheme] = useState("light");
  const [direction, setDirection] = useState("ltr");
  const [themeColor, setThemeColor] = useState("BLUE_THEME");
  const [layout, setLayout] = useState("vertical");
  const [container, setContainer] = useState("boxed");
  const [sidebar, setSidebar] = useState("full");
  const [cardStyle, setCardStyle] = useState("border");
  const [borderRadius, setBorderRadius] = useState(12);

  const themeColors = [
    { name: "BLUE_THEME", color: "bg-blue-500" },
    { name: "PURPLE_THEME", color: "bg-purple-500" },
    { name: "GREEN_THEME", color: "bg-green-500" },
    { name: "CYAN_THEME", color: "bg-teal-500" },
    { name: "ORANGE_THEME", color: "bg-orange-500" },
  ];

  return (
    <>
      {/* Full screen overlay with maximum z-index */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        style={{ 
          zIndex: 2147483647, // Maximum z-index value
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onClick={onClose}
      />
      
      {/* Settings Panel */}
      <div 
        className="fixed bg-white dark:bg-slate-800 shadow-2xl overflow-y-auto"
        style={{ 
          zIndex: 2147483647,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '32rem', // 512px
          transform: 'translateX(0)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Customize your dashboard appearance and preferences
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <Icon name="x" className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Theme Option */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Option</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    theme === "light"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    theme === "dark"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Dark
                </button>
              </div>
            </div>

            {/* Theme Colors */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Colors</h3>
              <div className="flex flex-wrap gap-2">
                {themeColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setThemeColor(color.name)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all",
                      color.color,
                      themeColor === color.name
                        ? "border-gray-900 dark:border-white scale-110"
                        : "border-gray-300 dark:border-slate-600 hover:scale-105"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Layout Direction */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Layout Direction</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDirection("ltr")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    direction === "ltr"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  LTR
                </button>
                <button
                  onClick={() => setDirection("rtl")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    direction === "rtl"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  RTL
                </button>
              </div>
            </div>

            {/* Layout Type */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Layout</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setLayout("vertical")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    layout === "vertical"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Vertical
                </button>
                <button
                  onClick={() => setLayout("horizontal")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    layout === "horizontal"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Horizontal
                </button>
              </div>
            </div>

            {/* Container */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Container</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setContainer("boxed")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    container === "boxed"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Boxed
                </button>
                <button
                  onClick={() => setContainer("fluid")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    container === "fluid"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Fluid
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sidebar</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSidebar("full")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    sidebar === "full"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Full
                </button>
                <button
                  onClick={() => setSidebar("mini")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    sidebar === "mini"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Mini
                </button>
              </div>
            </div>

            {/* Card Style */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Card Style</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setCardStyle("border")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    cardStyle === "border"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Border
                </button>
                <button
                  onClick={() => setCardStyle("shadow")}
                  className={cn(
                    "p-3 border rounded-lg text-sm font-medium transition-colors",
                    cardStyle === "shadow"
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  Shadow
                </button>
              </div>
            </div>

            {/* Border Radius */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Border Radius</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>0px</span>
                  <span>12px</span>
                  <span>24px</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-2 mt-8 flex justify-end space-x-4">
              <Button
                variant="outline"
                className="px-6"
              >
                Reset to Default
              </Button>
              <Button
                onClick={() => {
                  // Apply settings logic would go here
                  console.log("Settings applied:", { theme, direction, themeColor, layout, container, sidebar, cardStyle, borderRadius });
                }}
                className="bg-blue-600 hover:bg-blue-700 px-6"
              >
                Apply Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;