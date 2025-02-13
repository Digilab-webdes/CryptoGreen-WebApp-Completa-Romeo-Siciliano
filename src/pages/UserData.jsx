import "../App.css"
import FormUserData from "../components/organisms/FormUserData";
import GuestHeader from "../components/organisms/GuestHeader";
import GuestLayout from "../layout/GuestLayout";
export default function UserData(params) {
    
    return (

        
        
        <GuestLayout>

           <GuestHeader img="/src/assets/media/welcome-header.png" >
           
                           
                <span className="text-accento">R</span>egister
                       
           </GuestHeader>

           <FormUserData></FormUserData>



        </GuestLayout>
        
        
        
        
        
    )
}