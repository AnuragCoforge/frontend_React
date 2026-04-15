import axios from "axios";
const baseUrl = 'http://localhost:4000/customers';

const api = {
    getAllCustomers: () => axios.get(baseUrl),
    getCustomerById: (id) => axios.get(baseUrl + "/" + id),
    addCustomer: (customer) => axios.post(baseUrl, customer),
    updateCustomer:(id,customer) => axios.put(baseUrl + "/" + id, customer),
    deleteCustomer: (id) => axios.delete(baseUrl + "/" + id)
}

export default api;