/*
 * Android Data Roaming Setting
 * Cordova 2.2.0
 * Email: rodrigo[dot]gontijo[at]hotmail[dot]com
 * Author: Rodrigo Augusto Gontijo
 * Date: 05/25/2016
 */

var exec = require('cordova/exec');

var DataRoamingSettings = {
  goToDataRoamingSettings: function(successCallback, failureCallback){
		return exec(
			successCallback,
			failureCallback,
			'DataRoamingSettings',
			'goToDataRoamingSettings',
			[]);
	}
};

module.exports = DataRoamingSettings;
