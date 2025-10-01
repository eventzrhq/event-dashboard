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
  showTemplates?: boolean;
}

// Random AI responses
const aiResponses = [
  "Of course! 🚀 Let me help you with that.",
  "Great question! Here are some options for you.",
  "I'd be happy to assist! Here's what I found.",
  "Sure thing! Let me show you some ideas.",
  "Absolutely! I've prepared some suggestions for you.",
  "I can definitely help with that! Check these out.",
  "Here are some templates I prepared for you today",
  "Perfect! Let me create something special for you."
];

const ChatDrawer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "/avatars/claudia.jpg",
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      // Simulate AI response after a delay
      setTimeout(() => {
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          content: randomResponse,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          showTemplates: Math.random() > 0.5, // 50% chance to show templates
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1500); // Random delay 1-2.5 seconds
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEditMessage = (messageId: string, content: string) => {
    setEditingMessageId(messageId);
    setEditedContent(content);
  };

  const handleSaveEdit = () => {
    if (editedContent.trim() && editingMessageId) {
      // Update the edited message
      const updatedMessages = messages.map(msg => 
        msg.id === editingMessageId 
          ? { ...msg, content: editedContent }
          : msg
      );
      
      // Find the index of the edited message
      const editedIndex = updatedMessages.findIndex(msg => msg.id === editingMessageId);
      
      // Remove all messages after the edited message (including old AI responses)
      const messagesBeforeEdit = updatedMessages.slice(0, editedIndex + 1);
      
      setMessages(messagesBeforeEdit);
      setEditingMessageId(null);
      setEditedContent("");
      
      // Trigger new AI response
      setIsTyping(true);
      setTimeout(() => {
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const aiMessage: Message = {
          id: Date.now().toString(),
          sender: "ai",
          content: randomResponse,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          showTemplates: Math.random() > 0.5,
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1500);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditedContent("");
  };

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter(msg => msg.id !== messageId));
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
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 h-[calc(100vh-140px)]">
        {messages.map((message) => (
          <div key={message.id} className="mb-2">
            <div
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
                  {editingMessageId === message.id ? (
                    /* Edit Mode */
                    <div className="flex flex-col gap-2">
                      <Input
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="text-sm"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={handleSaveEdit}
                          className="text-xs"
                        >
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancelEdit}
                          className="text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* View Mode */
                    <div className="group relative">
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      
                      {/* Edit/Delete buttons - only for user messages */}
                      {message.sender === "user" && (
                        <div className="absolute -bottom-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 z-10">
                          <button
                            onClick={() => handleEditMessage(message.id, message.content)}
                            className="p-1.5 bg-white hover:bg-gray-100 rounded-full shadow-lg border border-gray-200"
                            title="Edit message"
                          >
                            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(message.id)}
                            className="p-1.5 bg-white hover:bg-red-50 rounded-full shadow-lg border border-gray-200"
                            title="Delete message"
                          >
                            <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      )}
                      
                      <span className="text-xs text-gray-500 mt-1">
                        {message.timestamp}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Template Showcase (conditionally shown for AI messages) */}
            {message.sender === "ai" && message.showTemplates && (
              <div className="flex justify-start mt-2">
                <div className="flex space-x-2 max-w-xs">
                  <div className="w-8 h-8 flex-shrink-0"></div>
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
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex space-x-2 max-w-xs">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
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
