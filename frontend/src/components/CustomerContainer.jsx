import React from 'react'
import CustomerCard from './CustomerCard'

function CustomerContainer({ customers, onDeleteCustomer, onEditCustomer }) {
    if(customers.length === 0){
        return <p className="text-gray-500 text-center mt-10">No customers found</p>
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {customers.map((customer) => (
        <CustomerCard key={customer._id} customer={customer} onDelete={onDeleteCustomer} onEdit={onEditCustomer}/>
      ))}
    </div>
  )
}

export default CustomerContainer