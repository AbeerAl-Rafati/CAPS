


function pickedUp(event, payload) {
  console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}


let driverPickedUp = (event, payload) => {
  console.log(`Driver: ${event} ${payload.orderID}`);
}




let inTransit = (event, payload) => {
  console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}


let vendorThanks = (payload) => {
  console.log(`Vendor : Thank you for delivering ${payload.orderID}`);
}

let delivered = (event, payload) => {
  console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}


let driverDelivered = (event, payload) => {
  console.log(`Driver: ${event} ${payload.orderID}`);
}


module.exports = {
  pickedUp,
  driverPickedUp,
  inTransit,
  vendorThanks,
  delivered,
  driverDelivered
}
