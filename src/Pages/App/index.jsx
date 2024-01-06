import { useContext } from 'react'
import { useRoutes, BrowserRouter,Navigate } from 'react-router-dom'
import { ContextCardProvider,initializeLocalStorage,ContextCard } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../Myorder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn/index'
import Navbar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'




//FUNCION DE ENRUTAMIENTO:
const AppRoutes = () => {
  const context = useContext(ContextCard)
 //Sign-out * user
 const signOut = localStorage.getItem('sign-out')
 const parsedSignOut = signOut ? JSON.parse(signOut) : null;
 //sign-in
 const account = localStorage.getItem('account')
 const parsedAccount = account ? JSON.parse(account) : null;
 // Has an account
 const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
 const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
 const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
 const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([

    { path: '/', element: <Home />},
    { path: '/men', element: <Home/>},
    { path: '/electronics', element:  <Home />},
    { path: '/jewelery', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut? <MyAccount />  :<Navigate replace to={'/sign-in'}/> },
    { path: '/my-order', element: hasUserAnAccount && !isUserSignOut? <MyOrder /> :<Navigate replace to={'/sign-in'}/> },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut? <MyOrders /> :<Navigate replace to={'/sign-in'}/>  },
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut? <MyOrder/>:<Navigate replace to={'/sign-in'}/>},
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ])
  return routes
}



function App() {
  initializeLocalStorage()

  return (
    <ContextCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ContextCardProvider>
  )
}

export default App 
