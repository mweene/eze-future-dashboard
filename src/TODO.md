# WHAT TO DO TOMORROW

1. make sure the form can add a new user with complete details
2. handle the data on the backend, handle the conversions
3. make the form look decent with proper spacing
4. seperate api calls on the frontend into a resuable utility global object
5. add actions functionalities
  I. update
  II. delete
  III. view full client info
  IV. bulk select
  V. give the user feedback on successfull crud operation
6. handle uploads
  -- and how to store the data on the backend[!drive.google]
  -- basic lookup of the data
9. add filters
  -- allocated
  -- authorized
  -- pending balances
  -- site filters
  ## future filters
  -- dates
  -- auth payments
  -- beacon payments
  -- sales
10. printing out the records
11. file storage
  -- site plans
  -- company docs letter of sale, allocation forms etc...
12. admin adding to other tables
13. make the thing responsive
14. advanced search to query from the db


[form data object]
formdata = {
    "name": "wendy simapuka",
    "nrc": "331122/67/1",
    "phone": "0975237100",
    "address": "garden compound lusaka",
    "allocated": true,
    "allocation_date": "2025-12-04",
    "authorized": true,
    "authorization_date": "2026-01-06",
    "witness_name": "kelvin momo",
    "witness_nrc": "330010/10/1",
    "witness_phone": "0976551227",
    "relationship": "uncle",
    "letter_of_sale": {
        "0": {}
    },
    "authorization_letter": {
        "0": {}
    },
    "nrc_url": {
        "0": {}
    },
    "receipts": {
        "0": {}
    },
    "site_name": "",
    "plot_size": "",
    "plot_no": "",
    "total_amount": "12000",
    "amount_paid": "12000",
    "balance": "0",
    "sales_date": "2025-12-11"
}
