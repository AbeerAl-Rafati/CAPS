const events = require('./events.js');
const controller = require('./controller.js');


let payload = {
  store: STORE,
  orderID: Math.floor(Math.random() * 100),
  customer: 'abeer',
  address: 'amman'
};


let order = () => {

  setTimeout(() => events.emit('pickup', payload), 5000)

};

order();

module.exports = { payload };