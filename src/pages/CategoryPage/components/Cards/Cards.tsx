import { Button, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import { CategoryData, categoryDataArray } from "../../../../components/App/data";
import { useParams } from "react-router";
import { useProgressiveLoad } from "../../../../shared/customHook/customHook";
import styles from "./Cards.module.scss";

const Cards = () => {
  const params = useParams<{ id: string }>();
  const categoryId = params.id;

  const findParams: CategoryData | undefined = categoryDataArray.find(
    (item: CategoryData) => item.link === categoryId
  );

  const { visibleItems, showMore, hasMore } = useProgressiveLoad(
    findParams?.projects || [],
    9,
    3
  );

  return (
    <section className={styles.cards}>
      <h2 className={styles.title}>{findParams?.title}</h2>
      <h6 className={styles.description}><em>{findParams?.description}</em></h6>
      <Container>
        <Row className="g-3">
          {visibleItems.map((project, index) => (
            <Card key={index} projects={project} />
          ))}
        </Row>

        {hasMore && (
          <div className={styles.buttonWrapper}>
            <Button variant="secondary" onClick={showMore}>
              MORE
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Cards;
