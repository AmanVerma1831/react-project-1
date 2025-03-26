import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const subTotal = cartItems.reduce((acc, item) => acc + item.caloriesPerServing, 0);
    const shipping = 2; // Fixed shipping cost
    const tax = 4;     // Fixed tax
    const total = subTotal + shipping + tax;
    console.log(subTotal);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="max-w-5xl max-md:max-w-xl mx-auto my-4 p-4 bg-gray-200 rounded-md">
            <div className='flex justify-between'>
                <h1 className="text-2xl font-bold text-slate-900">Your Cart - {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}</h1>
                <button
                    className="text-sm font-bold px-4 py-1 bg-pink-500 border-0 rounded-sm text-white hover:bg-pink-800 transition duration-500 ease-in-out"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-8">
                <div className="md:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <CartItem {...item} key={item.id} />
                    ))}
                </div>

                <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
                    <ul className="text-slate-900 font-medium space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold">₹{subTotal}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold">₹{shipping}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold">₹{tax}</span></li>
                        <hr className="border-slate-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-semibold">Total <span className="ml-auto">₹{total}</span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold 
                        tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md">Buy Now</button>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold 
                        tracking-wide bg-transparent hover:bg-slate-100 text-slate-900
                        border border-slate-300 rounded-md">Continue Shopping  </button>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;