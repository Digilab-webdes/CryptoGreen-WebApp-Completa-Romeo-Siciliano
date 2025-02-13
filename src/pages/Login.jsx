import FormLogin from "../components/organisms/FormLogin";
import GuestHeader from "../components/organisms/GuestHeader";
import GuestLayout from "../layout/GuestLayout";

export default function Login(params) {

    return (
        
                <GuestLayout>
        
                   <GuestHeader img="/src/assets/media/welcome-header.png" >
                   
                                   
                        <span className="text-accento">L</span>ogin
                               
                   </GuestHeader>
        
                   <FormLogin></FormLogin>
        
        
        
                </GuestLayout>
        
        
        
    )
    
}