import React from "react";
import { HouseType } from "../../Service/HouseType";
import { useHouses } from "../Hooks/useHouses";
import { RegionsType } from "../Variabels/regions";

interface Props {
  regionSettings: [RegionsType, React.Dispatch<React.SetStateAction<boolean>>];
  setHousesOfARegion: React.Dispatch<React.SetStateAction<HouseType[]>>;
}

const Region: React.FC<Props> = ({ regionSettings, setHousesOfARegion }) => {
  const [regionInfo, setCloseRegionBtn] = regionSettings;
  const { listOfHouses, error } = useHouses(regionInfo.name);

  const onRegionClick = () => {
    setCloseRegionBtn(false);
    setHousesOfARegion(listOfHouses);
  };

  if (error) {
    return <h2 className="errorMsg">{error.message}</h2>;
  }
  return (
    <section>
      <img src={regionInfo.imgUrl} alt="Region Logo" onClick={onRegionClick} />
    </section>
  );
};

export default Region;
