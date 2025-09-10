import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const clientAPI = {
  //fetch all clients
  fetchAllClients: () => axios.get(`/clients`),
  //fetch a single client by id
  fetchClient: (client_id) => axios.get(`/clients/${client_id}`),
  //add new client
  addClient: (data) => axios.post(`/clients`, data),
  //update an existing client
  updateClient: (client_id, data) => axios.put(`/clients/${client_id}`, data),
};
