import React from "react";
import { useGeolocation } from "react-use";

const Geolocation = () => {
  const state = useGeolocation();
  return (
    <div>
      <h4 className="mb-3">useing Geolocation hooks</h4>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Geolocation;
