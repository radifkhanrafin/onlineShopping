import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import UseAxios from '../../useAxios/UseAxios';
import Swal from 'sweetalert2';

const Products = ({ product, addToCard, index }) => {
    const { img, name, price, ratings, seller } = product;
    const [axiosSecure] = UseAxios();
    const handleCartProducts = (product) => {
        console.log(product)
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart Added Success',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
                console.log(data)
            })
    }

    return (
        <div className='w-96 overflow-hidden border-2 shadow-lg shadow-green-200 rounded-md mx-auto '>
            <figure className='relative ' >
                <img className='rounded-md hover:scale-105 duration-300 shadow-md hover:shadow-green-200 ' src={img} alt="Product-Image" />
                <p className='absolute top-3 left-2'>{index + 1}</p>
            </figure>
            <div className="p-2 ">
                <p className='text-xl font-normal h-16'>{name}</p>
                <div className=''>
                    <p className='xl'>Price : ${price}</p>
                    <p>Manufacturer:{seller} </p>
                    <p>Rating:$ {ratings} </p>
                </div>

            </div>
            <button className='flex items-center gap-2 py-2 justify-center  bg-red-800 w-full rounded-t-xl' onClick={() => handleCartProducts(product)}>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;