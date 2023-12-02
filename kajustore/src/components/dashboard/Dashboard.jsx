import React, { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import MonthlySalesBarGraph from "./MonthlySalesBarGraph";
import axios from "axios";

const Dashboard = () => {
  // const cardDetails = [
  //   { name: "Daily ", amount: 4000 },
  //   { name: "Monthly ", amount: 120000 },
  //   { name: "Yearly ", amount: 1800000 },
  //   { name: "Bank balance ", amount: 18000 },
  // ];

  const [OnlineOfflineMonthlySales, setOnlineOfflineMonthlySales] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/API/OnlineOfflineMonthlySales"
        ); // Replace with your actual backend API endpoint
        setOnlineOfflineMonthlySales(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the initial render

  // Function to calculate the total of an array of numbers
  const calculateTotal = (array) => {
    return array.reduce((acc, value) => acc + value, 0);
  };

  // Extracting sales values from the data array
  const salesOfflineValues = OnlineOfflineMonthlySales?.map(
    (item) => item.OnlineSales
  );

  // Extracting sales values from the data array
  const salesOnlineValues = OnlineOfflineMonthlySales?.map(
    (item) => item.OfflineSales
  );

  // Calculating the total sales
  const totalSales = salesOfflineValues
    ? calculateTotal(salesOfflineValues)
    : 0;

  // Calculating the total sales
  const totalSalesOnline = salesOnlineValues
    ? calculateTotal(salesOnlineValues)
    : 0;

  const Cardinfo = [
    { name: "Total yearly", amount: totalSales },
    { name: "Online Sales", amount: totalSalesOnline },
    { name: "Grand Total", amount: totalSalesOnline + totalSales },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 pt-2">
        {Cardinfo.map((Card) => (
          <DashboardCard key={Card.name} info={Card} />
        ))}
      </div>

      <div>
        <div className="mt-2 mx-2">
          <MonthlySalesBarGraph data={OnlineOfflineMonthlySales} />
        </div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
