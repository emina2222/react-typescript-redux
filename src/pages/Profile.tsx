import ProfileCard from '../components/ProfileCard'
import {DummyUser} from '../components/DummyUser'

const Profile = () => {
  return (
    <div>
      <ProfileCard user={ getUser() }/>
    </div>
  );
};

const getUser = (): DummyUser => {
    return {
        firstName: "Emina",
        lastName: "Marmarac",
        email: "a@gmail.com",
        telephone: "0123456789",
    };
}

export default Profile;
