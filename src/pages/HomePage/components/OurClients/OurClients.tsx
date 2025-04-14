import { Col, Container, Row } from "react-bootstrap"
import { OurClientsContent } from "../../../../constants/constants"
import styles from "./OurClients.module.scss"

const OurClients: React.FC = () => {


    const logoData = [  
        "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/361/627/png-clipart-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png",
        "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJe_mCEynMS8WdCoofU7AyWV93nmRtQf4o3w&usqp=CAU",
        "https://w7.pngwing.com/pngs/505/437/png-transparent-superman-logo-superman-logo-batman-superman-logo-comics-heroes-text-thumbnail.png"
    ]

    return (
        <section className={styles.ourClients}>
            <h2 className={styles.ourClientsTitle}>{OurClientsContent.TITLE}</h2>
            <h6 className={styles.ourClientsSubtitle}><em>{OurClientsContent.DESCRIPTION}</em></h6>
            <Container className={styles.container}>
                <Row>
                    {logoData.map((logo, index) => (
                        <Col key={index} lg={2} md={4} sm={4} xs={6}  >
                            <article className={styles.card}>
                                <img alt='' src={logo} />
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default OurClients
