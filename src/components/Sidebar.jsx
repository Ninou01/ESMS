/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen}) => {
    const onClick = () => setIsSidebarOpen(!isSidebarOpen) 

  return (
    <div className="absolute w-screen h-screen overflow-hidden">
        <ul 
                className={`flex sidebar
                flex-col items-center justify-center w-screen h-screen absolute top-0 ${isSidebarOpen ? "left-0" : 'left-full'} right-0 text-2xl
                text-white md:static`}
            >
                <li className="my-2 pb-2 border-b-2 border-beige" onClick={onClick}>
                    <NavLink to="" className=" opacity-60 
                    leading-4 px-2.5 pb-0.5">Home</NavLink>
                </li>
                <li className="my-2 pb-2 border-b-2 border-beige" onClick={onClick}>
                    <NavLink to="cse" className=" opacity-60 
                    leading-4 px-2.5 pb-0.5">CSE</NavLink>
                </li>
                <li className="my-2 pb-2 border-b-2 border-beige" onClick={onClick}>
                    <NavLink to="about-us" className=" opacity-60 
                    leading-4 px-2.5 pb-0.5">About Us</NavLink>
                </li>
                <li className="my-2 pb-2 border-b-2 border-beige" onClick={onClick}>
                    <NavLink to="agend" className=" opacity-60 
                    leading-4 px-2.5 pb-0.5">Agenda</NavLink>
                </li>
                <li className="my-2 pb-2 border-b-2 border-beige" onClick={onClick}>
                    <NavLink to="faq" className=" opacity-60 
                    leading-4 px-2.5 pb-0.5">FAQ</NavLink>
                </li>
            </ul>
    </div>
  )
}
export default Sidebar