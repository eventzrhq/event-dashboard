"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Notification {
  id: string;
  type: "admin" | "event" | "settings" | "general";
  message: string;
  time: string;
  read: boolean;
}

const NotificationsDropdown = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", type: "admin", message: "New admin user 'John Doe' has been created.", time: "2 hours ago", read: false },
    { id: "2", type: "event", message: "Your meeting with Sarah is scheduled for 3 PM.", time: "3 hours ago", read: false },
    { id: "3", type: "settings", message: "Theme settings updated successfully.", time: "5 hours ago", read: true },
    { id: "4", type: "admin", message: "System update available. Please review changes.", time: "1 day ago", read: false },
    { id: "5", type: "event", message: "Project deadline approaching for 'Event Dashboard'.", time: "2 days ago", read: false },
    { id: "6", type: "general", message: "Welcome to your new dashboard!", time: "3 days ago", read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIconForNotificationType = (type: Notification["type"]) => {
    switch (type) {
      case "admin":
        return <Icon name="user-plus-custom" className="w-4 h-4 text-pink-600 dark:text-pink-400" />;
      case "event":
        return <Icon name="calendar" className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case "settings":
        return <Icon name="settings" className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case "general":
      default:
        return <Icon name="bell-custom" className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Icon
            name="bell-custom"
            className="w-5 h-5 text-gray-600 dark:text-gray-300"
          />
          {/* Notification Badge */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-0" align="end" side="bottom" sideOffset={8}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {unreadCount > 0 ? `${unreadCount} new` : "All caught up!"}
            </span>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMarkAllRead}
                className="text-xs h-6 px-2"
              >
                Mark all read
              </Button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Icon name="bell-custom" className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No notifications</p>
              <p className="text-sm">You&apos;re all caught up!</p>
            </div>
          ) : (
            notifications.slice(0, 6).map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "flex items-start space-x-3 p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors duration-200",
                  !notification.read
                    ? "bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                <div className="flex-shrink-0 mt-1">
                  {getIconForNotificationType(notification.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm leading-relaxed",
                    !notification.read 
                      ? "font-semibold text-gray-900 dark:text-white" 
                      : "text-gray-700 dark:text-gray-300"
                  )}>
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </p>
                      <span className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize",
                        notification.type === "admin" && "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
                        notification.type === "event" && "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
                        notification.type === "settings" && "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400",
                        notification.type === "general" && "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      )}>
                        {notification.type}
                      </span>
                      {!notification.read && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {!notification.read && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkAsRead(notification.id);
                      }}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      title="Mark as read"
                    >
                      <Icon name="check-custom" className="w-3 h-3" />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNotification(notification.id);
                    }}
                    className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    title="Delete notification"
                  >
                    <Icon name="x" className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Showing {Math.min(notifications.length, 6)} of {notifications.length} notifications
              </p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                  <Icon name="settings" className="w-3 h-3 mr-1" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                  View All
                </Button>
              </div>
            </div>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;
