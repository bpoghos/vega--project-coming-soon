import { useLocation } from "react-router-dom";
import RootRouter from "../../routes/RootRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";
import styles from "./App.module.scss";
import { useRef } from "react";

const App = () => {
  const footerRef = useRef<any>(null);
  const location = useLocation(); // Get the current route

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define routes where Header and Footer should not be displayed
  const noHeaderFooterRoutes = ["/vega-admin", "/trio-admin"];

  return (
    <div className={styles.app}>
      {/* Conditionally render Header */}
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <Header scrollToFooter={scrollToFooter} />
      )}

      <RootRouter isLogin={true} />

      {/* Conditionally render Footer */}
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <Footer footerRef={footerRef} />
      )}
    </div>
  );
};

export default App;