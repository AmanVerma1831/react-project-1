import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "./constants";
import { restaurantData } from "./constants";

const Body = () => {

    // const [restaurants, setRestaurants] = useState(restaurantList)
    console.log(restaurantData[0].data);


    return (
        <div className="body-container">
            <div className="restaurant-list">
                {/* {restaurantList.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    )
                })} */}
                {restaurantData.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.resId} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;

