
const RestaurantCard = ({
    name,
    cuisines,
    locality,
    cloudinaryImageId
}) => {
    return (
        <div className="card">
            <div className="card_img_container">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} alt="restaurant-img" />
            </div>
            <h2>{name}</h2>
            <h3>{...cuisines.join(", ")}</h3>
            <h4>{locality}</h4>
        </div>
    );
}

export default RestaurantCard;