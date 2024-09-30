export default function Item({ name, quantity, category }) {
    return (
        <div className="w-1/3 text-white bg-blue-900 m-4 p-2">
            <h1>{name}</h1>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
} 