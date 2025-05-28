import styles from "./Main.module.scss";
import { MainTexts } from "../../../../shared/enum";
import { useEffect } from "react";
import { arrowDown } from "../../../../shared/svg/svg";



const Main = () => {

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
            </div>
        </section>
    );
};

export default Main;
