import React, { useState } from "react";
import Logo from "./Logo/Components/Logo";
import Region from "./Houses/Components/Region";
import { regionsList } from "./Houses/Variabels/regions";
import { HouseType } from "./Service/HouseType";
import HousesContainer from "./Houses/Components/HousesContainer";

const App: React.FC = () => {
  const [closeRegionBtn, setCloseRegionBtn] = useState<boolean>(true);
  const [housesList, setHousesList] = useState<HouseType[]>([]);

  return (
    <div id="hero">
      <div id="wrapper">
        <Logo />
        <main>
          {regionsList.map((region, index) => (
            <Region
              key={index}
              regionSettings={[region, setCloseRegionBtn]}
              setHousesList={setHousesList}
            />
          ))}
          {closeRegionBtn || (
            <HousesContainer
              setCloseRegionBtn={setCloseRegionBtn}
              houses={housesList}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
