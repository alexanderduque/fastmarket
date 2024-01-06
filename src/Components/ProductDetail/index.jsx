import { useContext } from 'react'
import { ContextCard } from '../../Context'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import './productDetail.css'



const ProductDetail = () =>{

    const context = useContext(ContextCard)

    return(
    
        <aside className={`${context.openProductDetail? 'flex':'hidden' } product-detail flex-col fixed right-0 bg-white border border-black rounded-lg overflow-y-scroll`}>

        <div className='flex justify-between items-center p-5'>
        <h2 className=' font-medium text-xl'>Detalles</h2>
        <div>
         <ArchiveBoxXMarkIcon 
         className= { `${context.openProductDetail ?'' :'hidden' } w-6 h-6 cursor-pointer text-black/70 `}
         onClick={()=> context.closeDetail()}
         /> 
        </div>

        </div>

        <figure className='px-6'>
        <img 
        className='w-60 h-30 rounded-lg' 
        src={context.productToShow.image} 
        alt={context.productToShow.title} />

        </figure>

        <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>{context.productToShow.price}€</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>

        </p>

        </aside>

    )
}

export default ProductDetail