import { Col, Container, Row } from "react-bootstrap";
import styles from "./LastProjects.module.scss";
import { LastProjectsContent } from "../../../../constants/constants";
import { FakeDataEntry } from "../../../../components/App/App";
import { useNavigate } from "react-router";

const LastProjects = ({ fakeData }: { fakeData: FakeDataEntry[] }) => {
  const navigate: any = useNavigate();

  // Slice the fakeData to only show the first 3 items for optimization
  const limitedData = fakeData.slice(0, 3);

  return (
    <section className={styles.lastProjects}>
      <h2>{LastProjectsContent.TITLE}</h2>
      {/* <p>{LastProjectsContent.DESCRIPTION}</p> */}
      <Container className={styles.container}>
        <Row>
          {
            limitedData.map((i) => (
              <Col lg={4} md={4} sm={12} key={i.id} onClick={() => navigate(`/projects/${i.id}`)}>
                <div className={styles.card}>
                  <img alt='' src={i.images[0]} style={{ height: "300px" }} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                    ut laboret dolore magna aliqua enim minim veniam exercitation
                  </p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default LastProjects;
