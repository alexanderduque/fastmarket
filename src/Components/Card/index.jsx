import { useContext } from 'react'
import { ContextCard } from '../../Context'
import { CheckIcon } from '@heroicons/react/24/solid'
import './style.css'



const Card = ({data}) => {

    const context = useContext(ContextCard)

    const showProductDetail = (productDetail)=>{

        context.closeSideMenu()
        context.openDetail()
        context.setProductToShow(productDetail)
    }

    const handleCartShopping = (productData) => {
        const isInCart = context.cartProducts.some(product => product.id === productData.id);
      
        if (!isInCart) {
          context.setCartProducts(prevProducts => [...prevProducts, productData]);
          context.setCount(prevCount => prevCount + 1);
        }
      };
      

    return (

        <div 
        className='bg-white/90 cursor-pointer w-56 h-60  rounded-lg mb-10 mt-10 transition-transform duration-300 transform hover:scale-110'
        >

            <figure 
            className='relative mb-2 w-full h-4/5 p-4'
            onClick={()=>showProductDetail(data)}
            >

                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs mb-2 px-3 py-0.5'>{data.category}</span>
                <img className=" w-full h-full object-cover rounded-lg" src={data.image} alt="headphones" />
                
            </figure>

            <p className='flex justify-center items-center gap-4'>
                <span className=' text-xs font-medium text-center'>{data.title.length > 10 ? `${data.title.substring(0, 15)}` : data.title}</span>
                <span className='text-lg font-medium text-center'>{data.price}€</span>

            </p>
            <div className="flex justify-center mt-4 mb">
            <button
                    disabled={context.cartProducts.some(product => product.id === data.id)}
                    className='relative flex justify-center items-center bg-black/50 w-15 h-8 rounded-lg p-5 text-white  mt-5 hover:bg-black/70'
                    onClick={() => handleCartShopping(data)}
                >
                    {context.cartProducts.some(product => product.id === data.id) ? (
                        <CheckIcon className='w-6 h-6 text-black'></CheckIcon>
                    ) : (
                        '🛒Add To Card'
                    )}
            </button>
            </div>

        </div>

    )

}

export default Card