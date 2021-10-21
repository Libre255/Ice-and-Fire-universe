import { useEffect, useState } from "react"
import { getHouses } from "../../Service/getHouses";
import { HousesType } from "../../Service/HousesType"

interface UseHousesHook {
    houses: HousesType[];
    error: Error | undefined;
}

export const useHouses = ():UseHousesHook => {
    const [houses, setHouses] = useState<HousesType[]>([]);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        (async() => {
                try {   
                    const housesData = await getHouses();
                    if(!housesData) throw new Error("Couldnt not fetch houses, error occured at useHouses hook")
                    setHouses(housesData);
                } catch (err) {
                    if (err instanceof Error) {
                        setError(err);
                    };           
                }
            }
        )()
    }, [])

    return {houses, error}
}