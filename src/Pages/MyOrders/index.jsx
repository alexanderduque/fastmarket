import React from 'react'
import { useContext} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ContextCard } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import './style.css'



const MyOrders = () => {

  const context = useContext(ContextCard)

  const removeOrder = (index) => {
    const updatedOrders = context.order.filter((_, i) => i !== index);
    context.setOrder(updatedOrders);
  };

  return (

    <Layout>
      <div className='flex items-center justify-center w-80 relative text-white mb-4 font-bold'>
      <h1 className='mt'>My Orders</h1>
      </div>
      
      {
        context.order.map((order,index)=>(
      <div key={index} className='relative'>
      <Link key={index} to ={`/my-orders/${index}`}>
      <OrdersCard
      totalPrice={order.totalPrice}
      totalProducts={order.totalProducts}
          
      />
      </Link>
      <button
            className='absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white px-2 rounded'
            onClick={() => removeOrder(index)}
          >
            Delete
          </button>
      </div>
        )
    )
       }
    </Layout>
    

  )
}

export default MyOrders
