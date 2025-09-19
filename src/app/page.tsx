"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/screens/MainContent";
import Calendar from "@/components/screens/Calendar";
import SupportTickets from "@/components/screens/SupportTickets";
import CRM from "@/components/screens/CRM";
import Dashboard from "@/components/screens/Dashboard";
import ChatApp from "@/components/screens/ChatApp";
import UserProfile from "@/components/screens/UserProfile";

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
