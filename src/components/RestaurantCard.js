
const RestaurantCard = ({
    name,
    cuisine,
    locality,
    image
}) => {
    return (
        <div className="card">
            <div className="card_img_container">
                <img src={image.url} alt="restaurant-img" />
            </div>
            <h2>{name}</h2>
            <h3>{cuisine.map((cuisine) => {
                return (cuisine.name)
            }).join(", ")}</h3>
            <h4>{locality.name}</h4>
        </div>
    );
}

export default RestaurantCard;