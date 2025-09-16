"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";
import { SupportTicket } from "./SupportTicketList";

interface SupportTicketDetailProps {
  ticket: SupportTicket | null;
  onStatusChange: (ticketId: string, status: SupportTicket["status"]) => void;
  onPriorityChange: (ticketId: string, priority: SupportTicket["priority"]) => void;
  onAddComment: (ticketId: string, comment: string) => void;
  onAssignTicket: (ticketId: string, assignee: string) => void;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  isInternal?: boolean;
}

const SupportTicketDetail = ({ 
  ticket, 
  onStatusChange, 
  onPriorityChange, 
  onAddComment, 
  onAssignTicket 
}: SupportTicketDetailProps) => {
  const [newComment, setNewComment] = useState("");
  const [showInternalComment, setShowInternalComment] = useState(false);
  const [isAddingComment, setIsAddingComment] = useState(false);

  // Mock comments data - in real app, this would come from props or API
  const mockComments: Comment[] = [
    {
      id: "1",
      author: "John Doe",
      content: "I'm experiencing this issue on Chrome browser version 95.0.4638.69. The error occurs when I try to upload files larger than 10MB.",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      author: "Support Team",
      content: "Thank you for reporting this issue. We've identified the problem and our development team is working on a fix. We'll update you once it's resolved.",
      createdAt: "2024-01-15T14:45:00Z",
    },
    {
      id: "3",
      author: "Sarah Wilson",
      content: "Internal note: This is related to the file upload validation bug we fixed in v2.1.3. Need to check if the fix was properly deployed.",
      createdAt: "2024-01-15T15:20:00Z",
      isInternal: true,
    },
  ];

  if (!ticket) {
    return (
      <div className="flex items-center justify-center h-full bg-white dark:bg-slate-800/50">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <Icon name="document" className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">No ticket selected</h3>
          <p className="text-sm">Select a ticket from the list to view details</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: SupportTicket["status"]) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "resolved":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getPriorityColor = (priority: SupportTicket["priority"]) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    
    setIsAddingComment(true);
    try {
      await onAddComment(ticket.id, newComment);
      setNewComment("");
      setShowInternalComment(false);
    } finally {
      setIsAddingComment(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800/50">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-slate-700/50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {ticket.title}
              </h1>
              <Badge className={cn("text-xs", getStatusColor(ticket.status))}>
                {ticket.status.replace("-", " ")}
              </Badge>
              <Badge className={cn("text-xs", getPriorityColor(ticket.priority))}>
                {ticket.priority}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Ticket #{ticket.id}</span>
              <span>Created {formatDate(ticket.createdAt)}</span>
              <span>Updated {formatDate(ticket.updatedAt)}</span>
              {ticket.assignedTo && (
                <span>Assigned to {ticket.assignedTo}</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <select
              value={ticket.status}
              onChange={(e) => onStatusChange(ticket.id, e.target.value as SupportTicket["status"])}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            >
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            
            <select
              value={ticket.priority}
              onChange={(e) => onPriorityChange(ticket.id, e.target.value as SupportTicket["priority"])}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        {/* Tags */}
        {ticket.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {ticket.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Description */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-700/50">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Description
          </h3>
          <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
            <p>{ticket.description}</p>
          </div>
        </div>

        {/* Comments */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Comments ({mockComments.length})
            </h3>
          </div>

          <div className="space-y-4 mb-6">
            {mockComments.map((comment) => (
              <div
                key={comment.id}
                className={cn(
                  "p-4 rounded-lg border",
                  comment.isInternal
                    ? "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800"
                    : "bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-600"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {comment.author}
                    </span>
                    {comment.isInternal && (
                      <Badge variant="outline" className="text-xs">
                        Internal
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          <div className="border-t border-gray-200 dark:border-slate-700/50 pt-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="internal-comment"
                  checked={showInternalComment}
                  onChange={(e) => setShowInternalComment(e.target.checked)}
                  className="rounded border-gray-300 dark:border-slate-600"
                />
                <label htmlFor="internal-comment" className="text-sm text-gray-700 dark:text-gray-300">
                  Internal comment (not visible to customer)
                </label>
              </div>
              
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              
              <div className="flex justify-end">
                <Button
                  onClick={handleAddComment}
                  disabled={!newComment.trim() || isAddingComment}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isAddingComment ? "Adding..." : "Add Comment"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketDetail;
