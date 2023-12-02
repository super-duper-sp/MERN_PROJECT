import React from "react";

const DashboardCard = ({info}) => {
  return (
    <>
     

      <div className="flex w-full ">
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-yellow-100 shadow-sm rounded-lg p-4">
                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                        {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">{info.name}</div>
                        <div className="font-bold text-lg">₹<span id="yearly-cost-result">{info.amount}</span></div>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  );
};

export default DashboardCard;
