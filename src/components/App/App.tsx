import { useLocation } from "react-router-dom";
import RootRouter from "../../routes/RootRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";
import styles from "./App.module.scss";
import { useRef } from "react";
import { AuthProvider } from "../../configs/adminConfigs/AuthContext";

const App = () => {
  const footerRef = useRef<any>(null);
  const location = useLocation(); // Get the current route

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define routes where Footer should not be displayed
  const noFooterRoutes = ["/vega-admin", "/trio-admin"];

  return (
    <div className={styles.app}>
      {/* Always render Header */}
      <Header scrollToFooter={scrollToFooter} />
      <AuthProvider>
      <RootRouter />
      </AuthProvider>
      {/* Conditionally render Footer */}
      {!noFooterRoutes.includes(location.pathname) && (
        <Footer footerRef={footerRef} />
      )}
    </div>
  );
};

export default App;