"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SettingsPanel = () => {
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
    { name: "AQUA_THEME", color: "bg-cyan-500" },
    { name: "PURPLE_THEME", color: "bg-purple-500" },
    { name: "GREEN_THEME", color: "bg-green-500" },
    { name: "CYAN_THEME", color: "bg-teal-500" },
    { name: "ORANGE_THEME", color: "bg-orange-500" },
  ];

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your dashboard appearance and preferences
          </p>
        </div>

        {/* Content */}
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

          {/* Theme Direction */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Direction</h3>
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

          {/* Theme Colors */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Colors</h3>
            <div className="grid grid-cols-2 gap-2">
              {themeColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setThemeColor(color.name)}
                  className={cn(
                    "p-3 border rounded-lg text-xs font-medium transition-colors flex items-center space-x-2",
                    themeColor === color.name
                      ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  )}
                >
                  <div className={cn("w-3 h-3 rounded-full", color.color)} />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Layout Type */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Layout Type</h3>
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

          {/* Container Option */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Container Option</h3>
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
                onClick={() => setContainer("full")}
                className={cn(
                  "p-3 border rounded-lg text-sm font-medium transition-colors",
                  container === "full"
                    ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                Full
              </button>
            </div>
          </div>

          {/* Sidebar Type */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sidebar Type</h3>
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
                onClick={() => setSidebar("collapse")}
                className={cn(
                  "p-3 border rounded-lg text-sm font-medium transition-colors",
                  sidebar === "collapse"
                    ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                Collapse
              </button>
            </div>
          </div>

          {/* Card With */}
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

          {/* Theme Border Radius */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Border Radius</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Current Value: {borderRadius}px</span>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{borderRadius}</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(borderRadius/24)*100}%, #E5E7EB ${(borderRadius/24)*100}%, #E5E7EB 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>0px</span>
                <span>12px</span>
                <span>24px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
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
  );
};

export default SettingsPanel;
