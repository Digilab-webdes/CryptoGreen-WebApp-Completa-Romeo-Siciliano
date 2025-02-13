import "../App.css"
export default function GuestLayout({children}) {
   
    return (
        
        
        <div className="h-screen bg-bianco flex flex-col justify-between p-8">
            <div>
                {children}
            </div>
        </div>

        
    )
}