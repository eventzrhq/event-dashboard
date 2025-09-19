"use client";

import { ResponsiveBar } from "@nivo/bar";

export default function TestChart() {
  const chartData = [
    { month: "Jan", current: 60, previous: 40 },
    { month: "Feb", current: 80, previous: 45 },
  ];

  return (
    <div className="p-4">
      <h1>Chart Test</h1>
      <div style={{ height: "400px" }}>
        <ResponsiveBar
          data={chartData}
          keys={["current", "previous"]}
          indexBy="month"
          colors={["#8C9EFD", "#8CDAAA"]}
        />
      </div>
    </div>
  );
}
