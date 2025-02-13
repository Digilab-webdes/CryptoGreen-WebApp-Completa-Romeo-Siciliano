import NavLink from "../molecules/NavLink"
import Wallet from "../atoms/Wallet"
import Market from "../atoms/Market"
import Profile from "../atoms/Profile"
import "../../App.css"

export default function Navbar(){
  
         return (
          
          <nav className="bg-accento text-white h-20 rounded-[30px] flex items-center justify-center gap-12">
               <NavLink to="/profile" icon={<Profile/>} text="Profile" />
               <NavLink to="/wallet" icon={<Wallet/>} text="Wallet" />
               <NavLink to="/market" icon={<Market/>} text="Market" />
          
        </nav>
     )
 }