"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { cn } from "@/lib/utils";

export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  category: "technical" | "billing" | "general" | "feature-request" | "bug-report";
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  createdBy: string;
  tags: string[];
  attachments?: number;
}

interface SupportTicketListProps {
  tickets: SupportTicket[];
  onTicketSelect: (ticket: SupportTicket) => void;
  onCreateNew: () => void;
  onFilterChange: (filters: TicketFilters) => void;
  filters: TicketFilters;
}

export interface TicketFilters {
  status: string[];
  priority: string[];
  category: string[];
  search: string;
}

const SupportTicketList = ({ 
  tickets, 
  onTicketSelect, 
  onCreateNew, 
  onFilterChange, 
  filters 
}: SupportTicketListProps) => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

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
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInHours < 168) { // 7 days
      return `${Math.floor(diffInHours / 24)}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleTicketClick = (ticket: SupportTicket) => {
    setSelectedTicket(ticket.id);
    onTicketSelect(ticket);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800/50 border-r border-gray-200 dark:border-slate-700/50">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Support Tickets
          </h2>
          <Button 
            onClick={onCreateNew}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            <Icon name="plus" className="w-4 h-4 mr-2" />
            New Ticket
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={filters.search}
              onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={filters.status[0] || ""}
              onChange={(e) => onFilterChange({ 
                ...filters, 
                status: e.target.value ? [e.target.value] : [] 
              })}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            >
              <option value="">All Status</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={filters.priority[0] || ""}
              onChange={(e) => onFilterChange({ 
                ...filters, 
                priority: e.target.value ? [e.target.value] : [] 
              })}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            >
              <option value="">All Priority</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <select
              value={filters.category[0] || ""}
              onChange={(e) => onFilterChange({ 
                ...filters, 
                category: e.target.value ? [e.target.value] : [] 
              })}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            >
              <option value="">All Categories</option>
              <option value="technical">Technical</option>
              <option value="billing">Billing</option>
              <option value="general">General</option>
              <option value="feature-request">Feature Request</option>
              <option value="bug-report">Bug Report</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ticket List */}
      <div className="flex-1 overflow-y-auto">
        {tickets.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
            <Icon name="document" className="w-12 h-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No tickets found</p>
            <p className="text-sm">Create your first support ticket to get started</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-slate-700/50">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleTicketClick(ticket)}
                className={cn(
                  "p-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-slate-700/50",
                  selectedTicket === ticket.id && "bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
                    {ticket.title}
                  </h3>
                  <div className="flex items-center space-x-2 ml-2">
                    <Badge className={cn("text-xs", getStatusColor(ticket.status))}>
                      {ticket.status.replace("-", " ")}
                    </Badge>
                    <Badge className={cn("text-xs", getPriorityColor(ticket.priority))}>
                      {ticket.priority}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                  {ticket.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>#{ticket.id}</span>
                    <span>{formatDate(ticket.createdAt)}</span>
                    {ticket.assignedTo && (
                      <span>Assigned to {ticket.assignedTo}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {ticket.attachments && ticket.attachments > 0 && (
                      <div className="flex items-center">
                        <Icon name="document" className="w-3 h-3 mr-1" />
                        <span>{ticket.attachments}</span>
                      </div>
                    )}
                    <span className="capitalize">{ticket.category.replace("-", " ")}</span>
                  </div>
                </div>

                {ticket.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ticket.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {ticket.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 rounded">
                        +{ticket.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportTicketList;
