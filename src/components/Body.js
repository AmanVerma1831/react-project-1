import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/Helper";
import Shimmer from "./Shimmer";
import CTA from "./CTA";
import Pagination from "./Pagination";

const Body = () => {

    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Add state for current page
    const itemsPerPage = 12; // Items per page

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://dummyjson.com/recipes/");
        const json = await data.json();
        // console.log(json?.recipes);
        setAllRestaurants(json?.recipes);
        setFilteredRestaurants(json?.recipes);
    }

    // Calculate pagination values
    const totalPages = Math.ceil(allrestaurants.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRestaurants = filteredRestaurants.slice(startIndex, endIndex);

    if (!allrestaurants) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No Restaurants Match Your Result</h1>

    return allrestaurants?.length === 0 ? (<Shimmer />) : (
        <section className="flex justify-center">
            <div className="max-w-screen-xl">
                <div className="flex mt-12 justify-between">
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <input
                            type="text"
                            className="border-gray-700 border-1 px-4 py-3 w-1/2"
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
                                setCurrentPage(1); // Reset to first page on new search

                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className="align-middle hidden md:flex">
                        {/* Pagination component */}
                        {totalPages > 0 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex flex-wrap">
                        {currentRestaurants.map((restaurant) => {
                            return (
                                <Link className="md:w-1/4 p-3 mb-12" to={"/restaurant/" + restaurant.id} key={restaurant.id} >
                                    <RestaurantCard {...restaurant} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="align-middle mx-auto my-10">
                    {/* Pagination component */}
                    {totalPages > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}
                </div>
                <div className="my-10 md:mx-auto mx-4">
                    <CTA />
                </div>
            </div>
        </section>
    )
}

export default Body;

