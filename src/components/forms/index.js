const data = {
  name: "mweene harrison",
  nrc: "449946/10/1",
  phone: "0977672667",
  address: "shadrecks, matero",
  witness_name: "darius mwiitwa",
  witness_phone: "0977662151",
  relationship: "friend",
  site_name: "site b",
  plot_size: "20 x 20",
  plot_number: "12",
  price: "6999",
  amount_paid: "6999",
  balance: "0",
  start_date: "2025-12-10",
  doctype: "Agreement",
  docurl: "https://react.dev/link/warning-keys",
};

const queryData = async (url, payload, method = "GET") => {
  try {
    if (method === "POST") {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok)
        throw new Error("Network response was not ok: " + response.statusText);

      return response.json();
    } else {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error("Network response was not ok: " + response.statusText);
      return response.json();
    }
  } catch (error) {
    console.error(error.message);
  }
};

//add new clients
const muzo = {
  name: "muzo alphonso",
  NRC: "505050/17/1",
  phone: "0961003711",
  address: "chiwempala, ndola",
};

const postMuzo = await queryData(
  "http://localhost:4000/api/clients",
  muzo,
  "POST",
);
console.log(postMuzo);

const clients = await queryData("http://localhost:4000/api/clients");
console.log(clients.data);
