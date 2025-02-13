// DASHBOARD verde con icona bitcoin

import "../../App.css";

export default function DashboardCard({ title, subtitle }) {
    return (

        

            <div className="grow pt-16">
                <div className="relative mb-12">
                    <img className="absolute top-0 right-0 translate-y-[-70%] w-12"
                        src="./src/assets/media/grass.png" alt="grass image" />
                    <div className="rounded-[50px] bg-accento text-bianco p-6 min-h-[130px] relative">
                        <h2 className="text-5xl font-bold"> {title} </h2>
                        <h3 className="text-xl">{subtitle}</h3>
                        <img className="absolute right-[-20px] top-8"
                            src="./src/assets/media/bitcoin.png" alt="bitcoin image" />
                    </div>
                </div>
            </div>

        
    )
}