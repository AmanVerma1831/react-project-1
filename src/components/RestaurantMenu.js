import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../assets/restaurantMenu.css"

function RestaurantMenu() {

    const { resId } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState({});

    useEffect(() => {
        getRestaurantMenuInfo();
    }, [])

    async function getRestaurantMenuInfo() {
        const data = await fetch("https://dummyjson.com/recipes/" + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json);
    }

    return (restaurantMenu?.lenght === 0) ? (<Shimmer />) : (
        <div className="menu-card-container">
            <div className="menu-card u-clearfix">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{restaurantMenu.id}</span>
                    <span className="card-author subtle">{restaurantMenu.cuisine}</span>
                    <h2 className="card-title">{restaurantMenu.name}</h2>
                    <span className="card-description subtle">{restaurantMenu.ingredients}</span>
                    <p>Rating - {restaurantMenu.rating} ⭐</p>
                    <p>{restaurantMenu.mealType}</p>
                    <div className="card-read">Read</div>
                    <span className="card-tag card-circle subtle">C</span>
                </div>
                <div className='resturant-menu-image-container'>
                    <img src={restaurantMenu.image} alt="" className="card-media" />
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;