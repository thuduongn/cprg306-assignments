"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity => {
            if (quantity >= 20) {
                return 20;
            }
            return quantity + 1;
        });
    };

    const decrement = () => {
        setQuantity(quantity => {
            if (quantity <= 1) {
                return 1
            }
            return quantity - 1;
        });
    }

    return (
        <div className="w-screen h-screen flex flex-row gap-4 justify-center items-center bg-black">
            <p className="text-white">{quantity}</p>
            <button 
                onClick={increment}
                className="bg-blue-400 hover:bg-blue-700 active:bg-red-500 rounded w-16"
            > 
                + 
            </button>
            <button 
                onClick={decrement}
                className="bg-blue-400 hover:bg-blue-700 active:bg-red-500 rounded w-16"
            > 
                - 
            </button>
        </div>
    )
}