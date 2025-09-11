import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const clientAPI = {
  //fetch all clients
  fetchAllClients: () => axios.get(`/clients`),
  //fetch a single client by id
  fetchClient: (client_id) => axios.get(`/clients/${client_id}`),
  //add new client
  addClient: (clientData) => axios.post(`/clients`, clientData),
  //update an existing client
  updateClient: (client_id, clientData) =>
    axios.put(`/clients/${client_id}`, clientData),
  //delete a client by id
  deleteClient: (client_id) => axios.delete(`/clients/${client_id}`),
};
