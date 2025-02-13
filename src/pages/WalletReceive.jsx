import MainLayout from "../layouts/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormReceive from "../components/organisms/FormReceive"


export default function WalletReceive() {

    return (
        <MainLayout
            header={<ActionHeader title="Receive" />}
        >
            <FormReceive />
        </MainLayout>
    )
}