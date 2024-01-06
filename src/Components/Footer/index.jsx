import facebook from '../../img/facebook-app-symbol.png'
import instagram from '../../img/instagram.png'
import X from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import tiktok from '../../img/tik-tok.png'
import linkedin from '../../img/linkedin.png'
import store from '../../img/store.png'
import './style.css'

const Footer = () => {

    return (
        
        <footer className="flex w-full h-72 bg-gray-200 mt-40">

        <div className="bg-gray-200  flex text-black gap-24 gap-1100 ml-20 w-96">
        
        <div>
            <h2 className=" font-semibold mb-4">Sobre Nosotros</h2>
            <ul id='ul-secction1' className=" text-sm cursor-pointer">
            <li className='mb-2'><span>Quienes somos</span> <span>{'>'}</span></li>
            <li className='mb-2'><span>Biografia</span> <span>{'>'}</span></li>
            <li className='mb-2'><span>prensa</span> <span>{'>'}</span></li>
            <li className='mb-2'><span>Empleo</span> <span>{'>'}</span></li>
            <li className='mb-2' id='market'>#FastMarket</li>

            </ul>
        </div>
        <div >
            <h2 className="font-semibold mb-4">Ayuda</h2>
            <ul id='ul-secction2' className="text-sm cursor-pointer">
                <li className='mb-2'><span>Información</span> <span>{'>'}</span></li>
                <li className='mb-2'><span>Devolución</span> <span>{'>'}</span></li>
                <li className='mb-2'> <span>Reembolso</span> <span>{'>'}</span></li>
                <li className='mb-2' id='rastrear'>Rastrear</li>
                <li className='mb-2' id='tallas'>Guía De Tallas </li>
            </ul>
        </div>
        <div id='seccion3-footer'>
            <h2 className="font-semibold mb-4">Servicio Al cliente</h2>
            <ul className="text-sm cursor-pointer">
                <li className='mb-2'>Contáctenos</li>
                <li className='mb-2'>Pagos & Impuestos</li>
            </ul>
        </div>
        </div>

        <div className="bg-gray-200  text-black mt-10 ml-60">
            <div className=" font-semibold redes">
            ENCUENTRANOS EN
            </div>
            <div className='flex gap-14 mt-6 gap-1300 cursor-pointer redes'>
                <img src={facebook} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
                <img src={instagram} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
                <img src={X} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
                <img src={youtube} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
                <img src={tiktok} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
                <img src={linkedin} alt=""  className='h-8 transition-transform duration-300 transform hover:scale-150'/>
            </div>
            <div className='mt-12 font-semibold flex items-center'>
                FastMarket
                <img src={store} alt="" className='h-10 ml-2' />
            </div>
        
        </div>

        </footer>
    )
}
export default Footer