import Button from "../atoms/Button";
import FormInput from "../molecules/FormInput";
import { Link } from 'react-router-dom';

export default function FormLogin() {
  return (
    <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>
      <div className="flex flex-col justify-between gap-5">
        <FormInput
          id="email"
          text="Email"
          type="email"
          required={true}
          placeholder="Enter your email"
        />
        <FormInput
          id="password"
          text="Password"
          type="password"
          required={true}
          placeholder="Insert your password"
        />
      </div>
      <div className="text-center flex flex-col items-center mb-6">
        <Button to="/login/otp">Next</Button>
        <Link to="/register/user-data" className='uppercase font-bold text-xl mt-3'>
          Register
        </Link>
      </div>
    </form>
  )
}