import React from "react";
import howManyParks from "./parks/howManyParks";
import { elevation as Elevation } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  Elevation();

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;
