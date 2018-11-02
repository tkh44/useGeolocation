# `@rehooks/useGeolocation`

> React hook for Geolocation

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/Geolocation
```

## Usage

```js
import useGeolocation from '@rehooks/Geolocation';

function MyComponent() {
  let value = useGeolocation();
  // value == Geolocation
  return <div/>;
}
```
