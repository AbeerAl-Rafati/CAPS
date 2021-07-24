const events = require("./events.js");
// const controller = require("./controller.js");
const faker = require("faker");
require("./driver.js");
require("./vendor.js");
// require("dotenv").config();
// let STORE = process.env.STORE;

let payload = {
  randomStor: faker.company.companyName(),
  orderID: faker.datatype.number(),
  randomName: faker.name.findName(),
  randomCity: faker.address.city(),
};

let order = () => {
  // setTimeout(() => events.emit("pickup", payload), 5000);
  setInterval(() => events.emit("pickUp", payload), 5000);
};

order();

// events.emit("pickUp", payload);
// events.emit("in-transit", payload);
// events.emit("delivered", payload);

module.exports = { payload };

// console.log(faker);
// console.log(faker.name.findName());
// console.log(faker.address.city());
// console.log(faker.company.companyName());
// console.log(faker.datatype.number());
