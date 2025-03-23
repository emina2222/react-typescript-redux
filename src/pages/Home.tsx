import { Button } from "@/components/Button.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/profile")
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome!</h1>
            <Button onClick={ redirect }>Go to Profile</Button>
        </div>
    );
};

export default Home;
