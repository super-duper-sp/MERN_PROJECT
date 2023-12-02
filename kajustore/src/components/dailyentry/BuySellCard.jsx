import React from "react";
import { useState } from "react";
import axios from 'axios';

const BuySellCard = ({ onSubmission }) => {

  const [date, setDate] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [buyNotes, setBuyNotes] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [sellNotes, setSellNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the Express server
      await axios.post('http://localhost:3002/api/DailyTransactions', {
        date: new Date(date), // Convert date to a Date object
        buyAmount: parseFloat(buyAmount), // Convert to a floating-point number
        buyNotes: buyNotes,
        sellAmount: parseFloat(sellAmount), // Convert to a floating-point number
        sellNotes: sellNotes
      });

      // Reset the form or perform any other actions after a successful submission
      setDate('');
      setBuyAmount('');
      setBuyNotes('');
      setSellAmount('');
      setSellNotes('');

      // Optionally, you can trigger a callback if needed
      if (onSubmission) {
        onSubmission();
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      // You can handle errors or provide feedback to the user
    }
  };

    

  return (
    <div className="bg-white p-4 rounded-md shadow-md md:w-96 mx-auto">
  <h2 className="text-lg font-semibold mb-4">Buy/Sell Card</h2>

  <div className="mb-4">
    <label htmlFor="commonDate" className="block text-sm font-medium text-gray-700">
      Common Date
    </label>
    <input
      type="date"
      id="commonDate"
      name="commonDate"
      value={date}
      onChange={(e) => {
        setDate(e.target.value);
      }}
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="buyAmount" className="block text-sm font-medium text-gray-700">
      Buy Amount
    </label>
    <input
      type="number"
      id="buyAmount"
      name="buyAmount"
      value={buyAmount}
      onChange={(e) => {
        setBuyAmount(e.target.value);
      }}
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="sellAmount" className="block text-sm font-medium text-gray-700">
      Sell Amount
    </label>
    <input
      type="number"
      id="sellAmount"
      name="sellAmount"
      value={sellAmount}
      onChange={(e) => {
        setSellAmount(e.target.value);
      }}
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="buyNote" className="block text-sm font-medium text-gray-700">
      Buy Note
    </label>
    <textarea
      id="buyNote"
      name="buyNote"
      value={buyNotes}
      onChange={(e) => {
        setBuyNotes(e.target.value);
      }}
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="sellNote" className="block text-sm font-medium text-gray-700">
      Sell Note
    </label>
    <textarea
      id="sellNote"
      name="sellNote"
      value={sellNotes}
      onChange={(e) => {
        setSellNotes(e.target.value);
      }}
      className="mt-1 p-2 border rounded-md w-full"
    />
  </div>

  <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
    Submit
  </button>


</div>

  );
};

export default BuySellCard;
