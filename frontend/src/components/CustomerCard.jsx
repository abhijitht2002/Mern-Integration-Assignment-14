import React from "react";

function CustomerCard({ customer, onDelete, onEdit }) {
  const [phone, email] = customer.contact_info
    .split(", ")
    .map((item) => item.trim());

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => onEdit(customer)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(customer._id)}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          Delete
        </button>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{customer.name}</h2>

      {phone && <p className="text-sm text-gray-600 mt-1">📞 {phone}</p>}

      {email && <p className="text-sm text-gray-600">📧 {email}</p>}

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full
          ${
            customer.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        {customer.status}
      </span>
    </div>
  );
}

export default CustomerCard;
