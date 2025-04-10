import { Button } from "react-bootstrap";
import styles from "./Main.module.scss";
import { useNavigate } from "react-router";
import { ButtonTexts, MainTexts } from "../../../../shared/enum";

const Main = () => {

    const navigate = useNavigate()

    return (
        <section className={styles.background}>
            <div className={styles.image} />
            <div className={styles.overlay}>
                <h1>{MainTexts.TITLE}</h1>
                <p><em>{MainTexts.DESCRIPTION}</em></p>
                <Button variant="outline-dark" onClick={() => navigate("/aboutus")}>{ButtonTexts.AboutUs}</Button>
            </div>
        </section>
    );
};

export default Main;
