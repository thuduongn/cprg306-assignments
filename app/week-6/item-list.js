"use client"

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {

  let items = [...itemsData]
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
  
    return (
      <div>
        <p className="text-white m-4">Sort by: 
          <span>
            <button 
              onClick={() => setSortBy("name")}   
              className={`ml-2 mr-4 px-8 py-2 ${sortBy === "name" ? "bg-red-500" : "bg-red-700"} text-white`}
            >
              Name
            </button>
            <button 
              onClick={() => setSortBy("category")} 
              className={`ml-2 mr-4 px-8 py-2 ${sortBy === "category" ? "bg-red-500" : "bg-red-700"} text-white`}
            >
              Category
            </button>
          </span>
        </p>
        <ul className="mb-4">
          {sortedItems.map((item, id) => (
            <li key={id}>
              <Item 
              name={item.name} 
              quantity={item.quantity} 
              category={item.category} 
            />
            </li>
          ))}
        </ul>
      </div>
    )
}