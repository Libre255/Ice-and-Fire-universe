import { useEffect, useState } from "react";
import { getHouses } from "../../Service/getHouses";
import { HouseType } from "../../Service/HouseType";

interface UseHousesHook {
  listOfHouses: HouseType[];
  error: Error | undefined;
}

export const useHouses = (regionName: string): UseHousesHook => {
  const [listOfHouses, setListOfHouses] = useState<HouseType[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      try {
        const housesData = await getHouses(regionName);
        if (!housesData)
          throw new Error(
            `Couldnt not fetch houses from region: ${regionName}, error occured at useHouses hook`
          );
        setListOfHouses(housesData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      }
    })();
  }, [regionName]);

  return { listOfHouses, error };
};
