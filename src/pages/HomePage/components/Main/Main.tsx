import { Button } from "react-bootstrap";
import styles from "./Main.module.scss";
import { useNavigate } from "react-router";
import { ButtonTexts, MainTexts } from "../../../../shared/enum";
import { useEffect } from "react";
import { arrowDown } from "../../../../shared/svg/svg";



const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const setVh = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
      
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
      }, []);

    return (
        <section className={styles.background}>
            <div className={styles.image} />
            <div className={styles.overlay}>
                <h1>{MainTexts.TITLE}</h1>
                <div className={styles.arrowDownContainer}>{arrowDown}</div>
                {/* <p><em>{MainTexts.SUBTITLE}</em></p>
                <Button variant="outline-dark" onClick={() => navigate("/aboutus")}>
                    {ButtonTexts.AboutUs}
                </Button> */}
            </div>
        </section>
    );
};

export default Main;
