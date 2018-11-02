import React from 'react';
import { render } from 'react-dom';
import useGeolocation from './';

function App() {
  let value = useGeolocation();
  return <div/>;
}

render(<App />, window.root);
