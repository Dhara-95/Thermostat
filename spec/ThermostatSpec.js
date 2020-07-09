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
});
