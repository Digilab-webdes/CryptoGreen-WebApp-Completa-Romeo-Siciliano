import "../../App.css"
export default function GuestHeader({children , img}) {

    return(

        
        <header className="text-center">

          <img className="w-full max-w-[150px] mx-auto"src={img} alt="welcome header" />

                 <h1 className="text-[2.75rem] font-bold mt-5"> 
                 {children} 
                 </h1>

        </header>
        
        
        
    )
    
}