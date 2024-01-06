import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContextCard } from '../../Context'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalGeneral } from '../../utils'
import { dateTime } from '../../utils/data'
import './style.css'





const CheckOutSideMenu = () => {

    const context = useContext(ContextCard)

    const handleDelete = (id) => {

        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1); // -count to card
    }
    const handleCheckout = () => {
    
            const orderAdd = {
                date: dateTime(),
                products: context.cartProducts,
                totalProducts: context.cartProducts.length,
                totalPrice: totalGeneral(context.cartProducts)
            };

            context.setOrder([...context.order, orderAdd]);
            context.setCartProducts([]);
            context.closeSideMenu();
            context.setCount(0);
            context.setSearchTitle(null);
           
       
    };



    return (

        <aside className={`${context.outSideMenu ? 'flex' : 'hidden'} check-out-side-menu flex-col fixed right-0 bg-white border border-slate-600 rounded-lg`}>

            <div className='flex justify-between items-center p-5'>
                <h2 className=' font-medium text-xl mx-auto'>Ordenes De Compra</h2>
                <div>
                    <ArchiveBoxXMarkIcon
                        className={`${context.outSideMenu ? '' : 'hidden'} w-6 h-6 cursor-pointer absolute right-1 top-6 text-black/70 `}
                        onClick={() => context.closeSideMenu()}
                    />
                </div>

            </div>
            <div className='px-1 overflow-y-scroll flex-1 '>
                {
                    context.cartProducts.map(products => {
                        return (
                            <OrderCard
                                key={products.id}
                                id={products.id}
                                image={products.image}
                                title={products.title}
                                price={products.price}
                                handleDelete={handleDelete}
                            />

                        )
                    })

                }
            </div>
            <div className='p-6'>
                <hr className='border-b-2 border-slate-400' />
                <p className='flex justify-between items-center'>
                    <span className='font-medium'>Total:</span>
                    <span className='font-medium text-2xl'>{totalGeneral(context.cartProducts)}€</span>


                </p>
                <div>
                    {context.cartProducts.length > 0 && (
                        <Link to='/my-orders/last'>
                            <button
                                onClick={handleCheckout}
                                className='w-full bg-black/80 text-white py-3 rounded-lg transition-colors duration-400 hover:bg-black/90'>
                                Checkout
                            </button>
                        </Link>
                    )}

                </div>

            </div>
        </aside>
    )
}

export default CheckOutSideMenu