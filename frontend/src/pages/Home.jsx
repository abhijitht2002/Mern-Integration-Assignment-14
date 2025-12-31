import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCustomers } from "../api/api-helper";

function Home() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

//   const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getAllCustomers();
        setCustomers(data);
      } catch (err) {
        console.error("Error fetching customers", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {/* <h1 className="text-2xl font-semibold">CRM Dashboard</h1> */}
      </div>

      {/* Add Customer */}
      <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Customer
        </button>
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-4">Loading customers...</p>
        ) : (
          <table className="min-w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-center">
                    No customers found
                  </td>
                </tr>
              ) : (
                customers.map((cust) => (
                  <tr key={cust._id} className="border-t">
                    <td className="p-2">{cust.name}</td>
                    <td className="p-2">{cust.email}</td>
                    <td className="p-2">{cust.phone}</td>
                    <td className="p-2">{cust.status}</td>
                    <td className="p-2 space-x-2">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;
