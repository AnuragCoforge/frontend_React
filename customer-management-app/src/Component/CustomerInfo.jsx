import { useParams, useNavigate } from "react-router-dom";

function CustomerInfo({ customers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find(c => c.id === Number(id));

  return (
    <div className="container mt-4">
      <h2>Customer Info</h2>

      <p><b>ID:</b> {customer.id}</p>
      <p><b>Name:</b> {customer.name}</p>
      <p><b>City:</b> {customer.city}</p>

      <button
        className="btn btn-secondary"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default CustomerInfo;