"use client";

import { useState } from "react";
import { Icon } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
  avatar?: string;
}

const ChatDrawer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "user",
      content: "Hi Eventer Bot, can you help me create an event page?",
      timestamp: "10:30 AM",
      avatar: "/avatars/claudia.jpg",
    },
    {
      id: "2",
      sender: "user",
      content: "Would love to see some design ideas 😊",
      timestamp: "10:30 AM",
      avatar: "/avatars/claudia.jpg",
    },
    {
      id: "3",
      sender: "ai",
      content: "Of course! 🚀",
      timestamp: "10:12 AM",
    },
    {
      id: "4",
      sender: "ai",
      content:
        "Here are some event landing page templates I prepared for you today",
      timestamp: "10:12 AM",
    },
    {
      id: "5",
      sender: "user",
      content: "Great 🔥 That's a nice design idea 🥰",
      timestamp: "10:30 AM",
      avatar: "/avatars/claudia.jpg",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "/avatars/claudia.jpg",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full sm:w-80 md:w-96 p-0 h-full flex flex-col">
      <div className="flex flex-row items-center justify-between  p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-none tracking-tight text-gray-900">
              Zaphyr AI Assistant
            </h2>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>
      
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-140px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-xs ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              } gap-x-2`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {message.sender === "ai" ? (
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-sm">🤖</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      CM
                    </span>
                  </div>
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`flex flex-col ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Template Showcase (for AI message) */}
        <div className="flex justify-start">
          <div className="flex space-x-2 max-w-xs">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-sm">🤖</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-3">
              <div className="grid grid-cols-2 gap-2">
                {/* Template Previews */}
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 text-white">
                  <h4 className="text-xs font-semibold">Summer Festival</h4>
                  <p className="text-xs opacity-90">Beach theme</p>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-2 text-white">
                  <h4 className="text-xs font-semibold">Music Event</h4>
                  <p className="text-xs opacity-90">Dark theme</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-2 text-white">
                  <h4 className="text-xs font-semibold">Cover Story</h4>
                  <p className="text-xs opacity-90">Editorial</p>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 text-white">
                  <h4 className="text-xs font-semibold">Conference</h4>
                  <p className="text-xs opacity-90">Professional</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Event landing page templates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="  p-4 bg-white">
        <div className="flex items-center gap-x-2">
          {/* Attachment and Voice buttons */}

          {/* Message Input with Send Button */}
          <div className="flex-1 relative">
            <Input
              placeholder="Write your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="rounded-full bg-[#F7F7F7] pr-12"
            />
            <Button
              onClick={handleSendMessage}
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0  flex items-center justify-center rounded-full   text-white"
            >
              <Icon name="send" className="w-4 h-4" />
            </Button>
          </div>
          <div className="size-10 rounded-full bg-[#F7F7F7] flex items-center justify-center"><Icon name="paperclip" className="w-4 h-4" /></div>
          <div className="size-10 rounded-full bg-[#F7F7F7] flex items-center justify-center"><Icon name="mic" className="w-4 h-4" /></div>
        </div>

        {/* Quick Access Icons */}
        {/* <div className="flex items-center space-x-2 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 rounded-full"
            >
              <Icon name="mic" className="w-3 h-3" />
            </Button>
            <span className="text-xs text-gray-500">IN</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ChatDrawer;
