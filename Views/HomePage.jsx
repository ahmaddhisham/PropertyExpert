import ProductCard from "../src/components/ProductCard";

export default function HomePage () {
    return (
        <div>
            <h1>Home</h1>
            <ProductCard product={{ name: "Sample Product", price: 29.99, description: "This is a sample product." }} />
            <ProductCard product={{ name: "Another Product", price: 49.99, description: "This is another sample product." }} />
        </div>
    )
}