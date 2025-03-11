
const RestaurantCard = ({
    name,
    cuisine,
    rating,
    image
}) => {
    return (
        <div className="card">
            <div className="card_img_container">
                <img src={image} alt="restaurant-img" />
            </div>
            <h2>{name}</h2>
            <h3>{cuisine}</h3>
            <h4>Rating : {rating}</h4>
        </div>
    );
}

export default RestaurantCard;