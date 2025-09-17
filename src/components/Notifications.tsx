"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Notification {
  id: string;
  type: "admin" | "event" | "settings" | "general";
  message: string;
  time: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", type: "admin", message: "New admin user 'John Doe' has been created.", time: "2 hours ago", read: false },
    { id: "2", type: "event", message: "Your meeting with Sarah is scheduled for 3 PM.", time: "3 hours ago", read: false },
    { id: "3", type: "settings", message: "Theme settings updated successfully.", time: "5 hours ago", read: true },
    { id: "4", type: "admin", message: "System update available. Please review changes.", time: "1 day ago", read: false },
    { id: "5", type: "event", message: "Project deadline approaching for 'Event Dashboard'.", time: "2 days ago", read: false },
    { id: "6", type: "general", message: "Welcome to your new dashboard!", time: "3 days ago", read: true },
    { id: "7", type: "admin", message: "New user registration from client@example.com", time: "4 days ago", read: true },
    { id: "8", type: "event", message: "Reminder: Team standup at 10 AM tomorrow", time: "5 days ago", read: false },
    { id: "9", type: "settings", message: "Dashboard layout preferences saved", time: "1 week ago", read: true },
    { id: "10", type: "general", message: "Monthly report is now available for download", time: "1 week ago", read: false },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => !n.read);

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
        return <Icon name="user-plus-custom" className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
      case "event":
        return <Icon name="calendar" className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "settings":
        return <Icon name="settings" className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case "general":
      default:
        return <Icon name="bell-custom" className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getNotificationTypeColor = (type: Notification["type"]) => {
    switch (type) {
      case "admin":
        return "bg-pink-50 border-pink-200 dark:bg-pink-900/10 dark:border-pink-800/30";
      case "event":
        return "bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-800/30";
      case "settings":
        return "bg-teal-50 border-teal-200 dark:bg-teal-900/10 dark:border-teal-800/30";
      case "general":
      default:
        return "bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800/30";
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Notifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with your latest notifications ({unreadCount > 0 ? `${unreadCount} unread` : "All caught up!"})
          </p>
        </div>

        {/* Filter and Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  filter === "all"
                    ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-600/50"
                )}
              >
                All ({notifications.length})
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  filter === "unread"
                    ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-slate-600/50"
                )}
              >
                Unread ({unreadCount})
              </button>
            </div>
            
            {unreadCount > 0 && (
              <Button
                onClick={handleMarkAllRead}
                variant="outline"
                className="text-sm"
              >
                <Icon name="check-custom" className="w-4 h-4 mr-2" />
                Mark All Read
              </Button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-12 border border-gray-200 dark:border-slate-700 shadow-sm text-center">
              <Icon name="bell-custom" className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {filter === "all" ? "No notifications" : "No unread notifications"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {filter === "all" 
                  ? "You don't have any notifications yet." 
                  : "You're all caught up! Check back later for new updates."
                }
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "bg-white dark:bg-slate-800 rounded-xl p-6 border shadow-sm transition-all duration-200 hover:shadow-md",
                  !notification.read
                    ? getNotificationTypeColor(notification.type)
                    : "border-gray-200 dark:border-slate-700"
                )}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIconForNotificationType(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={cn(
                          "text-sm leading-relaxed",
                          !notification.read 
                            ? "font-semibold text-gray-900 dark:text-white" 
                            : "text-gray-700 dark:text-gray-300"
                        )}>
                          {notification.message}
                        </p>
                        <div className="flex items-center mt-2 space-x-4">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {notification.time}
                          </p>
                          <span className={cn(
                            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize",
                            notification.type === "admin" && "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
                            notification.type === "event" && "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
                            notification.type === "settings" && "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400",
                            notification.type === "general" && "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                          )}>
                            {notification.type}
                          </span>
                          {!notification.read && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {!notification.read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            title="Mark as read"
                          >
                            <Icon name="check-custom" className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteNotification(notification.id)}
                          className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                          title="Delete notification"
                        >
                          <Icon name="x" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {notifications.length > 0 && (
          <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredNotifications.length} of {notifications.length} notifications
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" className="text-sm">
                  <Icon name="settings" className="w-4 h-4 mr-2" />
                  Notification Settings
                </Button>
                <Button variant="outline" className="text-sm">
                  <Icon name="download" className="w-4 h-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
