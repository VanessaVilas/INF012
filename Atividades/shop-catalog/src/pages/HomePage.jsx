import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api"

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');
            setProducts(response.data.products);
        }
        loadProducts();
    }, [])

    return (
        <div className="product-grid">
            <div className="product-card">
                {products.map(item => {
                    return (
                        <article key={item.id}>
                            <img  className="product-image" src={item.thumbnail} alt={item.title} />
                            <strong className="product-title">{item.title}</strong>
                            <span className=".product-price">{item.price}</span>
                            <span className="product-category">{item.category}</span>
                            <span className="product-rating">{item.rating}</span>
                            <Link to={`/product/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}