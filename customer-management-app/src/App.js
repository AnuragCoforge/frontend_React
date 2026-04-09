import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCustomers from "./Component/ListCustomers";
import AddCustomer from "./Component/AddCustomer";
import UpdateCustomer from "./Component/UpdateCustomer";
import CustomerInfo from "./Component/CustomerInfo";
import Customer from "./models/Customer";

function App() {
  const [customers, setCustomers] = useState([
    new Customer(10, "Swapna", "hyd"),
    new Customer(11, "Anurag", "knp"),
    new Customer(12, "Khushboo", "lko"),
  ]);

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const updateCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map(c =>
        c.id === updatedCustomer.id ? updatedCustomer : c
      )
    );
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

        <Route
          path="/add"
          element={<AddCustomer customers={customers} setCustomers={setCustomers} />}
        />

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