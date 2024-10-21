import ItemList from "./item-list";
import Item from "./item";

export default function Page() {
  return (
    <main className="bg-blue-950 w-full p-8">
      <h1 className="text-4xl font-bold p-4 text-white">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}