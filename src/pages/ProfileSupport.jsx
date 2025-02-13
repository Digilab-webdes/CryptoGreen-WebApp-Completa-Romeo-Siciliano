import MainLayout from "../layouts/MainLayout"
import ActionHeader from "../components/organisms/ActionHeader"
import FormSupport from "../components/organisms/FormSupport"
import ProfileSupport from "../pages/ProfileSupport";
export default function ProfileSupport() {

    return (
        <MainLayout
            header={<ActionHeader title="Support" />}
        >
            <FormSupport/>
        </MainLayout>
    )
}