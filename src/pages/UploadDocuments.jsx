import "../App.css"
import FormOTP from "../components/organisms/FormOTP";
import GuestHeader from "../components/organisms/GuestHeader";
import GuestLayout from "../layout/GuestLayout";

export default function  OTP(params) {
    return (
        
          <GuestLayout>

           <GuestHeader img="/src/assets/media/welcome-header.png" >
                               
                   <span className="text-accento">L</span>ogin

       </GuestHeader>

       <FormOTP></FormOTP>
        
          </GuestLayout>
        
        
    )
    
}

