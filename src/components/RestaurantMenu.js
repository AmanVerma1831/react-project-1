import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import "../assets/restaurantMenu.css"
import useFetchRestaurantMenu from '../utils/useFetchRestaurantMenu';

function RestaurantMenu() {

    const { resId } = useParams();

    const restaurantMenu = useFetchRestaurantMenu(resId);

    return (!restaurantMenu) ? (<Shimmer />) : (
        <div className="menu-card-container">
            <div className="menu-card u-clearfix">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{restaurantMenu.id}</span>
                    <span className="card-author subtle">{restaurantMenu.cuisine}</span>
                    <h2 className="card-title">{restaurantMenu.name}</h2>
                    <span className="card-description subtle">{restaurantMenu.ingredients}</span>
                    <p>Rating - {restaurantMenu.rating} ⭐</p>
                    <p>Meal Type - {restaurantMenu.mealType}</p>
                    <p>PrepTime - {restaurantMenu.prepTimeMinutes} Minutes</p>
                    <p>Cook Time - {restaurantMenu.cookTimeMinutes} Minutes</p>
                    <p>Cuisine - {restaurantMenu.cuisine}</p>
                    <p>Calories Per Serving - {restaurantMenu.caloriesPerServing}</p>
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