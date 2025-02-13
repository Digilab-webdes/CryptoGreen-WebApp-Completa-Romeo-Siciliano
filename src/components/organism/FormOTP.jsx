import Button from "../atoms/Button";
import "../../App.css"
import InputOTP from "../atoms/InputOTP";
import TextLg from "../atoms/TextLg";

export default function FormOTP() {


    return (

        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div>

                <TextLg className="text-secondario text-lg font-semibold text-center">
                    We have sent you an OTP to your email address.
                    Please enter the OTP below to verify your email address.
                </TextLg>

                <div className="flex justify-between mt-10">

                    <InputOTP></InputOTP>
                    <InputOTP></InputOTP>
                    <InputOTP></InputOTP>
                    <InputOTP></InputOTP>
                    <InputOTP></InputOTP>
                    <InputOTP></InputOTP>

                </div>

                <TextLg className="text-secondario text-lg text-center mt-6">
                    <span className="font-bold text-center">Send new code between</span>: 00:20
                </TextLg>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/wallet">next</Button>
            </div>

        </form>


    )
}