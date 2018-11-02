'use strict';
let test = require('ava');
let geolocate = require('mock-geolocation');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useGeolocation = require('./');



function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  geolocate.send({
    latitude: 50,
    longitude: 10,
    accuracy: 5,
    timestamp: 3000
  });

  function Component() {
    let value = useGeolocation();
    return h('div', value);
  }

  let geo = render(h(Component));
  t.is(geo.toJSON().props.fetchingPosition, false);
  t.is(geo.toJSON().props.position, undefined);
  t.is(geo.toJSON().props.error, undefined);



  geo.update(h(Component))
  t.is(geo.toJSON().props.fetchingPosition, true);
  t.is(geo.toJSON().props.position, undefined);
  t.is(geo.toJSON().props.error, undefined);
});
