import { Col, Container, Row } from "react-bootstrap"
import styles from "./OurClients.module.css"
import { OurClientsContent } from "../../../../constants/constants"

const OurClients: React.FC = () => {






    return (
        <div className={styles.ourClients}>
            <h2>{OurClientsContent.TITLE}</h2>
            <p>{OurClientsContent.DESCRIPTION}</p>
            <Container className={styles.container}>
                <Row>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg" />
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://e7.pngegg.com/pngimages/361/627/png-clipart-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf.png" />
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png" />
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png" />
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJe_mCEynMS8WdCoofU7AyWV93nmRtQf4o3w&usqp=CAU" />
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6}  >
                        <div className={styles.card}>
                            <img alt='' src="https://w7.pngwing.com/pngs/505/437/png-transparent-superman-logo-superman-logo-batman-superman-logo-comics-heroes-text-thumbnail.png" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default OurClients
