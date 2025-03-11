import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

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
        const data = await fetch("https://dummyjson.com/recipes");
        const json = await data.json();
        // console.log(json?.recipes);
        setAllRestaurants(json?.recipes);
        setFilteredRestaurants(json?.recipes);
    }

    if (!allrestaurants) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No Restaurants Match Your Result</h1>

    return allrestaurants?.length === 0 ? (<Shimmer />) : (
        <div className="body-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search your favourite restaurant..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allrestaurants);
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
                            <Link className="Link" to={"/restaurant/" + restaurant.id} key={restaurant.id} >
                                <RestaurantCard {...restaurant} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;

