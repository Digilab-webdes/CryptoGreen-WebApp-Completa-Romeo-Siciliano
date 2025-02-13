import FormAccessData from "../components/organisms/FormAccessData";
import GuestHeader from "../components/organisms/GuestHeader";
import GuestLayout from "../layout/GuestLayout";
import "../App.css"
export default function AccessData(){
return (
 
   <GuestLayout>
          <GuestHeader
               img="/src/assets/media/welcome-header.png"
>
<span className="text-accento">Register</span>
     </GuestHeader>

     <FormAccessData></FormAccessData>

     </GuestLayout>

 )
}
 













































