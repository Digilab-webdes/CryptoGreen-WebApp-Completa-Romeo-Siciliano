import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import FormInput from "../molecules/FormInput";

export default function FormAccessData(params) {

    return (

        
         <form className="flex flex-col items-center justify-center gap-5 mt-6">
                       
                       <FormInput
                       id="email"
                       text="Email"
                       placeholder="Enter your email" 
                       type="email"
                       required={true}
                       />
        
                      <FormInput
                       id="password"
                       text="Password"
                       placeholder="Enter your Password" 
                       type="password"
                       required={true}
                       />
        
                      <FormInput
                       id="confirmPassword"
                       text="Confirm Password"
                       placeholder="Confirm your Password" 
                       type="password"
                       required={true}
                       />
                
                 
                <div className="text-center flex flex-col items-center mb-6">
                    <Button to="/register/user-data"> Next </Button>
                    <Link to="" className="uppercase font-bold text-xl mt-3"> Log In </Link>
                </div>

            </form>     
        
        
    )
    
}