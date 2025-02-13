import MainLayout from "../layouts/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormSend from "../components/organisms/FormSend";

export default function WalletSend() {
    return (
        <MainLayout
            header={<ActionHeader title="Send" />}
        >

            <FormSend />

        </MainLayout>
    )

}












































