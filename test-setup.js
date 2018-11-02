require('raf/polyfill');
require('browser-env')();

global.navigator.geolocation = {};
let geolocate = require('mock-geolocation');
geolocate.use()
