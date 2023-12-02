import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Shop A', revenue: 50000 },
  { name: 'Shop B', revenue: 75000 },
  { name: 'Shop C', revenue: 100000 },
  // Add more shops as needed
];

const getTotalRevenue = () => {
  return data.reduce((total, shop) => total + shop.revenue, 0);
};

const RadialBarChartComponent = () => {
  return (
    <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={60}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{
          position: 'insideStart',
          fill: '#fff',
          fontSize: 10, // Adjust font size
          dy: -5, // Adjust vertical position
        }}
        background
        clockWise
        dataKey="revenue"
      />
      <Tooltip />
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: '50%', right: 0, transform: 'translate(0, -50%)' }} />
    </RadialBarChart>
  );
};

export default RadialBarChartComponent;
