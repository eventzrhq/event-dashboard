"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Calendar from "@/components/screens/Calendar";

export default function CalendarPage() {
  const [currentPage] = useState("calendar");

  return (
    <Layout currentPage={currentPage} onNavigate={() => {}}>
      <Calendar />
    </Layout>
  );
}