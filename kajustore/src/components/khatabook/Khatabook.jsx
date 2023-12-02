
import DuePersonsList from "./DuePersonsList";
import DueMeter from "./DueMeter";
import { useState , useEffect } from "react";
import axios from "axios";




const Khatabook = () => {

  const[personsWithDue,setPersonWithDueList]=useState([])
  // setPersonWithDueList("ok")



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/API/PersonsWithDue'); // Replace with your actual backend API endpoint
        setPersonWithDueList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once after the initial render

 // Calculate total due amount, handling undefined with optional chaining
const totalDue = personsWithDue?.reduce((total, entry) => total + entry.DueAmount, 0) || 0;



  return (
    <div className="flex h-screen">
      {/* <!-- Main Content --> */}
      <div className="flex-1 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* <!-- Right Content --> */}

          <div className="bg-white p-4 rounded-lg shadow">
            <DuePersonsList duePersons={personsWithDue} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <DueMeter meterAmount={totalDue} />
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Khatabook;
