import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
} from "../api/api-helper";
import CustomerContainer from "../components/CustomerContainer";
import CustomerFormModal from "../components/CustomerFormModal";

function Home() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
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
  };

  const handleEditCustomer = async (customer) => {
    console.log("Editing customer:", customer);
    const [phone, email] = customer.contact_info
      .split(", ")
      .map((item) => item.trim());

    setEditingCustomer({
      _id: customer._id,
      name: customer.name,
      email: email,
      phone: phone,
      status: customer.status,
    });

    setShowForm(true);
  };

  const handleSubmitCustomer = async (formData) => {
    if (editingCustomer) {
      console.log("Editing customer:", formData);
      const res = await updateCustomer(editingCustomer._id, formData);
      console.log("Edit customer response:", res);
    } else {
      console.log("Adding new customer:", formData);
      const res = await addCustomer(formData);
      console.log("Add customer response:", res);
    }

    setEditingCustomer(null);
    setShowForm(false);
    getCustomers();
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Add Customer */}
      <div className="mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      <div>
        {loading ? (
          <p className="p-4">Loading customers...</p>
        ) : (
          <CustomerContainer
            customers={customers}
            onDeleteCustomer={handleDeleteCustomer}
            onEditCustomer={handleEditCustomer}
          />
        )}
      </div>

      <CustomerFormModal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingCustomer(null);
        }}
        onSubmit={handleSubmitCustomer}
        initialData={editingCustomer}
      />
    </div>
  );
}

export default Home;
