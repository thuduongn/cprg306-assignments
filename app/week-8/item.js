export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div 
            className="w-1/3 text-white bg-blue-900 m-4 p-2 cursor-pointer"
            onClick={onSelect}
        >
            <h1 className="font-bold text-xl">{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}
