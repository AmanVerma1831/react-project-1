import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";


const CartItem = ({ id, name, image, cuisine, caloriesPerServing }) => {

    const dispatch = useDispatch();
    const removeCartItem = () => {
        dispatch(removeItem(id));
    }

    return (
        <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
            <div className="flex gap-4">
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                    <img src={image} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900">{name}</h3>
                        <p className="text-sm font-semibold text-slate-500 mt-2 flex items-center gap-2">{cuisine}</p>
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                        <button type="button"
                            className="flex items-center justify-center text-white font-bold w-5 h-5 bg-slate-400 outline-none rounded-full">
                            -
                        </button>
                        <span className="font-semibold text-sm leading-[18px]">1</span>
                        <button type="button"
                            className="flex items-center justify-center text-white font-bold w-5 h-5 bg-slate-800 outline-none rounded-full">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="ml-auto flex flex-col">
                <button className="flex items-start gap-4 justify-end" onClick={() => removeCartItem()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block" viewBox="0 0 24 24">
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                    </svg>
                </button>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mt-auto">₹{caloriesPerServing}</h3>
            </div>
        </div>
    )
}

export default CartItem;