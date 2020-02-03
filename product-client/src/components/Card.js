import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Card= (props) => {
    const product= props.product;

    return(
        <div className='product-container'>
            <img src='' alt=''/>
            <div className='details'>
                <h2>
                    <Link to={'/product/'+product.productId}>
                        {product.name}
                    </Link>
                </h2>
                <h3>{product.brand}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default Card;