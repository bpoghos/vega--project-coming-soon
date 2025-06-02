import { Container, Dropdown, DropdownButton, Nav, Navbar, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo dark.png';
import { rulerAnsPencil } from '../../shared/svg/svg';
import styles from "./Header.module.scss";
import "./header.scss";
import { CategoryData, categoryDataArray } from '../App/data';
import AdminModal from "../../pages/Admin/components/Modal/Modal";

const Header = ({ scrollToFooter }: { scrollToFooter: any }) => {
  const [isLanguageClicked, setIsLanguageClicked] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // Tracks modal visibility

  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current page is an admin page
  const isAdminPage = location.pathname === "/vega-admin";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageClick = () => {
    setIsLanguageClicked((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logged out");
    navigate("/vega-admin-login");
  };

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
    <>
      {isAdminPage ? (
        <Navbar className={styles.adminHeader} variant="dark" bg="dark">
          <Container className={styles.adminHeaderContainer}>
            <Navbar.Brand className={styles.adminBrand}>
              <img alt="logo" src={logo} className={styles.logo} />
            </Navbar.Brand>
            <Nav>
              <Button
                className={`${styles.addButton} ${styles.adminButtons}`}
                variant="success"
                onClick={() => setShowModal(true)}
              >
                Add
              </Button>
              <Button
                className={styles.adminButtons}
                variant="outline-light"
                onClick={() => navigate("/")}
              >
                Go to Website
              </Button>
              <Button
                className={`${styles.logOutButton} ${styles.adminButtons}`}
                variant="outline-secondary"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <Navbar variant="light" expand="lg" className={`${styles.navBar} ${isScrolled ? styles.scrolled : ""}`}>
          <Container className="p-0">
            <Navbar.Brand href="/" className="p-0">
              <img className={styles.logo} src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleToggle}
              className={`custom-toggle-icon ${isOpen ? "active" : ""}`}
            >
              {rulerAnsPencil}
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
              <Nav className="m-auto custom-nav">
                <Nav.Link href="/" className={styles.navLink}>
                  Home
                </Nav.Link>

                <div className="dropdownWrapper">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Projects"
                    variant="link"
                    className={`dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
                  >
                    {categoryDataArray.map((category: CategoryData, index) => (
                      <Dropdown.Item key={index} href={`/category/${category.link}`} className={styles.dropdownLink}>
                        {category.title}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>

                <Nav.Link onClick={scrollToFooter} className={styles.navLink}>
                  Contacts
                </Nav.Link>
              </Nav>
              <div
                className={`custom-language-btn ${styles.languageBtn}`}
                onClick={handleLanguageClick}
              >
                <span className={styles.languageText}>
                  {isLanguageClicked ? "ARM" : "ENG"}
                </span>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}


<AdminModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Header;