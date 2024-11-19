"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

import { getItems, addItem } from "../_services/shopping-list-service";

import { useEffect } from "react";

export default function Page() {
  
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  const handleAddItem = async (newItem) => {
    try {
        const itemId = await addItem(user.uid, newItem);
        const item = { ...newItem, id: itemId };
        setItems((prevItems) => [...prevItems, item]);
    } catch (error) {
        console.error("Error:", error);
    }
};

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]  
      .trim()          
      .replace(/[^\w\s]/gi, ""); 
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      {user ? (
        <div className="bg-blue-950 p-8">
          <h1 className="text-4xl font-bold p-4 text-white">Shopping List</h1>
          <div className="flex gap-8">
            <div className="flex-1">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div> 
        ) : (
        <div>
            <p>Sign in to view the shopping list</p>
        </div>
    )}
    </main> 
  );
}
