import Button from "../atoms/Button";
import FormInput from "../molecules/FormInput";

export default function FormUserData(){
 return (
   <form className='flex flex-col items-center justify-center gap-5 mt-6'>

   <FormInput
   id="email"
   text="Email"
   type="email"
   required={true}
   placeholder="Insert your email"
 />

   <FormInput
   id="password"
   text="Password"
   type="password"
   required={true}
   placeholder="Password"
 />

   <FormInput
   id="confirmPassword"
   text="Confirm Password"
   type="password"
   required={true}
   placeholder="Confirm Password"
 />

  <div className="grid grid-cols-2 gap-4">
    <FormInput
   id="city"
   text="City"
   type="text"
   required={true}
   placeholder="Insert your city"
/>
   <FormInput
   id="postalCode"
   text="Postal Code"
   type="text"
   required={true}
   placeholder="Insert your postal code"
  />
  </div>

   <div className="text-center flex flex-col items-center mb-6">
   <Button >Next</Button>
 </div>

 </form>
 )
}