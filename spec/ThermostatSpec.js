'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe('thermostat set to default value', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('up function', function() {
    it('increases the temperature by 1', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('down function', function() {
    it('decreases the temperature by 1', function() {
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('power saving mode', function() {
    it('turns power saving mode on by default', function() {
      expect(thermostat.isPowerSaverOn()).toBe(true);
    });

    it('can switch power saving mode off', function() {
      thermostat.switchPowerSaverOff();
      expect(thermostat.isPowerSaverOn()).toBe(false);
    });

    it('can switch power saving mode back on', function() {
      thermostat.switchPowerSaverOff();
      expect(thermostat.isPowerSaverOn()).toBe(false);
      thermostat.switchPowerSaverOn();
      expect(thermostat.isPowerSaverOn()).toBe(true);
      expect(thermostat)
    });
  });

  describe('when power saving mode is on', function() {
    it('has a maxiumum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function () {
    it('has a maxiumum temperature of 32 degrees', function () {
      thermostat.switchPowerSaverOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('reset function', function() {
    it('resets the temperature to the default of 20 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('display useage levels', function() {
    it('states low-useage if temp below 18 degrees', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    
    it('states meduim-useage if temp between 18 and 25 degrees', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('states high-usage if temp above 25 degrees', function() {
      thermostat.powerSaver = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
