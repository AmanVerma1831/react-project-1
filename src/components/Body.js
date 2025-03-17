import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/Helper";
import Shimmer from "./Shimmer";
import CTA from "./CTA";

const Body = () => {

    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
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
        <section className="flex justify-center">
            <div className="max-w-screen-xl">
                <div className="flex justify-center mt-12">
                    <input
                        type="text"
                        className="border-gray-700 border-1 px-4 py-3 w-1/4"
                        placeholder="Search your favourite restaurant..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="bg-gray-700 px-4 py-3 text-white uppercase cursor-pointer border-gray-700 border-1"
                        onClick={() => {
                            const data = filterData(searchText, allrestaurants);
                            setFilteredRestaurants(data);

                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex flex-wrap">
                        {filteredRestaurants.map((restaurant) => {
                            return (
                                <Link className="md:w-1/4 p-3 mb-12" to={"/restaurant/" + restaurant.id} key={restaurant.id} >
                                    <RestaurantCard {...restaurant} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="my-10 mx-auto">
                    <CTA />
                </div>
            </div>
        </section>
    )
}

export default Body;

