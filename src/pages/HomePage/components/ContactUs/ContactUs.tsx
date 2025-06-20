import { Button, Container, Form } from "react-bootstrap";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
    return (
        <section className={styles.contactUs}>
            <Container className={styles.contactUsContainer}>
                <h4 className={styles.question}>If You Have a Question Just</h4>
                <h2 className={styles.title}>Contact Us</h2>
                <Container className={styles.contactUsContent}>
                    <div className={styles.contactUsText}>
                        <h5 className={styles.subtitle}>
                            Need more information or want to discuss your project? Contact us today and we'll get back to you as soon as possible.
                        </h5>
                        <p className={styles.mail}><span>H</span>arvestanoc@vega-project.org</p>
                        <p className={styles.phone}><span>P</span>+ 374 98 425 239</p>
                        <p className={styles.address}><span>A</span>Yerevan, Manandyan 22</p>
                    </div>
                    <div className={styles.contactUsForm}>
                        <Form>
                            <Form.Group controlId="formEmail" className={styles.formGroup}>
                                <Form.Control type="email" placeholder="Your Email" required className={styles.control} />
                                <Form.Label>Your Email</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formPhone" className={styles.formGroup}>
                                <Form.Control type="tel" placeholder="Your Phone Number" required className={styles.control}/>
                                <Form.Label>Your Phone Number</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className={styles.formGroup}>
                                <Form.Control as="textarea" rows={3} placeholder="Your Message" required className={`${styles.control} ${styles.textarea}`} />
                                <Form.Label>Your Message</Form.Label>
                            </Form.Group>
                            <Button type="submit" variant="primary" className={styles.submitButton}>Send</Button>
                        </Form>
                    </div>
                </Container>
            </Container>
        </section>
    );
};

export default ContactUs;