/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icone.svg";
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

  return (
    <header className="w-full border-b-2 border-[#374167] px-12" >
        <nav className="max-w-6xl m-auto flex justify-between items-center">
            <span className="relative z-10">
                <Link to="">
                    <img src={logo} alt="logo" className="w-28" />
                </Link>
            </span>
            <span className="relative z-10">
                <img src={`${isSidebarOpen ? closeIcon : menuIcon}`} alt="menu-icon" 
                className="md:hidden cursor-pointer" onClick={toggleSideBar}/>
            </span>
            <ul 
                className={`flex sidebar
                flex-col items-center justify-center w-screen h-screen absolute top-0 ${isSidebarOpen ? "left-0" : 'left-full'} right-0 text-2xl
                md:flex-row md:justify-between md:w-2/5 md:h-auto md:text-base md:min-w-[350px] text-white md:static`}
            >
                <il className="my-2 pb-2 md:pb-0 border-b-2 border-beige md:border-none md:my-0" >
                    <NavLink to="" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">Home</NavLink>
                </il>
                <il className="my-2 pb-2 md:pb-0 border-b-2 border-beige md:border-none md:my-0" >
                    <NavLink to="cse" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">CSE</NavLink>
                </il>
                <il className="my-2 pb-2 md:pb-0 border-b-2 border-beige md:border-none md:my-0" >
                    <NavLink to="about-us" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">About Us</NavLink>
                </il>
                <il className="my-2 pb-2 md:pb-0 border-b-2 border-beige md:border-none md:my-0" >
                    <NavLink to="agend" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">Agenda</NavLink>
                </il>
                <il className="my-2 pb-2 md:pb-0 border-b-2 border-beige md:border-none md:my-0" >
                    <NavLink to="faq" className=" opacity-60 md:opacity-100 
                    leading-4 px-2.5 pb-0.5">FAQ</NavLink>
                </il>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar