"use client";

import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";
import ContactDialog from "./ContactDialog";

export interface Contact {
  id: string;
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  department: string;
  isStarred: boolean;
  category: "all" | "frequent" | "starred" | "engineering" | "support" | "sales";
  avatar?: string;
  notes?: string;
  lastContact?: string;
  status: "lead" | "prospect" | "customer" | "inactive";
}

const CRM = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  // Mock data - in a real app, this would come from an API
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Georgeanna Ramero",
      role: "Sales Manager",
      company: "Muller Inc.",
      phone: "456-485-5623",
      email: "qq739v47ggn@claimab.com",
      address: "19214 110th Rd, Saint Albans, NY, 1141",
      department: "Sales",
      isStarred: true,
      category: "sales",
      status: "customer",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      lastContact: "2024-01-15",
    },
    {
      id: "2",
      name: "Cami Macha",
      role: "Software Engineer",
      company: "TechCorp",
      phone: "555-123-4567",
      email: "cami.macha@techcorp.com",
      address: "123 Tech Street, San Francisco, CA, 94105",
      department: "Engineering",
      isStarred: false,
      category: "engineering",
      status: "prospect",
      notes: "Interested in our enterprise solutions. Follow up next week.",
      lastContact: "2024-01-10",
    },
    {
      id: "3",
      name: "Alda Ziemer",
      role: "Support Specialist",
      company: "SupportPro",
      phone: "555-987-6543",
      email: "alda.ziemer@supportpro.com",
      address: "456 Support Ave, Austin, TX, 73301",
      department: "Support",
      isStarred: false,
      category: "support",
      status: "lead",
      notes: "New lead from trade show. Very interested in our services.",
      lastContact: "2024-01-12",
    },
    {
      id: "4",
      name: "Luciano Macpherson",
      role: "Sales Director",
      company: "SalesForce Inc.",
      phone: "555-456-7890",
      email: "luciano.macpherson@salesforce.com",
      address: "789 Sales Blvd, New York, NY, 10001",
      department: "Sales",
      isStarred: true,
      category: "sales",
      status: "customer",
      notes: "VIP customer. High priority account. Regular check-ins required.",
      lastContact: "2024-01-14",
    },
    {
      id: "5",
      name: "Dalton Paden",
      role: "Lead Developer",
      company: "DevCorp",
      phone: "555-321-0987",
      email: "dalton.paden@devcorp.com",
      address: "321 Dev Lane, Seattle, WA, 98101",
      department: "Engineering",
      isStarred: false,
      category: "engineering",
      status: "prospect",
      notes: "Technical evaluation in progress. Decision expected next month.",
      lastContact: "2024-01-08",
    },
    {
      id: "6",
      name: "Juan Granado",
      role: "Customer Success",
      company: "SuccessCo",
      phone: "555-654-3210",
      email: "juan.granado@successco.com",
      address: "654 Success St, Miami, FL, 33101",
      department: "Support",
      isStarred: false,
      category: "support",
      status: "customer",
      notes: "Happy customer. Potential for upselling additional services.",
      lastContact: "2024-01-13",
    },
    {
      id: "7",
      name: "Reva Allen",
      role: "Account Executive",
      company: "AccountPro",
      phone: "555-789-0123",
      email: "reva.allen@accountpro.com",
      address: "987 Account Way, Chicago, IL, 60601",
      department: "Sales",
      isStarred: false,
      category: "sales",
      status: "lead",
      notes: "Cold lead. Needs nurturing. Send product information.",
      lastContact: "2024-01-05",
    },
    {
      id: "8",
      name: "Jule Huseman",
      role: "Senior Developer",
      company: "CodeCraft",
      phone: "555-012-3456",
      email: "jule.huseman@codecraft.com",
      address: "012 Code Court, Boston, MA, 02101",
      department: "Engineering",
      isStarred: true,
      category: "engineering",
      status: "customer",
      notes: "Technical champion. Very satisfied with our platform.",
      lastContact: "2024-01-16",
    },
  ]);

  // Filter contacts based on active filter and search term
  const filteredContacts = useMemo(() => {
    let filtered = contacts;

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = filtered.filter(contact => contact.category === activeFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchLower) ||
        contact.company.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.role.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [contacts, activeFilter, searchTerm]);

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleStarToggle = (contactId: string) => {
    setContacts(prev => prev.map(contact =>
      contact.id === contactId
        ? { ...contact, isStarred: !contact.isStarred }
        : contact
    ));
    
    if (selectedContact?.id === contactId) {
      setSelectedContact(prev => prev ? { ...prev, isStarred: !prev.isStarred } : null);
    }
  };

  const handleDeleteContact = (contactId: string) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(prev => prev.filter(contact => contact.id !== contactId));
      if (selectedContact?.id === contactId) {
        setSelectedContact(null);
      }
    }
  };

  const handleAddContact = (contactData: Omit<Contact, 'id'>) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const handleUpdateContact = (contactData: Omit<Contact, 'id'>) => {
    if (selectedContact) {
      setContacts(prev => prev.map(contact =>
        contact.id === selectedContact.id
          ? { ...contact, ...contactData }
          : contact
      ));
      setSelectedContact({ ...selectedContact, ...contactData });
    }
  };

  const getStatusColor = (status: Contact["status"]) => {
    switch (status) {
      case "lead":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "prospect":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "customer":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="h-full flex bg-gray-50 dark:bg-slate-900">
      {/* Left Sidebar */}
      <div className="w-80 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact App
          </h1>
          
          {/* Add New Contact Button */}
          <Button 
            onClick={() => setShowAddDialog(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Icon name="plus" className="w-4 h-4 mr-2" />
            Add New Contact
          </Button>
        </div>

        {/* Filters */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                activeFilter === "all"
                  ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              <Icon name="users3" className="w-5 h-5" />
              <span>All</span>
            </button>
            
            <button
              onClick={() => setActiveFilter("frequent")}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                activeFilter === "frequent"
                  ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              <Icon name="clock" className="w-5 h-5" />
              <span>Frequent</span>
            </button>
            
            <button
              onClick={() => setActiveFilter("starred")}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                activeFilter === "starred"
                  ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              )}
            >
              <Icon name="heart-custom" className="w-5 h-5" />
              <span>Starred</span>
            </button>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setActiveFilter("engineering")}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                  activeFilter === "engineering"
                    ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                <Icon name="briefcase" className="w-5 h-5" />
                <span>Engineering</span>
              </button>
              
              <button
                onClick={() => setActiveFilter("support")}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                  activeFilter === "support"
                    ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                <Icon name="support" className="w-5 h-5" />
                <span>Support</span>
              </button>
              
              <button
                onClick={() => setActiveFilter("sales")}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                  activeFilter === "sales"
                    ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                )}
              >
                <Icon name="dollar" className="w-5 h-5" />
                <span>Sales</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Contact List */}
      <div className="flex-1 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col">
        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-700">
          <div className="relative">
            <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <Icon name="users3" className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-lg font-medium">No contacts found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => handleContactSelect(contact)}
                  className={cn(
                    "p-4 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-slate-700/50",
                    selectedContact?.id === contact.id && "bg-gray-100 dark:bg-slate-700"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold">
                      {getInitials(contact.name)}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {contact.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStarToggle(contact.id);
                            }}
                            className="text-gray-400 hover:text-yellow-500 transition-colors"
                          >
                            <Icon 
                              name={contact.isStarred ? "heart-custom" : "heart-custom"} 
                              className={cn(
                                "w-4 h-4",
                                contact.isStarred ? "text-yellow-500 fill-current" : "text-gray-400"
                              )} 
                            />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteContact(contact.id);
                            }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Icon name="x" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {contact.role} • {contact.company}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={cn(
                          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                          getStatusColor(contact.status)
                        )}>
                          {contact.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Contact Details */}
      <div className="w-96 bg-white dark:bg-slate-800 flex flex-col">
        {selectedContact ? (
          <>
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Details
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleStarToggle(selectedContact.id)}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Icon 
                      name="heart-custom" 
                      className={cn(
                        "w-5 h-5",
                        selectedContact.isStarred ? "text-yellow-500 fill-current" : "text-gray-400"
                      )} 
                    />
                  </button>
                  <button
                    onClick={() => setShowEditDialog(true)}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Icon name="edit" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteContact(selectedContact.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-xl mx-auto mb-4">
                  {getInitials(selectedContact.name)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedContact.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedContact.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedContact.company}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone Number
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.phone}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email Address
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.email}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Address
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.address}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Department
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.department}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Company
                  </label>
                  <p className="text-gray-900 dark:text-white">{selectedContact.company}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Status
                  </label>
                  <span className={cn(
                    "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                    getStatusColor(selectedContact.status)
                  )}>
                    {selectedContact.status}
                  </span>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Last Contact
                  </label>
                  <p className="text-gray-900 dark:text-white">
                    {selectedContact.lastContact ? new Date(selectedContact.lastContact).toLocaleDateString() : 'Never'}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                    Notes
                  </label>
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {selectedContact.notes || 'No notes available'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t border-gray-200 dark:border-slate-700">
              <div className="flex space-x-3">
                <Button
                  onClick={() => setShowEditDialog(true)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Icon name="edit" className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteContact(selectedContact.id)}
                  variant="outline"
                  className="flex-1 border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <Icon name="x" className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <Icon name="users3" className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No contact selected</h3>
              <p className="text-sm">Select a contact to view details</p>
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Contact Dialog */}
      <ContactDialog
        isOpen={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onSubmit={handleAddContact}
      />

      <ContactDialog
        isOpen={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        onSubmit={handleUpdateContact}
        contact={selectedContact}
      />
    </div>
  );
};

export default CRM;
