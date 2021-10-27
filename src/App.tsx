import React, { useState } from "react";
import Logo from "./Logo/Components/Logo";
import Region from "./Houses/Components/Region";
import { regionsList } from "./Houses/Variabels/regions";
import { HouseType } from "./Service/HouseType";
import HousesContainer from "./Houses/Components/HousesContainer";

const App: React.FC = () => {
  const [closeRegionBtn, setCloseRegionBtn] = useState<boolean>(true);
  const [housesOfARegion, setHousesOfARegion] = useState<HouseType[]>([]);

  return (
    <div id="hero">
      <div id="wrapper">
        <Logo />
        <main>
          {regionsList.map((region, index) => (
            <Region
              key={index}
              regionSettings={[region, setCloseRegionBtn]}
              setHousesOfARegion={setHousesOfARegion}
            />
          ))}
          {closeRegionBtn || (
            <HousesContainer
              setCloseRegionBtn={setCloseRegionBtn}
              housesOfARegion={housesOfARegion}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
