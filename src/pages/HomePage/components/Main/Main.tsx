import { Button } from "react-bootstrap";
import styles from "./Main.module.css";

const Main: React.FC = () => {
    return (
        <div className={styles.background}>
            <div className={styles.overlay}>
                <h1>VEGA PROJECT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation</p>
                <Button variant="outline-dark">About us</Button>
            </div>
            <img
                alt="background"
                src="https://i.pinimg.com/736x/a0/bb/ef/a0bbefa19388f3b7dcaba81444446ed1.jpg"
            />
        </div>
    );
};

export default Main;
