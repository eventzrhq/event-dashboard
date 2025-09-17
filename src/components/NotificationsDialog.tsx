"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

interface NotificationsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "admin" | "event" | "settings" | "general";
  isRead: boolean;
  icon: string;
  color: string;
}

const NotificationsDialog = ({ isOpen, onClose }: NotificationsDialogProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Launch Admin",
      message: "Just see the my new admin!",
      time: "9:30 AM",
      type: "admin",
      isRead: false,
      icon: "user-plus-custom",
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    },
    {
      id: "2",
      title: "Event Today",
      message: "Just a reminder that you...",
      time: "9:15 AM",
      type: "event",
      isRead: false,
      icon: "calendar",
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    },
    {
      id: "3",
      title: "Settings",
      message: "You can customize this...",
      time: "4:36 PM",
      type: "settings",
      isRead: true,
      icon: "settings",
      color: "bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    },
    {
      id: "4",
      title: "Launch Admin",
      message: "Just see the my new admin!",
      time: "9:30 AM",
      type: "admin",
      isRead: true,
      icon: "user-plus-custom",
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
    },
    {
      id: "5",
      title: "Event Today",
      message: "Just a reminder that you...",
      time: "9:15 AM",
      type: "event",
      isRead: true,
      icon: "calendar",
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Notification Panel */}
      <div className="fixed top-16 right-4 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transform transition-all duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
          <div className="flex items-center space-x-2">
            <Icon name="bell-custom" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            {unreadCount > 0 && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full transition-colors"
          >
            <Icon name="x" className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Icon name="bell-custom" className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer relative",
                    !notification.isRead && "bg-blue-50/50 dark:bg-blue-900/10"
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    {/* Icon */}
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      notification.color
                    )}>
                      <Icon 
                        name={notification.icon as "user-plus-custom" | "calendar" | "settings"} 
                        className="w-5 h-5" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={cn(
                          "text-sm font-medium truncate",
                          notification.isRead 
                            ? "text-gray-700 dark:text-gray-300" 
                            : "text-gray-900 dark:text-white"
                        )}>
                          {notification.title}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          {notification.time}
                        </span>
                      </div>
                      <p className={cn(
                        "text-sm mt-1 truncate",
                        notification.isRead 
                          ? "text-gray-500 dark:text-gray-400" 
                          : "text-gray-600 dark:text-gray-300"
                      )}>
                        {notification.message}
                      </p>
                    </div>

                    {/* Unread indicator */}
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    )}

                    {/* Delete button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full transition-all duration-200 flex-shrink-0"
                    >
                      <Icon name="x" className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
            <div className="flex items-center justify-between space-x-3">
              {unreadCount > 0 && (
                <Button
                  onClick={markAllAsRead}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Mark All Read
                </Button>
              )}
              <Button
                onClick={onClose}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
              >
                See All Notifications
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsDialog;
