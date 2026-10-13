import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api"

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    return (
        <div className="product-grid">
            <div className="product-card">
                {products.map((item) => {
                    return (
                        <article key={item.id}>
                            <img  className="product-image" src={item.thumbnail} alt={item.title} />
                            <strong className="product-title">{item.title}</strong>
                            <a className=".product-price">{item.price}</a>
                            <a className="product-category">{item.category}</a>
                            <a className="product-rating">{item.rating}</a>
                            <Link to={`/product/${item.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}