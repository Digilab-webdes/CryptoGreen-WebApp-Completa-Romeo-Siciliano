import "../App.css"
import TextSM from "../components/atoms/TextSM";
import DashboardCard from "..//components/molecules/DashboardCard"
import { Link } from "react-router-dom";
import Transaction from "../components/molecules/Transaction";
import Send from "../components/atoms/Send";
import Receive from "../components/atoms/Receive";
import IconButton from "../components/atoms/IconButton";
import MainLayout from "../layout/MainLayout";
import MainHeader from "../components/organisms/MainHeader"

export default function WalletHome(){

    const transactions = [
        { type : 'send', amount : 1.234 },
        { type : 'received', amount : 1.234 },
        { type : 'send', amount : 1.234 }
     ]

    return (
      <>
       <MainLayout
       header={
        <MainHeader
          title="Wallet"
          subtitle={<span>Welcome, <span className="font-bold">Tizio</span></span>}>
        </MainHeader>
      }
     >
     <DashboardCard
         title="1.234 USD"
         subtitle="0.0000123 BTC"
     />
         <div className="">
            <div className="flex justify-between">
                <TextSM className="text-primario font-bold">Last Transactions</TextSM>
                <Link className="text-accento font-bold text-lg hover:underline transition-all">
                  View All
                </Link>
            </div>

     {
       transactions.map((transaction, index) => {
             return(
                 <Transaction
                     key={index}
                     type={transaction.type}
                     amount={transaction.amount}
      />
    )
  })
}
</div>
{/* fine sezione transaction*/}

        <div className="mt-12 flex justify-center gap-10">

            <IconButton to="/wallet/send" text="Send" icon={<Send/>} />

            <IconButton to="/wallet/receive" text="Receive" icon={<Receive/>}/>

            <IconButton to="/wallet/receive" text="Receive" icon={<Receive/>}></IconButton>

        </div>

     </MainLayout>
   </>

 )

}