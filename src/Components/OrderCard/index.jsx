import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ id, image, title, price, handleDelete }) => {

    let renderXmarkIcon;
    if (handleDelete) {
        renderXmarkIcon = (
          <ArchiveBoxXMarkIcon
            onClick={() => handleDelete(id)} 
            className='w-6 h-6 cursor-pointer text-black/70'
          />
        );
    }


    return (
        <>
   
        <div className='flex justify-between items-center mb-6 text-black w40'>
            <div className='flex items-center gap-7'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <div className='w-40'>
                <p className=' text-sm font-normal break-words'>{title}</p>
                <p className=' text-xs font-bold break-words'>Price: {price}</p>
                </div>
                
            </div>

            <div className='flex items-center relat'>
            
  

            

            {renderXmarkIcon}
            

            </div>
          
        </div>
        
        
   
 </>
     
     

    )

}

export default OrderCard