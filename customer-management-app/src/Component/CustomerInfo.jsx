import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function CustomerInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCustomerById(id)
      .then((res) => {
        setCustomer(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <h3>Loading customer information...</h3>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="container mt-4">
        <h3>Customer not found</h3>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Customer Info</h2>

      <p><b>ID:</b> {customer.id}</p>
      <p><b>Name:</b> {customer.name}</p>
      <p><b>City:</b> {customer.city}</p>

      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default CustomerInfo;