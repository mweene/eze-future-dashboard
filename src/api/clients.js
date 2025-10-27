import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const clientAPI = {
  //fetch all clients
  fetchAllClients: () => axios.get(`/clients`),

  //fetch a single client by id
  fetchClient: (client_id) => axios.get(`/clients/${client_id}`),

  //add new client
  addClient: async (clientData) => {
    try {
      const response = await axios.post(`/clients`, clientData);
      return response;
    } catch (error) {
      console.error("Failed to add new client:", error);
    }
  },

  //update an existing client
  updateClient: async (client_id, clientData) => {
    try {
      const response = await axios.put(`/clients/${client_id}`, clientData);
      return response;
    } catch (error) {
      console.error("Failed to add new client:", error);
    }
  },

  //delete a client by id
  deleteClient: (client_id) => axios.delete(`/clients/${client_id}`),
};
