import {CalendarDaysIcon} from '@heroicons/react/24/solid'
import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import {ChevronDoubleRightIcon} from '@heroicons/react/24/solid'
import {dateTime} from '../../utils/data'
import './style.css'




const OrdersCard = ({totalPrice,totalProducts}) => {

    const orderDate = dateTime();




    return (
        <>
   
        <div className='flex justify-between items-center mb-6 border text-white w-80 p-4 rounded-lg '>
        <div className='flex justify-between w-80'>
          <p className='flex flex-col'>
          <span className=' font-light flex items-center'>
            <CalendarDaysIcon className="w-5 h-4 mr-3"/>Fecha: {orderDate}
            </span>
          <span className='font-light mt-6 flex items-center'>
          <ShoppingCartIcon className="w-5 h-4 mr-3 "/>
            {totalProducts} articles</span>
          </p>

            <p className='flex items-center gap-2 mt-10'>
          <span className=' font-medium text-2xl'>{totalPrice}€</span>
          <ChevronDoubleRightIcon className='h-4 w-4 cursor-pointer'/>
            </p>
              

        </div>
          
        </div>
        
   
 </>
     
     

    )

}

export default OrdersCard