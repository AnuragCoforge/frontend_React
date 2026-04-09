import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function ListCustomers({ customers, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Customer List</h2>

      <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>
        Add Customer
      </button>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.city}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => navigate(`/update/${c.id}`)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>

                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => navigate(`/info/${c.id}`)}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(c.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCustomers;
