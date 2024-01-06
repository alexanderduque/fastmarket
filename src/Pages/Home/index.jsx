import { useContext } from 'react'
import { ContextCard } from '../../Context'
import React from 'react'
import Layout from '../../Components/Layout'
import Footer from '../../Components/Footer'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import {NoSymbolIcon } from '@heroicons/react/24/solid'
import './style.css'



function Home() {

//FALTA CREAR MENU PARA DISPOSITIVOS MOVILES
//FALTA TERMINAR DE HACER RESPONSIVE
//ENTENDER COMO SE ELIMINA DE LA LISTA DE ORDENES
    const context = useContext(ContextCard)

    const renderView= () => {

            if(context.filteredTitle?.length>0){
                return(
                context.filteredTitle?.map(item => (
                    <Card
                        key={item.id}
                        data={item}
                    />

                ))

                )
            } else{
                return(
                    <div className=' flex flex-col items-center justify-center w-56 h-32 mlxty'>
                        No hay coincidencias
                    <NoSymbolIcon className='w-6 h-6 text-center'/>        
                    </div>
                )
            }
        }

    

    return (
<>
        <Layout>
          

            <div className='flex items-center justify-center w-80 relative text-white ml mt-10'>
                <h1>Exclusive Products</h1>
            </div>
            <input 
            className='rounded-lg w-80 border-2 border-slate-700 p-4 mb-4 focus:outline-none' 
            type="text" 
            placeholder='Search...'
            onChange={(e)=> context.setSearchTitle( e.target.value)}
            />


            <div className='grid grid-cols-4 gap-8 gap w-full max-w-screen-lg'>
                {renderView()}
            </div>

            <ProductDetail />
            
        </Layout>
        <Footer />

</>







    )
}

export default Home
