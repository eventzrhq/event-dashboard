"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";
import { Contact } from "./CRM";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (contactData: Omit<Contact, 'id'>) => void;
  contact?: Contact | null;
  isLoading?: boolean;
}

const ContactDialog = ({ isOpen, onClose, onSubmit, contact, isLoading = false }: ContactDialogProps) => {
  const [formData, setFormData] = useState<Omit<Contact, 'id'>>({
    name: "",
    role: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    department: "",
    isStarred: false,
    category: "all",
    status: "lead",
    notes: "",
    lastContact: "",
  });
  const [errors, setErrors] = useState<Partial<Contact>>({});

  // Initialize form data when contact changes
  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name,
        role: contact.role,
        company: contact.company,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        department: contact.department,
        isStarred: contact.isStarred,
        category: contact.category,
        status: contact.status,
        notes: contact.notes || "",
        lastContact: contact.lastContact || "",
      });
    } else {
      setFormData({
        name: "",
        role: "",
        company: "",
        phone: "",
        email: "",
        address: "",
        department: "",
        isStarred: false,
        category: "all",
        status: "lead",
        notes: "",
        lastContact: "",
      });
    }
    setErrors({});
  }, [contact]);

  const categories = [
    { value: "all", label: "All" },
    { value: "frequent", label: "Frequent" },
    { value: "starred", label: "Starred" },
    { value: "engineering", label: "Engineering" },
    { value: "support", label: "Support" },
    { value: "sales", label: "Sales" },
  ];

  const statuses = [
    { value: "lead", label: "Lead" },
    { value: "prospect", label: "Prospect" },
    { value: "customer", label: "Customer" },
    { value: "inactive", label: "Inactive" },
  ];

  const departments = [
    { value: "Engineering", label: "Engineering" },
    { value: "Support", label: "Support" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "HR", label: "HR" },
    { value: "Finance", label: "Finance" },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Contact> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      handleClose();
    }
  };

  const handleInputChange = (field: keyof Contact, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      role: "",
      company: "",
      phone: "",
      email: "",
      address: "",
      department: "",
      isStarred: false,
      category: "all",
      status: "lead",
      notes: "",
      lastContact: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {contact ? `Edit Contact` : 'Add New Contact'}
            </h2>
            <button
              onClick={handleClose}
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
              title="Cancel"
            >
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Basic Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter full name"
                    className={cn(
                      errors.name && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Role
                  </label>
                  <Input
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    placeholder="e.g., Sales Manager"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Company name"
                    className={cn(
                      errors.company && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="email@company.com"
                    className={cn(
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={cn(
                      errors.phone && "border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Street address, City, State, ZIP"
                />
              </div>
            </div>

            {/* CRM Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">CRM Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {statuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="lastContact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Contact Date
                </label>
                <Input
                  id="lastContact"
                  type="date"
                  value={formData.lastContact}
                  onChange={(e) => handleInputChange("lastContact", e.target.value)}
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Notes
              </label>
              <textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Add any additional notes about this contact..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Starred */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isStarred"
                checked={formData.isStarred}
                onChange={(e) => handleInputChange("isStarred", e.target.checked)}
                className="rounded border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="isStarred" className="text-sm text-gray-700 dark:text-gray-300">
                Mark as starred contact
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Icon name="clock" className="w-4 h-4 mr-2 animate-spin" />
                    {contact ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    <Icon name="plus" className="w-4 h-4 mr-2" />
                    {contact ? 'Update Contact' : 'Create Contact'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
