// DueMeterChart.jsx
import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Label } from 'recharts';

const DueMeter = ({meterAmount}) => {
  const data = [
    { name: 'High Risk', value: 25000, fill: '#FF4500' },
    { name: 'Moderate Risk', value: 15000, fill: '#FFD700' },
    { name: 'Low Risk', value: 3000, fill: '#00C49F' },

  ];


  return (

    
    <PieChart width={285} height={150} margin={{ top: -50, right: -15, left: 0, bottom: -150 }}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        startAngle={0}
        endAngle={180}
        fill="#8884d8"
        paddingAngle={0}
        label
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
        
        {/* Center Label */}
        <Label value={`Due: ₹${meterAmount}`} position="center" fontSize={14} fontWeight="bold" />
      </Pie>
     
      <Tooltip />
    </PieChart>
  );
};

export default DueMeter;
