"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import MainContent from "@/components/MainContent";
import Calendar from "@/components/Calendar";
import SupportTickets from "@/components/SupportTickets";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "calendar":
        return <Calendar />;
      case "support":
        return <SupportTickets />;
      case "dashboard":
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
