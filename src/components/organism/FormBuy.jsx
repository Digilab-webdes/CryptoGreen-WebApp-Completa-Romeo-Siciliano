import FormInput from "../../components/molecules/FormInput"
import Button from "../../components/atoms/Button"

export default function FormBuy(params) {
    return (
        
        <form className="flex flex-col gap-8 h-full items-center py-10">
            <FormInput
               id="amount" 
               text="Amount in USD"
               type="number" 
               required={true}
               placeholder="Insert amount in USD"
            
            />

            <FormInput
            id="conversion" 
            text="Conversion in BTC"
            type="number" 
            required={false}
            placeholder="Amount in BTC"
            />

        <div>
            <Button to="/market">Buy</Button>
        </div>




        </form>
        
        
        
        
    )
    
}