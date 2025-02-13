import MainLayout from "../layouts/MainLayout";
import ActionHeader from "../components/organisms/ActionHeader";
import FormUserData from "../components/organisms/FormEditUserData";

export default function EditUserData() {

    return (
        <MainLayout
            header={<ActionHeader title="Edit user data" />}
        >
            <FormUserData/>
        </MainLayout>
    )
}