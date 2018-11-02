"use strict";
let { useState, useEffect } = require("react");

function useGeolocation({
  enableHighAccuracy = false,
  timeout = Infinity,
  maximumAge = 0
} = {}) {
  let [geolocationState, setGeolocationState] = useState({
    fetchingPosition: false,
    position: undefined,
    error: undefined
  });

  useEffect(
    () => {
      if (typeof window !== "object" || !("geolocation" in window.navigator)) {
        setGeolocationState({
          fetchingPosition: false,
          position: undefined,
          error: {
            code: 2,
            message: 'Position Unavailable'
          }
        });

        return;
      }

      setGeolocationState({
        fetchingPosition: true,
        position: undefined,
        error: undefined
      });

      navigator.geolocation.getCurrentPosition(
        position => {
          setGeolocationState({
            fetchingPosition: false,
            position,
            error: undefined
          });
        },
        error => {
          setGeolocationState({
            fetchingPosition: false,
            position: undefined,
            error
          });
        },
        { enableHighAccuracy, timeout, maximumAge }
      );
    },
    [enableHighAccuracy, timeout, maximumAge]
  );

  return geolocationState;
}

module.exports = useGeolocation;
