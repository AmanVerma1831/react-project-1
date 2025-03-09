// import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({
    name,
    cuisine,
    // cloudinaryImageId,
    locality,
    image
}) => {
    return (
        // <div className="card">
        //     <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant-img" />
        //     <h2>{name}</h2>
        //     <h3>{cuisines.join(", ")}</h3>
        //     <h4>{lastMileTravelString}</h4>
        // </div>
        <div className="card">
            <img src={image.url} alt="restaurant-img" />
            <h2>{name}</h2>
            <h3>{cuisine.map((cuisine) => {
                return (cuisine.name)
            }).join(", ")}</h3>
            <h4>{locality.name}</h4>
        </div>
    );
}

export default RestaurantCard;