import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

RMFunctions.wildlife();

RMFunctions.elevation();

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  ); 
}

