import { useContext, useState, useRef } from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import { ContextCard } from '../../Context'
import Layout from '../../Components/Layout'


const SignIn = () => {

  const context = useContext(ContextCard)
  const navigate = useNavigate();

  //Exit
  const signOutTotal=() =>{
    localStorage.setItem('account', '')
    context.setAccount({})
    context.setSignOut(false)
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setCount(0)

  }

  //state to renderView
  const [view, setView] = useState('user-info')
  //Formulario
  const form = useRef(null)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = account ? JSON.parse(account) : null;
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  //funtion signin-signout
  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
   
  }

  //funtion form
const createAnAccount = () => {
  const formData = new FormData(form.current);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (name && email && password) {
    const data = { name, email, password };
    
    localStorage.setItem('account', JSON.stringify(data));
    context.setAccount(data);

    navigate('/');
  }
};

  //funtion renderView

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80 p-8 bg-white'>
        <p>
          <span className=' font-light text-sm'>Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>

          <span className=' font-light text-sm'>Password:</span>
          <span>{parsedAccount?.password}</span>

        </p>
        <Link to="/">
          <button
            className=' bg-black/80 hover:bg-black/100 disabled:bg-black/30 text-white w-full rounded-lg py-3 mt-4 mb-2'
            disabled={!hasUserAnAccount}
            onClick={()=>handleSignIn()}
            >
            Logi in

          </button>
        </Link>
       
        <button
          className=' bg-black/80 text-white  disabled: disabled:bg-black/30 rounded-lg mt-6 py-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}>
          Sign up
        </button>
        <button
         className=' bg-black/80 text-white hover:bg-red-600 disabled:bg-black/30 rounded-lg mt-6 py-3'
         onClick={()=>signOutTotal()}
         disabled={!hasUserAnAccount}
        >
          Exit
        </button>
      </div>

    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className=' flex flex-col gap-4 w-80'>
        <div className=' flex flex-col gap-1'>
          <label htmlFor="name" className=' font-medium text-sm'>Your name:</label>
          <input
            required
            type="text"
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Peter'
            className=' rounded-lg border-black placeholder:font-light placeholder:text-sm
         placeholder:text-black/60 focus:outline-none py-2 px-4 '
          />

        </div>
        <div className=' flex flex-col gap-1'>
          <label htmlFor="email" className=' font-medium text-sm'>Your email:</label>
          <input
            required
            type="email"
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='hi@hotmail.com'
            className=' rounded-lg border border-black placeholder:font-light
         placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            title="Please enter a valid email address"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className=' font-medium text-sm'>Your password:</label>
          <input
            type="password"
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='******'
            required
            className=' rounded-lg border border-black placeholder:font-light
        placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
  
          <button
            className=' bg-black/80 text-white w-full rounded-lg py-3 hover:bg-black/100'
            onClick={() => createAnAccount()}>

            Create
          </button>
        
      </form>

    )

  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()


  return (
    <Layout>

      <h1 className='mb-4 mt20 text-white text-xl font-medium'>Bienvenido</h1>
      {renderView()}
    </Layout>


  )
}

export default SignIn