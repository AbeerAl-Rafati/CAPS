const events = require('./events.js');
// const faker = require('faker');

require('dotenv').config();
let STORE = process.env.STORE
const payload = require('./vendor')

require('./driver.js');
require('./vendor.js');




events.emit('pickup', payload);
events.emit('in-transit', payload);
events.emit('delivered', payload);