import { Link, json } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import { Search } from "../Sections/Search"
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut"
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn"
import { useCart } from "../../context/CartContext"
export const Header = () => {
    const { cartList } = useCart()
    const Token = JSON.parse(sessionStorage.getItem("Token"))
    const [darkmode,setDarkMode] = useState( JSON.parse(localStorage.getItem("darkmode")) || false)
    const [searchIcon,setSearchIcon] = useState(false)
    const [Dropdown,setDropdown] = useState(false)


    useEffect(()=>{

        localStorage.setItem("darkmode",JSON.stringify(darkmode))
        
        if(darkmode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkmode])

    return (
        <header>

            <nav class="bg-white dark:bg-gray-900">
                <div class="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-10" alt="CodeBook Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div class="flex items-center relative">
                        <span onClick={()=>setDarkMode(!darkmode)} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                        <span onClick={() => setSearchIcon(!searchIcon)} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                        <Link to="/cart" class="text-gray-700 dark:text-white mr-5">
                            <span class="text-2xl bi bi-cart-fill relative">
                                <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => setDropdown(!Dropdown)} class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        {Dropdown && (Token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
                    </div>
                </div>
            </nav>
          { searchIcon &&  <Search setSearchIcon={setSearchIcon} />}
        </header>
    )
}



