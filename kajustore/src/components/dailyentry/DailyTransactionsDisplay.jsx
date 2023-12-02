import React from 'react';

const TransactionCard = ({ transaction }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <p className="text-gray-600 mb-2">{new Date(transaction.date).toLocaleString()}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-semibold">Sell Amount:</span>
        <span>{transaction.sellAmount}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-semibold">Buy Amount:</span>
        <span>{transaction.buyAmount}</span>
      </div>
      {transaction.notes && (
        <div>
          <span className="text-gray-800 font-semibold">Notes:</span> {transaction.notes}
        </div>
      )}
    </div>
  );
};

const DailyTransactionsDisplay = ({ transactions }) => {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h2 className="text-lg text-gray-800 font-semibold mb-4">
        Daily Transactions ({today})
      </h2>

      {transactions?.length === 0 ? (
        <p className="text-gray-600">No transactions recorded for today.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transactions?.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyTransactionsDisplay;
