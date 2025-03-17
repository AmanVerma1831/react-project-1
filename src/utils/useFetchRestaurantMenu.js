import { useState, useEffect } from 'react';
import { FETCH_RES_URL } from './constants';

function useFetchRestaurantMenu(resId) {

    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenuInfo();
    }, [])

    async function getRestaurantMenuInfo() {
        const data = await fetch(FETCH_RES_URL + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json);
    }

    return restaurantMenu;
}

export default useFetchRestaurantMenu;