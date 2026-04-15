import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCustomers from "./Component/ListCustomers";
import AddCustomer from "./Component/AddCustomer";
import UpdateCustomer from "./Component/UpdateCustomer";
import CustomerInfo from "./Component/CustomerInfo";
import api from "./services/api";

function App() {
  const [customers, setCustomers] = useState([]);


  const loadCustomers = () => {
    api.getAllCustomers()
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  };


  useEffect(() => {
    loadCustomers();
  }, []);

  
  const deleteCustomer = (id) => {
    api.deleteCustomer(id)
      .then(() => loadCustomers())
      .catch(err => console.error(err));
  };


  const updateCustomer = (id, customer) => {
    api.updateCustomer(id, customer)
      .then(() => loadCustomers())
      .catch(err => console.error(err));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ListCustomers
              customers={customers}
              onDelete={deleteCustomer}
            />
          }
        />

        <Route path="/add" element={<AddCustomer />} />

        <Route
          path="/update/:id"
          element={
            <UpdateCustomer
              customers={customers}
              onUpdate={updateCustomer}
            />
          }
        />

        <Route
          path="/info/:id"
          element={<CustomerInfo customers={customers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;