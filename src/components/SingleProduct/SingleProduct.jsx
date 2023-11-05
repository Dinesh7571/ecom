import React, { useState } from 'react'

import './SingleProduct.css'
import QuantityInput from './QuantityInput';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Loader from '../Common/Loader';

// const product = {
//     id: 1,
//     title: "Product Title",
//     description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
//     price: 9.99,
//     images: [
//         "https://via.placeholder.com/500x500?text=Product+Image+1",
//         "https://via.placeholder.com/500x500?text=Product+Image+2",
//         "https://via.placeholder.com/500x500?text=Product+Image+3",
//         "https://via.placeholder.com/500x500?text=Product+Image+4",
//     ],
//     stock: 10,
// };

const SingleProduct = () => {

    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()

    const { data: product, error, isLoading } = useData(`/products/${id}`)
    return (
        <section className="align_center single_product">
            {error && <em className="form_error">{error}</em>}
            {isLoading && <Loader />}
            {product && <><div className="align_center">
                <div className="single_product_thumbnails">
                    {product.images.map((image, index) =>
                        <img
                            key={index}
                            src={`http://localhost:5000/products/${image}`}
                            alt={product.title}
                            className={selectedImage === index ? 'selected_image' : ''}
                            onClick={() => setSelectedImage(index)}
                        />)}
                </div>
                <img className="single_product_display"
                    src={`http://localhost:5000/products/${product.images[selectedImage]}`}
                    alt={product.title} />
            </div>
                <div className=" single_product_details">
                    <h1 className="single_product_title">{product.title}</h1>
                    <p className="single_product_description">{product.description}
                    </p>
                    <p className="single_product_price">${product.price.toFixed(2)}</p>

                    <h2 className="quantity_title">Quantity:</h2>
                    <div className=" align_center quantity_input">


                        <QuantityInput quantity={quantity} setQuantity={setQuantity} stock={product.stock} />


                    </div>
                    <button className="search_button add_cart">Add to cart</button>
                </div>
            </>}
        </section>
    )
}

export default SingleProduct