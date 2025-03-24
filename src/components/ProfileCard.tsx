import {DummyUser} from "@/components/DummyUser.ts";
import "../styles/ProfileStyle.css"
import SymbolButton from "@/components/SymbolButton.tsx";

interface ProfileCardProps {
    user: DummyUser;
}

const ProfileCard = ({user}: ProfileCardProps): JSX.Element => {
    return (
        <div className="card">
            <img className="profile-image" src="src/assets/me.png" alt="Profile picture"/>
            <h1 className="title">Hello, {user.firstName} {user.lastName}!</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.telephone}</p>
            <SymbolButton imageName="heart" />
            <SymbolButton imageName="music-and-multimedia"/>
        </div>
    );
}

export default ProfileCard