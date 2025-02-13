import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";

export default function FormSend(params) {

    return (
        
        <form className="flex flex-col items-center justify-center gap-5 mt-6">
          <div className="flex flex-col justify-between gap-5">                
            
             <FormInput
                 id="WithdrawalAddress"
                 text="Withdrawal Address"
                 placeholder="Withdrawal Address" 
                 type="email"
                 required={true}
                 />
                                    
                <FormInput
                id="withdrawalAmount"
                text="Amount"
                placeholder="Withdrawal Amount in USD" 
                type="number"
                required={true}
                />

          </div>

           <div  className="text-center flex flex-col items-center mb-6">
               <Button to="/wallet">Send</Button>
           </div>

        </form> 
        
        
    )
    
}