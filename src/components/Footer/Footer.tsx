import { Container, Row, Col, Navbar, NavLink } from "react-bootstrap";
import logo from "../Header/images/logo dark.png"
import styles from "./Footer.module.css";
import { ContactContent, FooterContent } from "../../constants/constants";
import { useNavigate } from "react-router";
import { FaViber, FaWhatsapp } from "react-icons/fa6";



const Footer= ({footerRef}:{footerRef:any}) => {

    const navigate = useNavigate()

    return (
        <Navbar bg="black" variant="dark" className={styles.footer} ref={footerRef}>
            <Container className="d-block">
                <Row className={styles.row}>
                    <Col lg={3} md={3} sm={6} xs={12} className={styles.logoContainer}>
                        <img src={logo} alt="Company Logo" className={styles.logo} />
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12} className={styles.menuContainer}>
                        <h3 className={styles.h3style} onClick={() => navigate("/")}>{FooterContent.HOME}</h3>
                        {/* <h3 className={styles.h3style} onClick={() => navigate("/aboutus")}>{FooterContent.ABOUT}</h3> */}
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12} className={styles.projectsContainer}>
                        <h3 onClick={() => navigate("/projects")} className={styles.h3style}>{FooterContent.PROJECTS}</h3>
                        <p>{FooterContent.RESIDENTAL}</p>
                        <p>{FooterContent.PUBLIC}</p>
                        <p>{FooterContent.URBAN}</p>
                        <p>{FooterContent.PRODACTION}</p>
                        <p>{FooterContent.RECONSTRACTION}</p>
                        <p>{FooterContent.SMALL}</p>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12} className={styles.contactContainer}>
                        <h3>{FooterContent.CONTACTS}</h3>
                        <p><span>{ContactContent.ADDRESS}</span> Manandyan 22</p>
                        <p><span>{ContactContent.MOBILE}</span> +374 98 425239 </p>
                        <p><FaViber className={styles.viber}/> <FaWhatsapp className={styles.whatsapp}/></p>
                        <p><span>{ContactContent.EMAIL}</span> arvestanoc@vega-project.org</p>
                    </Col>
                </Row>
                <div className={styles.copyrightContainer}>
                    <p>{FooterContent.DEVELOPED}</p>
                    <NavLink href="http://www.skillsup.tech"> SkillsUp Technologies</NavLink>
                    <p> &copy; {FooterContent.DATE}</p>
                </div>
            </Container>
        </Navbar>
    );
};

export default Footer;
