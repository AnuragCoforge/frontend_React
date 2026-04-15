import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateCustomer({ customers, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const customer = customers.find(c => c.id === Number(id));
    if (customer) {
      setName(customer.name);
      setCity(customer.city);
    }
  }, [customers, id]);


  const handleUpdate = () => {
    const updatedCustomer = {
      id: Number(id), 
      name,
      city
    };

    onUpdate(Number(id), updatedCustomer); 
    navigate("/");
  };

 
  if (!customers.length) {
    return <h3 className="mt-4">Loading...</h3>;
  }

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