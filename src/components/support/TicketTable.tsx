"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { SupportTicket } from "./SupportTicketList";

interface TicketTableProps {
  tickets: SupportTicket[];
  onCreateNew: () => void;
  onEditTicket: (ticket: SupportTicket) => void;
  onDeleteTicket: (ticketId: string) => void;
}

const TicketTable = ({ tickets, onCreateNew, onEditTicket, onDeleteTicket }: TicketTableProps) => {
  const [sortField, setSortField] = useState<keyof SupportTicket>("createdAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState("");

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSort = (field: keyof SupportTicket) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Filter tickets based on search term
  const filteredTickets = tickets.filter((ticket) => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      ticket.title.toLowerCase().includes(searchLower) ||
      ticket.description.toLowerCase().includes(searchLower) ||
      ticket.id.toLowerCase().includes(searchLower) ||
      ticket.assignedTo?.toLowerCase().includes(searchLower) ||
      ticket.status.toLowerCase().includes(searchLower) ||
      ticket.priority.toLowerCase().includes(searchLower) ||
      ticket.category.toLowerCase().includes(searchLower) ||
      ticket.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    // Handle undefined values
    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return sortDirection === "asc" ? 1 : -1;
    if (bValue === undefined) return sortDirection === "asc" ? -1 : 1;
    
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center">
            <Button 
              onClick={onCreateNew}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
            >
              <Icon name="plus" className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Create Ticket</span>
              <span className="sm:hidden">Create</span>
            </Button>
          </div>
          <div className="relative w-full sm:w-auto">
            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50 dark:bg-slate-700/50">
            <tr>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center space-x-1">
                  <span className="hidden sm:inline">Id</span>
                  <span className="sm:hidden">#</span>
                  <Icon name="chevron-down" className="w-3 h-3" />
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center space-x-1">
                  <span>Ticket</span>
                  <Icon name="chevron-down" className="w-3 h-3" />
                </div>
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                Assigned To
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <Icon name="chevron-down" className="w-3 h-3" />
                </div>
              </th>
              <th 
                className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 hidden sm:table-cell"
                onClick={() => handleSort("createdAt")}
              >
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <Icon name="chevron-down" className="w-3 h-3" />
                </div>
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700">
            {sortedTickets.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 sm:px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                    <Icon name="document" className="w-12 h-12 mb-4 opacity-50" />
                    <p className="text-lg font-medium">No tickets found</p>
                    <p className="text-sm">Create your first support ticket to get started</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedTickets.map((ticket) => (
                <tr 
                  key={ticket.id}
                  className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    <span className="hidden sm:inline">{ticket.id}</span>
                    <span className="sm:hidden text-xs">#{ticket.id.split('-')[1]}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-white">
                      <div className="font-medium mb-1 line-clamp-1">{ticket.title}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 hidden sm:block">
                        {ticket.description}
                      </div>
                      {/* Mobile: Show assigned to and date in description area */}
                      <div className="sm:hidden text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <div>{ticket.assignedTo || "Unassigned"}</div>
                        <div>{formatDate(ticket.createdAt)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white hidden md:table-cell">
                    {ticket.assignedTo || "Unassigned"}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <Badge className={getStatusColor(ticket.status)}>
                      <span className="hidden sm:inline">{ticket.status.replace("-", " ")}</span>
                      <span className="sm:hidden text-xs">{ticket.status.charAt(0).toUpperCase()}</span>
                    </Badge>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                    {formatDate(ticket.createdAt)}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEditTicket(ticket)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 p-1 sm:p-2"
                        title="Edit ticket"
                      >
                        <Icon name="edit" className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteTicket(ticket.id)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 p-1 sm:p-2"
                        title="Delete ticket"
                      >
                        <Icon name="x" className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
