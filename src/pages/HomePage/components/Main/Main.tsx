import { Button } from "react-bootstrap";
import styles from "./Main.module.css";
import { useNavigate } from "react-router";
import back from "../../../../images/ArmenVahagni/back3.jpg"

const Main: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.background}>
            <div className={styles.overlay}>
                {/* <h1>VEGA PROJECT</h1> */}
                <p>"We create architecture that stands the test of time and elevates the way people live and work. Our modern, innovative spaces reflect your vision and needs, combining beauty and purpose to make a lasting impact."</p>
                <Button variant="outline-dark" onClick={() => navigate("/aboutus")}>About us</Button>
            </div>
            <img
                alt="background"
                src={back}
            />
        </div>
    );
};

export default Main;
