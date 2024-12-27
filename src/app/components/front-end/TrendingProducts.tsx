"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

interface IProduct {
    _id: string;
    imgSrc: string,
    fileKey: string,
    name: string,
    category: string,
    price: number;
}

const TrendingProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("api/get_products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    });

  return <div className="container mt-32">
    <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Treding Products</h2>

        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div className="text-black">New</div>
            <div>Featured</div>
            <div>Top Sellers</div>
        </div>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((items: IProduct) => (
            <ProductCard
                key={items._id}
                id={items._id}
                img={items.imgSrc}
                category={items.category}
                title={items.name}
                price={items.price}
            />
        ))}
    </div>
  </div>
}

export default TrendingProducts;