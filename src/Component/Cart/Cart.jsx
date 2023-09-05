import React, { useEffect, useState } from 'react';
import UseAxios from '../../useAxios/UseAxios';
import CartList from './CartList';
import { useQuery } from 'react-query';

const Cart = () => {
    const [axiosSecure] = UseAxios();
    const [product, setProduct] = useState()
    const { data: carts = [], refetch, isLoading } = useQuery(['carts'], async () => {
        const res = await axiosSecure.get('/cart-Products')
        // console.log(res.data)
        return res.data;
    })
    // console.log(carts)
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
    console.log(totalPrice)
    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-12 gap-5'>
                <div className=' col-span-8 grid grid-rows-6 gap-6'>
                    {
                        carts.map(cart => <CartList cart={cart} setProduct={cart} refetch={refetch} />)
                    }
                </div>
                <div className='col-span-3 bg-slate-300 p-3'>
                   <h1>Total Price : {totalPrice}</h1>
                </div>
            </div>
        </section>
    );
};

export default Cart;