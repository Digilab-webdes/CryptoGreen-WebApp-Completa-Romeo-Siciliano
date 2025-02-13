
import '../App.css'
import Button from '../components/atoms/Button'
import {Link} from 'react-router-dom'
import Welcome from "../pages/Welcome"
export default function Welcome() {


  return (
    <>
  <div className="h-screen bg-bianco flex flex-col justify-center">

       <header className="text-center">
         <img className="w-full max-w-xs mx-auto" src="src/assets/media/welcome-header.png"alt="welcome header" />
         <h1 className="text-5xl font-bold mt-5">
          <span className="text-accento">CryptoGreen</span>
         </h1>
       </header>

    <div className="mt-20 flex flex-col items-center justify-center gap-4">

      <Button to="/login">Login</Button>

      <Link to="/ /access-data" className="uppercase font-bold text-xl"> Sign up </Link>

    </div>



 </div>

    </>
  )
}

