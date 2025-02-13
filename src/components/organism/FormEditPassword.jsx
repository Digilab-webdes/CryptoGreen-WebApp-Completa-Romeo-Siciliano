import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"

export default function FormEditPassword(params) {
    return (
        
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
            <div className="flex flex-col justify-between gap-5>">

                               
                               <FormInput
                               id="currentPassword"
                               text="Current Password"
                               placeholder="Enter your current password" 
                               type="password"
                               required={true}
                               />
                
                              <FormInput
                               id="password"
                               text="New Password"
                               placeholder="Enter your new Password" 
                               type="password"
                               required={true}
                               />
                
                              <FormInput
                               id="confirmPassword"
                               text="Confirm new Password"
                               placeholder="Confirm your new Password" 
                               type="password"
                               required={true}
                               />

            </div>
            
            <div className="text-center flex flex-col items-center my-6">
             <Button to="/profile">confirm</Button>
            </div> 
        
        
        </form>                       
        
    )
    
}