import React, { useState } from "react";

export function AnalyticsDashboard({ logs }) {
  const [filterText, setFilterText] = useState("");

  // Assume this function performs complex RegEx analysis over thousands of log nodes
  const processedLogs = logs.map((log) => ({
    ...log,
    riskScore: complexRiskAnalysisScore(log),
  }));

  const visibleLogs = processedLogs.filter((log) =>
    log.message.includes(filterText),
  );

  return (
    <div>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {visibleLogs.map((log) => (
        <div key={log.id}>
          {log.message} - {log.riskScore}
        </div>
      ))}
    </div>
  );
}
