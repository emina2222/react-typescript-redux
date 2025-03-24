import { Button } from "@/components/Button.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/profile")
    }

    return (
        <div className="card">
            <h1 className="title">Welcome!</h1>
            <p>Are you searching for the best movies? You're at the right spot!</p>
            <Button onClick={ redirect }>Go to Profile</Button>
        </div>
    );
};

export default Home;
