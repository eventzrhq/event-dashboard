"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import MainContent from "@/components/MainContent";
import Calendar from "@/components/Calendar";
import SupportTickets from "@/components/SupportTickets";
import CRM from "@/components/CRM";
import Dashboard from "@/components/Dashboard";
import ChatApp from "@/components/ChatApp";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "calendar":
        return <Calendar />;
      case "support":
        return <SupportTickets />;
      case "crm":
        return <CRM />;
      case "chat":
        return <ChatApp />;
      case "timeline":
        return <UserProfile />;
      case "dashboard":
        return <Dashboard />;
      case "main":
      default:
        return <MainContent />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderContent()}
    </Layout>
  );
}
