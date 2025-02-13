import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";

export default function FormSell(){
         return (
                <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>
                    <div className="flex flex-col justify-between gap-5">
                        <FormInput
                              id="amount in btc"
                              text="Amount in BTC"
                              type="number"
                              required={true}
                              placeholder="Insert amount in BTC"
                        />
                        <FormInput
                              id="amount in usd"
                              text="Amount in USD"
                              type="number"
                              required={true}
                              placeholder="Amount in USD"
                        />
                    </div>
                <div className="text-center flex flex-col items-center mb-6">
                    
                    <Button to="/market" >Sell</Button>
                    
                </div>
            </form>
        )
}