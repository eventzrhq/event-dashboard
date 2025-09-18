"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  const [currentPage] = useState("calendar");

  return (
    <Layout currentPage={currentPage} onNavigate={() => {}}>
      <Calendar />
    </Layout>
  );
}