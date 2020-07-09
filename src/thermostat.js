'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_TEMP_PWS_ON = 25;
    this.MAX_TEMP_PWS_OFF = 32;
    this.temperature = 20;
    this.powerSaver = true;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
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

  isMaximumTemperature() {
    if (this.isPowerSaverOn() === false) {
      return this.temperature === this.MAX_TEMP_PWS_OFF;
    }
    else {
      return this.temperature === this.MAX_TEMP_PWS_ON;
    }
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
