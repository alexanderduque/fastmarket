import React from 'react'
import { useContext} from 'react'
import { ContextCard } from '../../Context'
import { Link } from 'react-router-dom'
import {ChevronLeftIcon} from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'
import './style.css'


const MyOrder = () => {


  const context = useContext(ContextCard)
  const currentPath= window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if(index=== 'last') index=context.order?.length - 1
  

  return (

    <Layout>

<div className='flex mt20 items-center justify-center w-80 relative mb-6 text-white font-bold'>
        <Link to='/my-orders' className='absolute left-0'>
      <ChevronLeftIcon
        className= 'w-6 h-6 cursor-pointer text-white'
        /> 
        </Link>
        
      <h1>My Order</h1>
      </div>
      
      <div 
      className='flex flex-col w-96 border-4 rounded-lg 
      overflow-y-scroll h-full p-3 bg-white'>
                {
                    context.order?.[index].products.map(products => (
                      <div key={products.id}>
                        
                            <OrderCard
                                key={products.id}
                                id={products.id}
                                image={products.image}
                                title={products.title}
                                price={products.price}
                            />
                         </div>
                        
                        ))}
                        <p className=' flex text-slate-900 font-bold items-center justify-center border-t-4 border-gray-300'>Total:  {context.order?.[index].totalPrice}</p>
            </div>
    </Layout>
    
  
  )
}

export default MyOrder
