import { CategoryName, HeaderContent } from '../../constants/constants'
import englishLng from '../../assets/language/english.language.jpeg'
import armenianLng from '../../assets/language/armenian.language.png'
import { Container, Dropdown, DropdownMenu, DropdownToggle, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import logo from '../../assets/logo/logo.png'
import styles from "./Header.module.scss"
import "./header.scss"



const Header = ({scrollToFooter}:{scrollToFooter:any}) => {
    const [isLanguageClicked, setIsLanguageClicked] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);



    const handleLanguageClick = () => {
        setIsLanguageClicked((prevState) => !prevState);
    };

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                const scrollPosition = window.scrollY;
                setIsScrolled(scrollPosition > 0);
            } else {
                setIsScrolled(false); // No scroll effect for other routes
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    // const scrollStyle = {
    //     backgroundColor: location.pathname === "/"
    //         ? (isScrolled ? "#FFFBF8" : "#e9e9e9db")
    //         : "#FFFBFB" 
    // };

    return (
        <Navbar variant="light" /* style={scrollStyle} */ expand="lg" className={styles.navBar} fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='custom-collapse'>
                    <Nav className="ms-auto custom-nav">
                        <Nav.Link href="/" className={styles.navLink}>{HeaderContent.HOME}</Nav.Link>
                        <Nav.Link href="/projects" className={styles.navLink}>{HeaderContent.PROJECTS}</Nav.Link>
                        <Nav.Link onClick={scrollToFooter} className={styles.navLink}>{HeaderContent.CONTACTS}</Nav.Link>

                        <div className={`custom-language-btn ${styles.languageBtn}`} onClick={handleLanguageClick}>
                            <img alt="" src={isLanguageClicked ? armenianLng : englishLng} />
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header




