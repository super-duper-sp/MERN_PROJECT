import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const MonthlyYearlyDailyAverageGraph = ({ monthlyData, yearlyData, dailyData }) => {
  return (
    <div className="graph-container">
      {/* Monthly Average Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Yearly Average Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={yearlyData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* Daily Average Line or Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        {/* Use LineChart or BarChart based on your preference */}
        <LineChart data={dailyData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average" stroke="#8884d8" />
          {/* Or use Bar for a bar chart */}
          {/* <Bar dataKey="average" fill="#8884d8" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyYearlyDailyAverageGraph;
