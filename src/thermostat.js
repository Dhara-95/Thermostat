'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE = 18;
    this.DEFAULT_TEMPERATURE =20;
    this.temperature = this.DEFAULT_TEMPERATURE;
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
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
    else {
      return this.temperature === this.MAX_TEMP_PSM_ON;
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

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE) {
      return "low-usage";
    }
    else if (this.temperature >= this.MEDIUM_ENERGY_USAGE && this.temperature <= this.MAX_TEMP_PSM_ON) {
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  };
};
