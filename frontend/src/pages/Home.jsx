import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCustomer, deleteCustomer, getAllCustomers } from "../api/api-helper";
import CustomerContainer from "../components/CustomerContainer";
import AddCustomerModal from "../components/AddCustomerModal";

function Home() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  //   const name = localStorage.getItem("name");

  const getCustomers = async () => {
    try {
      const data = await getAllCustomers();
      setCustomers(data);
    } catch (err) {
      console.error("Error fetching customers", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCustomer = async (formData) => {
    await addCustomer(formData);
    getCustomers();
  };

  const handleDeleteCustomer = async (id) => {
    await deleteCustomer(id);
    getCustomers();
  }

  const handleEditCustomer = async (id, updatedData) => {}

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Add Customer */}
      <div className="mb-4">
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      <div>
        {loading ? (
          <p className="p-4">Loading customers...</p>
        ) : (
          <CustomerContainer customers={customers} onDeleteCustomer={handleDeleteCustomer} onEditCustomer={handleEditCustomer}/>
        )}
      </div>

      <AddCustomerModal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAdd={handleAddCustomer}
      />
    </div>
  );
}

export default Home;
