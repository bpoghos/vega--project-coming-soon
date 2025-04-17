import { Col, Button } from "react-bootstrap";
import styles from "./Card.module.scss";
import { useNavigate, useParams } from "react-router";
import { NewDataProps } from "../../../../../components/App/data";

const Card = ({ projects }: { projects: NewDataProps }) => {
  const params = useParams<{ id: string }>();
  const categoryId = params.id;
  const navigate = useNavigate();

  return (
    <Col lg={4} md={4} sm={12}>
      <article className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img
            alt=""
            src={projects.profileImage}
            className={styles.cardImage}
          />
          <div className={styles.hoverEffect}>
            <div className={styles.hoverEffectText}>
              <h3 className={styles.hoverTitle}>{projects.title}</h3>
              <p className={styles.hoverText}>{projects.subtitle}</p>
              <hr className={styles.separator} />
              <Button
                className={styles.button}
                onClick={(e) => {
                  navigate(`/category/${categoryId}/single/${projects.id}`);
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Col>
  );
};

export default Card;
