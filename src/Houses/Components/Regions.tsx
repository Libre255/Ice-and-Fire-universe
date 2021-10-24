import React from "react";
import { RegionsType } from "../Variabels/regions";

interface Props {
  regionInfo: RegionsType;
}

const Regions: React.FC<Props> = ({ regionInfo }) => {
  return (
    <section>
      <img src={regionInfo.imgUrl} alt="Region Logo" />
    </section>
  );
};

export default Regions;
