import { createContext, useState, useEffect } from 'react'
import { json } from 'react-router-dom'

export const ContextCard = createContext()

//LocalStorage
export const initializeLocalStorage = () => {
  const accountLocalStorage = localStorage.getItem('account')
  const signOutLocalStorage = localStorage.getItem('sign-out')
  let parseAccount
  let parseSignOut

  if (!accountLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parseAccount = {}
  } else {
    parseAccount = JSON.parse(accountLocalStorage)
  }
  if (!signOutLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parseSignOut = false
  } else {
    parseSignOut = JSON.parse(signOutLocalStorage)
  }
}

export const ContextCardProvider = ({ children }) => {


  //State LocalStorage
  //My account
  const [account, setAccount] = useState({})
  //sign out
  const [signOut, setSignOut] = useState(false)

  //order * toAdd
  const [order, setOrder] = useState([])

  // state (obtener la informacion de una cart en especifico)
  const [productToShow, setProductToShow] = useState({})

  //state de cart (increment del carrito)
  const [count, setCount] = useState(0)

  // shopping cart * Add Products
  const [cartProducts, setCartProducts] = useState([])


  // show purchase orders
  const [outSideMenu, setOutSideMenu] = useState(false)
  const openSideMenu = () => {
    setOutSideMenu(true)
    closeDetail()
  }
  const closeSideMenu = () => setOutSideMenu(false)

  // show (mostrar u ocultar el detalle de la cart)
  const [openProductDetail, setOpenProductDetail] = useState(false)
  const openDetail = () => setOpenProductDetail(true)
  const closeDetail = () => setOpenProductDetail(false)

  //Get Products

  const [items, setItems] = useState(null)  //Estado para consumir los datos de la Api

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);


  //Get Search * Title

  const [searchTitle, setSearchTitle] = useState(null)


  //Get Filtered Search * Title

  const [filteredTitle, setFilteredTitle] = useState(null)


  const filteredByTitle = (items, searchTitle) => {

    return items?.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
  }


  //Get search * Category
  const [searchCategory, setSearchCategory] = useState(null)
 
  //Get Filtered * Category

  const filteredByCategory = (items, searchCategory) => {
   
    return items?.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
  }


  //funtion title and category
  const filterBy = (searchType, items, searchTitle, searchCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredByTitle(items, searchTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredByCategory(items, searchCategory)

    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredByCategory(items, searchCategory).filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))

    }
    if (!searchType) {
      return items
    }
  }



  //UseEfecct filtre -- Title and Category
  useEffect(() => {
    if (searchTitle && !searchCategory) setFilteredTitle(filterBy('BY_TITLE', items, searchTitle, searchCategory))
    if (searchTitle && searchCategory) setFilteredTitle(filterBy('BY_TITLE_AND_CATEGORY', items, searchTitle, searchCategory))
    if (!searchTitle && searchCategory) setFilteredTitle(filterBy('BY_CATEGORY', items, searchTitle, searchCategory))
    if (!searchTitle && !searchCategory) setFilteredTitle(filterBy(null, items, searchTitle, searchCategory))
  }, [items, searchTitle, searchCategory])
  

  return (

    <ContextCard.Provider value={{

      count,
      setCount,
      openProductDetail,
      openDetail,
      closeDetail,
      outSideMenu,
      openSideMenu,
      closeSideMenu,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      order,
      setOrder,
      items,
      setItems,
      searchTitle,
      setSearchTitle,
      filteredTitle,
      searchCategory,
      setSearchCategory,
      account,
      setAccount,
      signOut,
      setSignOut,


    }}>

      {children}

    </ContextCard.Provider>


  )



}