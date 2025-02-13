import FormInput from "../molecules/FormInput"
import Button from "../atoms/Button"


export default function FormEditUserData(params) {
    return (
        
        
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
                               
                               <FormInput
                               id="name"
                               text="Name"
                               placeholder="Enter your name" 
                               type="name"
                               required={true}
                               />
                
                              <FormInput
                               id="surname"
                               text="Surname"
                               placeholder="Enter your surname" 
                               type="surname"
                               required={true}
                               />
                
                              <FormInput
                               id="birthday"
                               text="Birthday"
                               placeholder="dd/mm/yyyy" 
                               type="text"
                               required={true}
                               />
        
                              <FormInput
                               id="address"
                               text="Address"
                               placeholder="Insert your address" 
                               type="text"
                               required={true}
                               />
        
                        <div className="grid grid-cols-2 gap-4">
                               <FormInput
                               id="city"
                               text="City"
                               placeholder="Insert your city" 
                               type="text"
                               required={true}
                               />
        
                               <FormInput
                               id="postalCode"
                               text="CPostal Code"
                               placeholder="Insert your postal code" 
                               type="text"
                               required={true}
                               />
                            
                            
                        </div>   

            <div className="text-center flex flex-col items-center mb-6">
            <Button to="/profile">Confirm</Button>
             </div>           

         </form>  
                        
        
        
    )
    
}