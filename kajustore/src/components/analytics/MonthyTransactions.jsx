import React, { useState } from 'react';

const MonthlyTransactions = () => {
  const [transactions, setTransactions] = useState([
    {
      "id": 1,
      "date": "2023-11-01",
      "buyAmount": 5000,
      "sellAmount": 6000
    },
    {
      "id": 2,
      "date": "2023-11-05",
      "buyAmount": 3000,
      "sellAmount": 3500
    },
    {
      "id": 3,
      "date": "2023-11-10",
      "buyAmount": 7000,
      "sellAmount": 8000
    },
    {
      "id": 4,
      "date": "2023-11-15",
      "buyAmount": 2000,
      "sellAmount": 2500
    },
    {
      "id": 5,
      "date": "2023-11-20",
      "buyAmount": 4500,
      "sellAmount": 5000
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    formatDate(transaction.date).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-colorskin rounded-md p-4 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 col-span-full">Monthly Transactions</h2>

      <div className="mb-4 col-span-full">
        <label htmlFor="search" className="block text-sm md:text-base lg:text-lg font-medium text-gray-700">
          Search by Date
        </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a date..."
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      {filteredTransactions.map((transaction) => (
        <div key={transaction.id} className="bg-white rounded-md p-4 shadow-md">
          <p className="text-sm md:text-base lg:text-lg text-gray-500">Date: {formatDate(transaction.date)}</p>
          <p className="text-md md:text-lg lg:text-xl font-semibold">Buy Amount: {transaction.buyAmount}</p>
          <p className="text-md md:text-lg lg:text-xl font-semibold">Sell Amount: {transaction.sellAmount}</p>
          {/* Add other relevant transaction details */}
        </div>
      ))}
    </div>
  );
};

export default MonthlyTransactions;
