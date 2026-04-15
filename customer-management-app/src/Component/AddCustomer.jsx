import React, { useEffect, useState } from "react";
import Customer from "../models/Customer";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddCustomer({}) {
  const [customer, setCustomer] = useState(
    new Customer('', "", "")
  );

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

//   useEffect(() => {
//     console.log(customers);
//   }, [customers]);

  
const addCustomer = (event) => {
    event.preventDefault();

    api.addCustomer({
      id: Number(customer.id),
      name: customer.name,
      city: customer.city
    })
    .then(() => {
      navigate("/"); 
    })
    .catch(err => console.error(err));
  };


  return (
    <div className="container-fluid mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-3">Add Customer</h2>

        <form onSubmit={addCustomer}>
          <div className="mb-2">
            <label className="form-label">Customer Id</label>
            <input
              type="text"
              name="id"
              className="form-control"
              value={customer.id}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Customer Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={customer.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Customer City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={customer.city}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;