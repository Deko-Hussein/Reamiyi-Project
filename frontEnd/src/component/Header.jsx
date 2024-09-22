
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [MenueOpen, setMenueOpen] = useState(false);

  return (
    <>
      <div className="bg-lime-600 sm:flex justify-between items-center text-white font-semibold px-8 py-2">
       <Link to="/"> <h1 className="text-2xl">Rermiyi</h1></Link>
        
        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center gap-8 absolute md:static md:opacity-100 ${ MenueOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px]"
          } left-0 w-full md:w-auto bg-lime-600 transition-all duration-300 md:transition-none`}>
         <Link to="/"><li className="py-2 md:py-0 md:px-0 px-6">Home</li></Link>
         <Link to="/Service"> <li className="py-2 md:py-0 md:px-0 px-6">Service</li></Link>
          <li className="py-2 md:py-0 md:px-0 px-6">About</li>
       <Link to="/Contact"><li className="py-2 md:py-0 md:px-0 px-6">Contact</li></Link>
        </ul>

        {/* Hamburger Icon */}
        <i
          className="fa-solid fa-bars text-3xl cursor-pointer mx-2 md:hidden" onClick={() => setMenueOpen(!MenueOpen)}></i>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
        <Link to="/Sing In">  <button className="border-lime-400 border-2 rounded-lg px-6 py-2">  Sign in</button></Link>
      <Link to="/Admin"> <button className="bg-red-400 rounded-lg px-6 py-2">Admin</button></Link> 
        </div>
      </div>
    </>
  );
}

export default Header;
