import StarRating from "./StarRating";

const RestaurantCard = ({
    name,
    cuisine,
    rating,
    image
}) => {

    const roundedRating = Math.round(rating);

    return (
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
                <img className="w-full" src={image} alt="restaurant-img" />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                <div
                    className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    {cuisine}
                </div>
            </div>
            <div className="px-6 py-4 mb-auto">
                <p
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{name}</p>
                <p className="text-gray-500 text-sm">
                    {cuisine}
                </p>
            </div>
            <div className="px-6 pb-4 mb-auto flex">
                {Array(roundedRating).fill("").map((e, i) => (
                    <StarRating key={i} />
                ))}
            </div>
        </div>
    );
}

export default RestaurantCard;