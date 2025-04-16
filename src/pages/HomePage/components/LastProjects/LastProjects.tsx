import { Button, Col, Container, Row } from "react-bootstrap";
import { LastProjectsContent } from "../../../../constants/constants";
// import { FakeDataEntry } from "../../../../components/App/App";
import { useNavigate } from "react-router";
import styles from "./LastProjects.module.scss";

const LastProjects = (/* { fakeData }: { fakeData: FakeDataEntry[] } */) => {
  const navigate: any = useNavigate();

  const limitedData: { id: string; images: string[]; title: string }[] = [] /* fakeData.slice(0, 3); */

  return (
    <section className={styles.lastProjects}>
      <h2 className={styles.lastProjectsTitle}>{LastProjectsContent.TITLE}</h2>
      <h6 className={styles.lastProjectsSubtitle}><em>{LastProjectsContent.SUBTITLE}</em></h6>

      <Container className={styles.container}>
        <Row>
          {
            limitedData.map((i) => (
              <Col lg={4} md={4} sm={12} key={i.id} >
                <article className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      alt=''
                      src={i.images[0]}
                      className={styles.cardImage}
                    />
                    <div className={styles.hoverEffect}>
                      <div className={styles.hoverEffectText}>
                        <h3 className={styles.hoverTitle}>{i.title}</h3>
                        <p className={styles.hoverText}> Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                          ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                        <hr className={styles.separator} />
                        <Button className={styles.button} onClick={() => navigate(`/projects/${i.id}`)}>learn more</Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default LastProjects;
