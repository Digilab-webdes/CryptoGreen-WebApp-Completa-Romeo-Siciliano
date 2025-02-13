import Navbar from "../components/organisms/Navbar";


 
export default function 
 
            MainLayout
            (
               
                 { children, header }) { (x3)
   
     
         return (
             <div className="h-screen bg-white flex flex-col justify-between p-6" >
        
                  {header}
        
            <div className="grow">

         {children}
          </div>
       <Navbar/>
    </div>
   )
}