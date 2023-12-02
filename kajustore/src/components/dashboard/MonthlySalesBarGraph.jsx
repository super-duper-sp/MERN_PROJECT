// MonthlySalesDoubleBarGraph.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  
  ResponsiveContainer,
} from "recharts";

const MonthlySalesDoubleBarGraph = ({ data }) => {
  return (
    <div className="bg-[#191C40] p-4 rounded shadow-md">
      <h2 className="text-lg text-white font-semibold mb-4">
        Monthly Sales Report
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4299E1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4299E1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="Month"
            label={{
              value: "Month",
              position: "insideBottom",
              fontSize: 12,
              fontWeight: "bold",
              fill: "#ffffff",
            }}
            tick={{ fontSize: 8, fontWeight: "bold", fill: "#ffffff" }}
          />
          <YAxis
            label={{
              value: "Amount",
              angle: -90,
              position: "insideLeft",
              fontSize: 12,
              fontWeight: "bold",
              fill: "#ffffff",
            }}
            tick={{ fontSize: 8, fontWeight: "bold", fill: "#ffffff" }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.1)" }}
            contentStyle={{
              background: "#1A202C",
              border: "1px solid #4A5568",
              color: "#ffffff",
              borderRadius: "5px",
            }}
            labelStyle={{ fontSize: "14px", fontWeight: "bold" }}
            itemStyle={{ fontSize: "12px" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconSize={12}
            iconType="square"
            wrapperStyle={{
              paddingTop: "10px",
              color: "#ffffff",
            }}
          />
          
          <Bar dataKey="OfflineSales" fill="url(#colorSales)" barSize={15} />
          <Bar dataKey="OnlineSales" fill="url(#colorOnline)" barSize={15} />

         {/* Adding line graphs */}

        </BarChart>
      </ResponsiveContainer>
      

 
    </div>
  );
};

export default MonthlySalesDoubleBarGraph;
