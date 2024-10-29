"use client"

import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-blue-950 p-8">
      <h1 className="text-4xl font-bold p-4 text-white">
        Shopping List
      </h1>
      <NewItem onAddItem = {handleAddItem} />
      <ItemList items= {items} />
    </main>
  );
}