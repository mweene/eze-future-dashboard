import axios from "axios";
const formdata = {
  name: "wendy simapuka",
  nrc: "331122/67/1",
  phone: "0975237100",
  address: "garden compound lusaka",
  allocated: true,
  allocation_date: "2025-12-04",
  authorized: true,
  authorization_date: "2026-01-06",
  witness_name: "kelvin momo",
  witness_nrc: "330010/10/1",
  witness_phone: "0976551227",
  relationship: "uncle",
  letter_of_sale: {
    0: {},
  },
  authorization_letter: {
    0: {},
  },
  nrc_url: {
    0: {},
  },
  receipts: {
    0: {},
  },
  site_name: "site A",
  //site_id: 1,
  plot_size: "20mx20m",
  plot_no: "3",
  total_amount: "12000",
  amount_paid: "12000",
  balance: "0",
  sales_date: "2025-12-11",
};

async function postData(endpoint, payload) {
  //errors
  // 1. not null plots.site_id
  try {
    const url = `http://localhost:4040/api/${endpoint}`;
    const response = await axios.post(url, payload);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
