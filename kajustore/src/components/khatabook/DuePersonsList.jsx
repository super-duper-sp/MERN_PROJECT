// DuePersonsGrid.jsx
import React from "react";

const DuePersonsList = ({ duePersons }) => {
  return (
      <div className="mt-4">
        {duePersons.length === 0 ? (
          <p className="text-gray-600">No persons with due amount.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {duePersons.map((person, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{person.Name}</h2>
                  <p className="text-gray-700 mb-2">Phone: {person.Phone}</p>
                  <p className="text-red-500">Due Amount: {person.DueAmount}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    
  );
};

export default DuePersonsList;
