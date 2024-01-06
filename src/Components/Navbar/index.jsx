import React from 'react'
import { NavLink } from "react-router-dom";
import { useContext,useState } from 'react'
import { ContextCard } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import './style.css'


const Navbar = () => {
    const context = useContext(ContextCard)

    const activeStyle = 'underline underline-offset-4'

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }
    //MENU HAMBURGER
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('ME DISTE CLICK')
    };

    const closeMenu = () => {
        setIsOpen(false);
      };
    
    //Sign-out * user
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const account = localStorage.getItem('account')
    const parsedAccount = account ? JSON.parse(account) : null;
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const renderView = () => {
        if (!hasUserAnAccount && !isUserSignOut) {
            return (
                <li>
                    <NavLink
                        to='/sign-in'
                        onClick={() => handleSignOut()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        SignIn
                    </NavLink>
                </li>
            )
        } else {

            return (
                <>

                    <li id='li-email' className=" font-light">

                        {parsedAccount?.email}

                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            onClick={() => handleSignOut()}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            SignOut
                        </NavLink>
                    </li>


                </>
            )
        }

    }



    return (
        <nav id='nav-' className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-medium text-white bg-black/50 ">
            <ul id='lista1' className="flex items-center gap-3">

                <li className=" font-semibold text-lg">
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/men'
                        onClick={() => context.setSearchCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => context.setSearchCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewelery

                    </NavLink>
                </li>



            </ul>

            <ul id='cart-shopping' className="flex items-center gap-3">
                {renderView()}

                <li className=' flex'>


                    <ShoppingBagIcon
                        className='h-6 w-6 text-white cursor-pointer'
                        onClick={context.openSideMenu}
                    ></ShoppingBagIcon>
                    <div>
                        {context.count}
                    </div>


                </li>

            </ul>




            <div id='mobile-menu' className="hamburger-menu">
      <Bars3Icon
      onClick={toggleMenu}
      />
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li onClick={closeMenu}>
            <NavLink
              to='/'
              onClick={() => context.setSearchCategory()}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              All
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to='/electronics'
              onClick={() => context.setSearchCategory('electronics')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Electronics
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to='/jewelery'
              onClick={() => context.setSearchCategory('jewelery')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Jewelery
            </NavLink>
          </li>
          
          <li onClick={closeMenu}>
            <NavLink
              to='/men'
              onClick={() => context.setSearchCategory("men's clothing")}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
                <span >Clothes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
           {/* <ul id='lista1' className="flex items-center gap-3">


                    </ul>*/}

        </nav>
    )
}

export default Navbar
