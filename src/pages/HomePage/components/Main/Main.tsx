import { Button } from "react-bootstrap";
import styles from "./Main.module.scss";
import { useNavigate } from "react-router";
import { ButtonTexts, Texts } from "../../../../shared/enum";

const Main = () => {

    const navigate = useNavigate()

    return (
        <section className={styles.background}>
            <div className={styles.overlay}>
                <h1>{Texts.MainTitle}</h1>
                <p><em>{Texts.MainDescription}</em></p>
                <Button variant="outline-dark" onClick={() => navigate("/aboutus")}>{ButtonTexts.AboutUs}</Button>
            </div>
        </section>
    );
};

export default Main;
