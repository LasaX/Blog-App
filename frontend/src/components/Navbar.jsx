import { useState } from "react"
import { NavLink } from "react-router-dom"

const navLists = [
    {name : "Home" ,path : "/"},
    {name : "About us" ,path : "/about-us"},
    {name : "privacy policy" ,path : "/privacy-policy"},
    {name : "Contact Us" ,path : "/contact-us"},

]

function Navbar() {
    const [isMenuOpen,setMenuOpen] = useState(false);
    const toggleMenu = ()=> setMenuOpen(!isMenuOpen)
  return (
    <header className="bg-white py-6 border">
        <nav className="container mx-auto flex justify-between px-5">
            <a href="/">
            <img src="/" alt="" className="h-12" />

            </a>
            <ul className="sm:flex hidden items-center gap-8">
                {
                    navLists.map((list,index) => (
                        <li>
                            <NavLink to= {`${list.path}`}
                            className={({isActive})=>
                            isActive ? "active" : ""
                        }
                        >{list.name}</NavLink>
                        </li>
                    ))

        
                }
                <Li>
                    <NavLink to = "login">Login</NavLink>
                </Li>
            </ul>
            <div className="flex items-center sm:hidden">
                <button onClick={toggleMenu}
                 className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900">
                    {
                        isMenuOpen ? <Ioclose className ='size-6'/> : <IoMenuSharp className = 'size-6'/>
                    }
                 </button>
            </div>
        </nav>
        {
            isMenuOpen && (
                <ul className=" fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
                {
                    navLists.map((list,index) => (
                        <li className="mt-5 px-4">
                            <NavLink 
                            onClick={()=> setMenuOpen(false)}
                            to= {`${list.path}`}
                            className={({isActive})=>
                            isActive ? "active" : ""
                        }
                        >{list.name}</NavLink>
                        </li>
                    ))

        
                }
                <Li className ='px-4 mt-5'>
                    <NavLink to = "login">Login</NavLink>
                </Li>
            </ul>
            
            )
        }
    </header>
  )
}
export default Navbar