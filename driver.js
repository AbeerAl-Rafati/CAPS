const events = require("./events.js");
const controller = require("./controller.js");

events.on("pickUp", (payload) => {
  controller.pickedUp("pickedUp", payload);

  setTimeout(() => {
    controller.driverPickedUp("pickUp", payload);
  }, 1000);

  setTimeout(() => {
    events.emit("in-transit", payload);
  }, 2000);
});

events.on("inTransit", (payload) => {
  controller.inTransit("inTransit", payload);

  setTimeout(() => {
    controller.driverDelivered("delivered", payload);
  }, 2000);

  setTimeout(() => {
    events.emit("delivered", payload);
  }, 4000);
});

events.on("delivered", (payload) => {
  controller.vendorThanks(payload);

  setTimeout(() => {
    controller.delivered("delivered", payload);
  }, 3000);
});
