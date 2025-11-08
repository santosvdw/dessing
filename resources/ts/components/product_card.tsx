import React from "react";

type Product = {
    img: string;
    name: string;
    desc: string;
    price: string;
};

export const ProductCard: React.FC<Product> = ({ img, name, desc, price }) => {
    return (
        <div className="product_card">
            <div className="product_card_image">
                <img src={img} alt={name} className="no-border" />
            </div>
            <div className="product_card_text">
                <h5>{name}</h5>
                <p className="product_card_desc small-text">{desc}</p>
                <p className="product_card_price bold">{price}</p>
            </div>
        </div>
    );
};
