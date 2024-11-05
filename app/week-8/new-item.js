"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = Math.random().toString(36).substring(2, 9);

        const newItem = {
            id,
            name,
            quantity,
            category,
        };

        onAddItem(newItem);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div className="flex bg-black items-center justify-left p-6">
            <form onSubmit={handleSubmit} className="w-1/5">
                <input type="text" id="name" onChange={handleNameChange} value={name} placeholder="Input name" className="w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-2" required />
                <div className="flex flex-row gap-8 mt-4 justify-between">
                    <div className ="flex flex-row gap-4 justify-center items-center bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-2">
                        <p onChange={handleQuantityChange} className="text-black">{quantity}</p>
                        <button
                            type="button" 
                            onClick={increment}
                            className="bg-blue-400 hover:bg-blue-700 active:bg-red-500 rounded w-12 text-white"
                        > 
                            + 
                        </button>
                        <button 
                            type="button"
                            onClick={decrement}
                            className="bg-blue-400 hover:bg-blue-700 active:bg-red-500 rounded w-12 text-white"
                        > 
                            - 
                        </button>
                    </div>
                    <div>
                        <select onChange={handleCategoryChange} value={category} className="bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3">
                            <option value="" disabled>Category</option>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <button 
                    type="submit"
                    className="w-full bg-blue-400 hover:bg-blue-700 active:bg-red-500 rounded mt-4 p-2 text-white"
                > 
                    + 
                </button>
            </form>
        </div>
    )
}