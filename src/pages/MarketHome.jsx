import MainLayout from "../layouts/MainLayout"
import MainHeader from "../components/organisms/MainHeader"
import DashboardCard from "../components/molecules/DashboardCard"
import TextSM from "../components/atoms/TextSM"
import IconButton from "../components/atoms/IconButton"
import Receive from "../components/atoms/Receive"
import Send from "../components/atoms/Send"

export default function MarketHome() {

    return (
        <MainLayout
            header={
                <MainHeader
                    title="Market"
                    subtitle={
                        <span>Welcome, <span className="font-bold">Dennis</span></span>
                    }
                />
            }
        >

            <DashboardCard
                title="+ 234 USD"
                subtitle="0.0000120 BTC"
            />


            <div className="pt-2">
                <img className="w-full"
                    src="./src/assets/Media/market.png" alt="market" />
                <div className="flex justify-between">
                    <TextSM>1D</TextSM>
                    <TextSM>1W</TextSM>
                    <TextSM>1M</TextSM>
                    <TextSM>6M</TextSM>
                    <TextSM>1Y</TextSM>
                    <TextSM className="font-bold">All</TextSM>
                </div>
            </div>

            <div className="mt-12 flex justify-center gap-10">
                <IconButton to="/market/buy" text="Buy" icon={<Receive />}></IconButton>
                <IconButton to="/market/sell" text="Sell" icon={<Send/>}></IconButton>
            </div>

        </MainLayout>
    )
}