import "../../App.css"
import ArrowDown from "../atoms/ArrowDown";
import ArrowUp from "../atoms/ArrowUp";
import TextSM from "../atoms/TextSM";

export default function Transaction({ type , amount }) {
    
    let arrowIcon;
    let prefix;

        if (type === 'send') {
            arrowIcon = <ArrowUp className="text-accento fa-2x" />;
            prefix = '-';
        } else {
            arrowIcon = <ArrowDown className="text-red-500 fa-2x" />;
            prefix = '+';
        }


    return (
        

<div className="flex justify-between items-center">
                <div className="flex items-center my-2">
                    {arrowIcon}
                    <div className="ml-2">
                        <TextSM className="text-primario font-semibold capitalize">{type}</TextSM>
                        <p className="text-secondario text-sm">01/01/2024</p>
                    </div>
                </div>
                <div>
                    <TextSM  className="text-primario font-semibold capitalize">{prefix} {amount} USD </TextSM>
                    <p className="text-secondario text-sm">0,007458 BTC</p>
                </div>
                </div>



        
    )
    
}