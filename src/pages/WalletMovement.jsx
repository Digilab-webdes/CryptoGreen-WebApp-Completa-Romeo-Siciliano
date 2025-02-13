import MainLayout from "../layout/MainLayout";
import ActionHeader from "../components/organisms/ActionHeader"
import Transaction from "../components/molecules/Transaction";

export default function WalletMovement(){
    const transactions = [
        { type : 'send', amount : 1.234},
        { type : 'received', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'received', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'received', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'send', amount : 1.234},
        { type : 'received', amount : 1.234},
        { type : 'send', amount : 1.234},
     ]
     
     return (
        <MainLayout
          
         header={<ActionHeader title="Movements"/>}
        >
            <div className="pt-6 h-full flex flex-col justify-center">
                <div className="flex mb-8">
                    <h2 className="text-2xl font-bold">Filter : </h2>
                    <button className="grow bg-accento rounded-3xl mx-2 text-white font-bold">Send</button>
                    <button className="grow bg-accento rounded-3xl mx-2 text-white font-bold">Received</button>
                </div>
                <div className="overflow-y-scroll max-h-96">

               {
                    transactions.map((transaction, index) => (
                    <Transaction
                     key={index}
                     type={transaction.type}
                     amount={transaction.amount}
                      />
                   ))
               }
               </div>
            </div>
         </MainLayout>
     ) 
}