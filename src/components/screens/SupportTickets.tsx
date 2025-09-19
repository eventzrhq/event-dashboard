"use client";

import { useState, useMemo } from "react";
import { SupportTicket } from "../support/SupportTicketList";
import CreateTicketDialog, { CreateTicketData } from "../dialogs/CreateTicketDialog";
import EditTicketDialog from "../dialogs/EditTicketDialog";
import TicketStatsCards from "../support/TicketStatsCards";
import TicketTable from "../support/TicketTable";

const SupportTickets = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);

  // Mock data - in a real app, this would come from an API
  const [tickets, setTickets] = useState<SupportTicket[]>([
    {
      id: "TKT-001",
      title: "Unable to upload files larger than 10MB",
      description: "I'm experiencing an issue where I cannot upload files larger than 10MB through the web interface. The upload progress bar reaches 100% but then shows an error message. This happens consistently with PDF files and large images.",
      status: "in-progress",
      priority: "high",
      category: "technical",
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T14:45:00Z",
      assignedTo: "Sarah Wilson",
      createdBy: "John Doe",
      tags: ["upload", "file-size", "error"],
      attachments: 2,
    },
    {
      id: "TKT-002",
      title: "Billing discrepancy in monthly invoice",
      description: "I noticed a discrepancy in my monthly invoice. I was charged for premium features that I didn't use this month. The invoice shows $50 for premium analytics, but I only used the basic plan features.",
      status: "open",
      priority: "medium",
      category: "billing",
      createdAt: "2024-01-14T16:20:00Z",
      updatedAt: "2024-01-14T16:20:00Z",
      createdBy: "Jane Smith",
      tags: ["billing", "invoice", "premium"],
    },
    {
      id: "TKT-003",
      title: "Request for dark mode feature",
      description: "I would love to see a dark mode option added to the dashboard. Many users work late hours and would benefit from a darker theme to reduce eye strain. This would be a great accessibility feature.",
      status: "open",
      priority: "low",
      category: "feature-request",
      createdAt: "2024-01-13T09:15:00Z",
      updatedAt: "2024-01-13T09:15:00Z",
      createdBy: "Mike Johnson",
      tags: ["dark-mode", "accessibility", "ui"],
    },
    {
      id: "TKT-004",
      title: "Calendar sync not working with Google Calendar",
      description: "The calendar synchronization with Google Calendar has stopped working. Events created in the app are not appearing in my Google Calendar, and vice versa. This was working fine until last week.",
      status: "resolved",
      priority: "high",
      category: "bug-report",
      createdAt: "2024-01-12T11:45:00Z",
      updatedAt: "2024-01-14T10:30:00Z",
      assignedTo: "Alex Chen",
      createdBy: "Emily Davis",
      tags: ["calendar", "sync", "google"],
      attachments: 1,
    },
    {
      id: "TKT-005",
      title: "General question about API rate limits",
      description: "I'm developing an integration with your API and wanted to understand the rate limits. What are the current limits for API calls per minute/hour? Also, is there a way to request higher limits for enterprise usage?",
      status: "closed",
      priority: "low",
      category: "general",
      createdAt: "2024-01-11T14:30:00Z",
      updatedAt: "2024-01-13T16:45:00Z",
      assignedTo: "David Kim",
      createdBy: "Robert Wilson",
      tags: ["api", "rate-limits", "integration"],
    },
    {
      id: "TKT-006",
      title: "Dashboard loading very slowly",
      description: "The dashboard is taking over 30 seconds to load, which is significantly slower than usual. This happens consistently across different browsers and devices. The issue started yesterday and affects all pages in the dashboard.",
      status: "open",
      priority: "urgent",
      category: "technical",
      createdAt: "2024-01-16T08:15:00Z",
      updatedAt: "2024-01-16T08:15:00Z",
      assignedTo: "Sarah Wilson",
      createdBy: "Lisa Anderson",
      tags: ["performance", "loading", "dashboard"],
    },
  ]);

  // Get statistics
  const stats = useMemo(() => {
    const total = tickets.length;
    const pending = tickets.filter(t => t.status === "in-progress").length;
    const open = tickets.filter(t => t.status === "open").length;
    const closed = tickets.filter(t => t.status === "closed" || t.status === "resolved").length;

    return { total, pending, open, closed };
  }, [tickets]);

  const handleCreateNew = () => {
    setShowCreateForm(true);
  };

  const handleCreateTicket = async (ticketData: CreateTicketData) => {
    // In a real app, this would make an API call
    const newTicket: SupportTicket = {
      id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
      title: ticketData.title,
      description: ticketData.description,
      status: "open",
      priority: ticketData.priority,
      category: ticketData.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: "Current User", // In real app, get from auth context
      tags: ticketData.tags,
      attachments: ticketData.attachments?.length || 0,
    };

    setTickets(prev => [newTicket, ...prev]);
    setShowCreateForm(false);
  };

  const handleEditTicket = (ticket: SupportTicket) => {
    setSelectedTicket(ticket);
    setShowEditForm(true);
  };

  const handleUpdateTicket = async (ticketId: string, updatedData: Partial<SupportTicket>) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, ...updatedData, updatedAt: new Date().toISOString() }
        : ticket
    ));
    setShowEditForm(false);
    setSelectedTicket(null);
  };

  const handleDeleteTicket = async (ticketId: string) => {
    if (window.confirm("Are you sure you want to delete this ticket? This action cannot be undone.")) {
      setTickets(prev => prev.filter(ticket => ticket.id !== ticketId));
    }
  };

  // Remove the full-page form rendering since we're using a dialog now

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Tickets
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Manage and track support tickets
          </p>
        </div>

        {/* Statistics Cards */}
        <TicketStatsCards
          totalTickets={stats.total}
          pendingTickets={stats.pending}
          openTickets={stats.open}
          closedTickets={stats.closed}
        />

        {/* Tickets Table */}
        <TicketTable
          tickets={tickets}
          onCreateNew={handleCreateNew}
          onEditTicket={handleEditTicket}
          onDeleteTicket={handleDeleteTicket}
        />

        {/* Create Ticket Dialog */}
        <CreateTicketDialog
          isOpen={showCreateForm}
          onClose={() => setShowCreateForm(false)}
          onSubmit={handleCreateTicket}
        />

        {/* Edit Ticket Dialog */}
        <EditTicketDialog
          isOpen={showEditForm}
          onClose={() => {
            setShowEditForm(false);
            setSelectedTicket(null);
          }}
          onSubmit={handleUpdateTicket}
          ticket={selectedTicket}
        />
      </div>
    </div>
  );
};

export default SupportTickets;
