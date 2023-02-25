import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data/data';

import './products.css'


const Products = () => {
    return (
        <>
            <section className='product-container'>
                <h1>Featured Products</h1>
                <section className='products'>


                    {
                        data.products.map((products) => {
                            return (
                                <section key={products.id} className='product'>
                                    <img src={products.image} alt={products.name} />
                                    <article className='product-info'>
                                        <Link to={`product/${products.url}`}><p>{products.name}</p></Link>
                                        <p>{products.price}</p>
                                        <button>Add to cart</button>
                                    </article>

                                </section>
                            )
                        })
                    }

                </section>
            </section>
        </>
    )
}

export default Products;