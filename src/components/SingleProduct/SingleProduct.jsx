import React, { useState } from 'react'

import './SingleProduct.css'
import QuantityInput from './QuantityInput';

const product = {
    id: 1,
    title: "Product Title",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
        "https://via.placeholder.com/500x500?text=Product+Image+1",
        "https://via.placeholder.com/500x500?text=Product+Image+2",
        "https://via.placeholder.com/500x500?text=Product+Image+3",
        "https://via.placeholder.com/500x500?text=Product+Image+4",
    ],
    stock: 10,
};

const SingleProduct = () => {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <section className="align_center single_product">
            <div className="align_center">
                <div className="single_product_thumbnails">
                    {product.images.map((image, index) =>
                        <img
                            key={index}
                            src={image}
                            alt={product.title}
                            className={selectedImage === index ? 'selected_image' : ''}
                            onClick={() => setSelectedImage(index)}
                        />)}
                </div>
                <img className="single_product_display"
                    src={product.images[selectedImage]}
                    alt={product.title} />
            </div>
            <div className=" single_product_details">
                <h1 className="single_product_title">{product.title}</h1>
                <p className="single_product_description">{product.description}
                </p>
                <p className="single_product_price">${product.price.toFixed(2)}</p>

                <h2 className="quantity_title">Quantity:</h2>
                <div className=" align_center quantity_input">
                  
           
                 <QuantityInput/>

                 
                </div>
                <button className="search_button add_cart">Add to cart</button>
            </div>
        </section>
    )
}

export default SingleProduct