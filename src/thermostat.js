'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    this.temperature++;
    return this.temperature;
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
    return this.temperature;
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };
};
