import axios from "axios";

const baseUrl = "http://localhost:4400/api/v1";

export async function getClientsTableData() {
  try {
    const response = await axios.get(`${baseUrl}/dashboard`);
    const data = await response.data;
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

export async function addNewClient(clientData) {
  try {
    const response = axios.post(`${baseUrl}/dashboard`, clientData);
    const data = (await response).data;
    console.log(data, " i failed");
  } catch (error) {
    console.error(error.message);
  }
}

export function dashboardHandler(clientData) {
  try {
    if (!Array.isArray(clientData) && Object.keys(clientData).length > 0)
      console.log("it's valid");
    console.error("not valid");
  } catch (error) {
    console.error(error.message);
  }
}
