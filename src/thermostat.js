'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerSaver = true;
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

  isPowerSaverOn() {
    return this.powerSaver === true;
  };

  switchPowerSaverOff() {
    return this.powerSaver = false;
  };

  switchPowerSaverOn() {
    return this.powerSaver = true;
  };
};
