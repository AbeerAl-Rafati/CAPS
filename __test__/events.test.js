"use strict";
const faker = require("faker");
const events = require("../events");
require("../driver");
require("../vendor");

describe("events test", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global.console, "log");
  });

  let payload = {
    randomStor: faker.company.companyName(),
    orderID: faker.datatype.number(),
    randomName: faker.name.findName(),
    randomCity: faker.address.city(),
  };

  it("pickup test", () => {
    events.emit("pickUp", payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalled();
  });

  it("delivered test", () => {
    events.emit("delivered", payload);
    expect(console.log).toHaveBeenCalled();
  });

  it("inTransit test", () => {
    events.emit("inTransit", payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalled();
  });
});
