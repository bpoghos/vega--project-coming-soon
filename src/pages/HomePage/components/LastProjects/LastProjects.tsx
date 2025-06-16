import { Container } from "react-bootstrap";
import { LastProjectsContent } from "../../../../constants/constants";
import logoIcon from "../../../../shared/svg/logo-icon.svg";
import Cards from "./Cards/Cards";
import styles from "./LastProjects.module.scss";

const LastProjects = () => {
 

  return (
    <>
      <section className={styles.lastProjects}>
        <div className={styles.iconWrapper}>
          <img src={logoIcon} alt="Last Projects Icon" />
        </div>
        <Container className={styles.container}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{LastProjectsContent.TITLE}</h2>
          </div>
          <hr className={styles.separator} />
          <div className={styles.subtitleWrapper}>
            <h6 className={styles.subtitle}>
              <em>{LastProjectsContent.SUBTITLE}</em>
            </h6>
          </div>
        </Container>
      </section>
      <Cards />
    </>
  );
};

export default LastProjects;
