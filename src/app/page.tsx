"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import MainContent from "@/components/MainContent";
import Calendar from "@/components/Calendar";
import Chat from "@/components/Chat";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "calendar":
        return <Calendar />;
      case "chat":
        return <Chat />;
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
