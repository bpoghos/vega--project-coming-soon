import { Container } from "react-bootstrap"
import styles from "./ContactUs.module.scss"

const ContactUs = () => {
    return (
        <section className={styles.contactUs}>
            <Container className={styles.contactUsContainer}>
                <h4 className={styles.question}>If You Have a Question Just</h4>
                <h2 className={styles.title}>Contact Us</h2>
                <Container className={styles.contactUsContent}>
                </Container>
            </Container>
        </section>
    )
}

export default ContactUs
