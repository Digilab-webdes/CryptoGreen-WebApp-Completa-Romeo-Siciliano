import MainLayout from "../layouts/MainLayout";
import MainHeader from "../components/organisms/MainHeader";
import ButtonBlock from "../components/atoms/ButtonBlock";

export default function ProfileHome() {

    return (
        <MainLayout
            header={
                <MainHeader title="Profile" subtitle={<span>Welcome,<span className="font-bold">Dennis</span></span>}
                />}
        >

            <div className="flex flex-col gap-3 mt-8">

                <ButtonBlock to="/profile/edit-user-data" text="Edit user data" type="secondary" />
                <ButtonBlock to="/profile/edit-password" text="Edit password" type="secondary"/>
                <ButtonBlock to="/profile/support" text="Support" type="secondary"/>
                <ButtonBlock to="/profile/FAQ" text="F.A.Q." type="secondary"/>
                <ButtonBlock to="/" text="Logout" type="primary"/>
               

            </div>
        </MainLayout>

    )
}