"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  time: string;
  isOwn: boolean;
  avatar?: string;
}

interface ChatContact {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline: boolean;
}

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState<string>("1");
  const [newMessage, setNewMessage] = useState("");
  const [showMedia, setShowMedia] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  // Mock data for chat contacts
  const contacts: ChatContact[] = [
    {
      id: "1",
      name: "David McMichael",
      role: "Marketing Director",
      lastMessage: "Hey, how's the project going?",
      time: "2:30 PM",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      lastMessage: "The new designs are ready for review",
      time: "1:45 PM",
      unreadCount: 1,
      isOnline: true,
    },
    {
      id: "3",
      name: "Mike Chen",
      role: "Developer",
      lastMessage: "I've fixed the bug in the payment module",
      time: "12:15 PM",
      isOnline: false,
    },
    {
      id: "4",
      name: "Emily Davis",
      role: "Project Manager",
      lastMessage: "Meeting scheduled for tomorrow at 10 AM",
      time: "11:30 AM",
      isOnline: true,
    },
    {
      id: "5",
      name: "Alex Thompson",
      role: "Sales Manager",
      lastMessage: "Great work on the presentation!",
      time: "Yesterday",
      isOnline: false,
    },
  ];

  // Mock data for chat messages
  const messages: ChatMessage[] = [
    {
      id: "1",
      sender: "David McMichael",
      message: "Hey, how's the project going?",
      time: "2:30 PM",
      isOwn: false,
    },
    {
      id: "2",
      sender: "You",
      message: "It's going well! We're on track to finish by the deadline.",
      time: "2:32 PM",
      isOwn: true,
    },
    {
      id: "3",
      sender: "David McMichael",
      message: "That's great to hear. Any blockers I should know about?",
      time: "2:33 PM",
      isOwn: false,
    },
    {
      id: "4",
      sender: "You",
      message: "No major blockers. Just need final approval on the design mockups.",
      time: "2:35 PM",
      isOwn: true,
    },
    {
      id: "5",
      sender: "David McMichael",
      message: "I'll review them this afternoon and get back to you.",
      time: "2:36 PM",
      isOwn: false,
    },
  ];

  const selectedContact = contacts.find(contact => contact.id === selectedChat);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="h-full overflow-hidden bg-gray-50 dark:bg-slate-900">
      {/* Chat Window */}
      <div className="h-full bg-white dark:bg-slate-800 flex overflow-hidden">
        {/* Left Sidebar - Chat List */}
        <div className="w-80 border-r border-gray-200 dark:border-slate-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-slate-700">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Chat App</h2>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Recent Chats */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Recent Chats</h3>
              <div className="space-y-2">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => setSelectedChat(contact.id)}
                    className={cn(
                      "p-3 rounded-lg cursor-pointer transition-colors",
                      selectedChat === contact.id
                        ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                        : "hover:bg-gray-50 dark:hover:bg-slate-700"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                          {getInitials(contact.name)}
                        </div>
                        {contact.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {contact.name}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {contact.time}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {contact.role}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {contact.lastMessage}
                          </p>
                          {contact.unreadCount && (
                            <span className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                              {contact.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                        {getInitials(selectedContact.name)}
                      </div>
                      {selectedContact.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {selectedContact.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedContact.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="phone-app" className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="camera" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isOwn ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-xs lg:max-w-md px-4 py-2 rounded-lg",
                        message.isOwn
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                      )}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p
                        className={cn(
                          "text-xs mt-1",
                          message.isOwn
                            ? "text-blue-100"
                            : "text-gray-500 dark:text-gray-400"
                        )}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="paperclip" className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-full bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2"
                  >
                    <Icon name="send" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Icon name="message-circle" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Select a chat to start messaging
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Choose from your existing conversations or start a new one
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Chat Info */}
        {selectedContact && (
          <div className="w-80 border-l border-gray-200 dark:border-slate-700 flex flex-col">
            {/* Profile */}
            <div className="p-6 text-center border-b border-gray-200 dark:border-slate-700">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-xl mx-auto mb-4">
                {getInitials(selectedContact.name)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedContact.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {selectedContact.role}
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Button variant="ghost" size="sm">
                  <Icon name="phone-app" className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="camera" className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="users3" className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Media & Attachments */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => setShowMedia(!showMedia)}
                    className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">Media (-1)</span>
                    <Icon 
                      name={showMedia ? "chevron-up" : "chevron-down"} 
                      className="w-4 h-4 text-gray-500" 
                    />
                  </button>
                  {showMedia && (
                    <div className="p-3 text-center text-gray-500 dark:text-gray-400">
                      No media files
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setShowAttachments(!showAttachments)}
                    className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">Attachments (0)</span>
                    <Icon 
                      name={showAttachments ? "chevron-up" : "chevron-down"} 
                      className="w-4 h-4 text-gray-500" 
                    />
                  </button>
                  {showAttachments && (
                    <div className="p-3 text-center text-gray-500 dark:text-gray-400">
                      No attachments
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
