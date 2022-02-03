const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Olvera",
    address: "Queretaro 14",
    city: "San Miguel",
    state: "Guanajuato",
    country: "USA",
    postal_code: 895200
  },
  items: [
    {
      item: "Laptop HP",
      description: "Se mojo",
      quantity: 3,
      amount: 12000
    },
    {
      item: "Disco duro",
      description: "ya demenlo",
      quantity: 4,
      amount: 500
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
