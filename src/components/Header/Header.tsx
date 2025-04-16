import { CategoryName, HeaderContent } from '../../constants/constants';
import englishLng from '../../assets/language/english.language.jpeg';
import armenianLng from '../../assets/language/armenian.language.png';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import logo from '../../assets/logo/logo.png';
import { rulerAnsPencil } from '../../shared/svg/svg';
import styles from "./Header.module.scss";
import "./header.scss";
import { CategoryData, categoryDataArray } from '../App/data';

const Header = ({ scrollToFooter }: { scrollToFooter: any }) => {
  const [isLanguageClicked, setIsLanguageClicked] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);


  

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

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
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);


  return (
    <Navbar variant="light" expand="lg" className={styles.navBar} fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          className={`custom-toggle-icon ${isOpen ? "active" : ""}`}>
          {rulerAnsPencil}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='custom-collapse'>
          <Nav className="ms-auto custom-nav">
            <Nav.Link href="/" className={styles.navLink}>{HeaderContent.HOME}</Nav.Link>

            <div className="dropdownWrapper">
              <DropdownButton
                id="dropdown-basic-button"
                title={HeaderContent.PROJECTS}
                variant="link"
                className={`dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
              >
                {categoryDataArray.map((item: CategoryData, index) => (
                  <Dropdown.Item key={index} href={`/category/${item.link}`} className={styles.dropdownLink}>
                    {item.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>

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

export default Header;