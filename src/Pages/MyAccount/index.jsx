import { useContext, useState, useRef } from 'react'
import { ContextCard } from '../../Context'
import Layout from '../../Components/Layout'
import './style.css'

function MyAccount() {
  const context = useContext(ContextCard)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}

    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-80 bg-white p-8'>
        <p>
          <span className='font-medium text-sm'>Name: </span>
          <span className='font-light'>{parsedAccount?.name}</span>
        </p>
        <p className='mt-4'>
          <span className='font-medium text-sm'>Email: </span>
          <span className='font-light'>{parsedAccount?.email}</span>
        </p>
        <button
          className='bg-black/80 hover:bg-black/80 text-white w-full rounded-lg py-3 mt-6'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80 bg-white p-8'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-medium text-sm'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Peter"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-medium text-sm'>Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="hi@helloworld.com"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-medium text-sm'>Your password:</label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <button
          className='bg-black/70 hover:bg-black/80 text-white w-full rounded-lg py-3'
          onClick={() => {setView('user-info'), editAccount()}}>
          Save changes
        </button>
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
    <Layout>
      
      <h1 className="font-medium mt20 text-xl text-center text-white mb-6 w-80">My account</h1>
      {renderView()}
    </Layout>
  )
}

export default MyAccount
