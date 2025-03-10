import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "./constants";
import Shimmer from "./Shimmer"

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));

    return filterData;
}

const Body = () => {

    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json.data?.cards.slice(3));
        setFilteredRestaurants(json.data?.cards.slice(3));
        console.log(json.data?.cards.slice(3));
    }

    if (!allrestaurants) return null;

    if (filteredRestaurants?.length === 0) return <h1>No Restaurants Match Your Result</h1>

    return allrestaurants?.length === 0 ? (<Shimmer />) : (
        <div className="body-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, allrestaurants);
                        // update the state - restaurants
                        setFilteredRestaurants(data);

                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-container">
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => {
                        return (
                            <>
                                <RestaurantCard {...restaurant.card?.card?.info} key={restaurant.length} />
                                {/* <div>{restaurant.card?.card?.info.id}</div> */}
                                {/* <div>Aman</div> */}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;

