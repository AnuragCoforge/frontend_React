import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function UpdateCustomer({ customers, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find(c => c.id === Number(id));

  const [name, setName] = useState(customer.name);
  const [city, setCity] = useState(customer.city);

  const handleUpdate = () => {
    onUpdate({ ...customer, name, city });
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Update Customer</h2>

      <input
        className="form-control mb-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default UpdateCustomer;