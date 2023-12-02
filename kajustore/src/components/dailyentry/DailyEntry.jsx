import React, { useState, useEffect } from "react";
import axios from "axios";

import DailyTransactionsDisplay from "./DailyTransactionsDisplay";
import BuySellCard from "./BuySellCard";

const DailyEntry = () => {
  const [searchMonth, setSearchMonth] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [dailyTransactions, setDailyTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlerefresh = () => {
    // Implement refreshing logic if needed
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/API/DailyTransactions/all/');
        setDailyTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.'); // Set an error state
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the initial render

  const handleSearch = () => {
    // Ensure searchMonth is in the format 'YYYY-MM' (e.g., '2023-11')
    const searchDate = new Date(`${searchMonth}-01`);
  
    // Format the search date as 'YYYY-MM'
    const formattedSearchDate = searchDate.toISOString().slice(0, 7);
  
    // Filter the transactions based on the formatted search date
    const filtered = dailyTransactions.filter(transaction => {
      // Convert each transaction date to a JavaScript Date object
      const transactionDate = new Date(transaction.date);
  
      // Format the transaction date as 'YYYY-MM'
      const formattedTransactionDate = transactionDate.toISOString().slice(0, 7);
  
      // Check if the transaction date matches the search date
      return formattedTransactionDate === formattedSearchDate;
    });
  
    // Log or handle the filtered transactions as needed
    console.log('Filtered Transactions:', filtered);
  
    // Update the state with the filtered transactions
    setFilteredTransactions(filtered);
  };
  
  
  
  

  return (
    <div className="flex md:flex-wrap">
      <div>
        <BuySellCard />
      </div>

      <div className="mx-2 my-2">
        <div className="mb-4">
          <label htmlFor="searchMonth" className="block text-sm font-medium text-gray-700">
            Search by Month
          </label>
          <input
            type="month"
            id="searchMonth"
            name="searchMonth"
            value={searchMonth}
            onChange={(e) => setSearchMonth(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <DailyTransactionsDisplay transactions={searchMonth ? filteredTransactions : dailyTransactions} />}
      </div>
    </div>
  );
};

export default DailyEntry;
