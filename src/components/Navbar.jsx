/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icone.svg";
const Navbar = ({ isMobileScreen, isSidebarOpen, setIsSidebarOpen, setShowFooter }) => {

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const onClick = (isFaq) => {
        setShowFooter(isFaq)
    }

  return (
    <header className="w-full border-b-2 border-[#374167] px-12" >
        <nav className="max-w-6xl m-auto flex justify-between items-center">
            <span className="relative z-10">
                <Link to="">
                    <img src={logo} alt="logo" className="w-36" />
                </Link>
            </span>

            {isMobileScreen && <span className="relative z-10">
                <img src={`${isSidebarOpen ? closeIcon : menuIcon}`} alt="menu-icon" 
                className="cursor-pointer" onClick={toggleSideBar}/>
            </span>}

            {!isMobileScreen && <ul 
                className={`flex sidebar
                md:flex-row justify-between w-2/5 h-auto text-base min-w-[350px] text-white`}
            >
                <li  onClick={() => onClick(false)}>
                    <NavLink to="" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">Home</NavLink>
                </li>
                <li onClick={() => onClick(false)}>
                    <NavLink to="cse" className="
                    leading-4 px-2.5 pb-0.5">CSE</NavLink>
                </li>
                <li onClick={() => onClick(false)}>
                    <NavLink to="about-us" className="
                    leading-4 px-2.5 pb-0.5">About Us</NavLink>
                </li>
                {/* <li onClick={() => onClick(false)}>
                    <NavLink to="agend" className="
                    leading-4 px-2.5 pb-0.5">Agenda</NavLink>
                </li> */}
                <li onClick={() => onClick(true)}>
                    <NavLink to="faq" className="
                    leading-4 px-2.5 pb-0.5">FAQ</NavLink>
                </li>
            </ul>}
        </nav>
    </header>
  )
}

export default Navbar