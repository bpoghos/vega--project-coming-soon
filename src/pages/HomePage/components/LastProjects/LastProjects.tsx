import { Col, Container, Row } from "react-bootstrap"
import styles from "./LastProjects.module.css"
import { LastProjectsContent } from "../../../../constants/constants"
import image1 from "../../../../images/Zoler/profile.jpg"
import image2 from "../../../../images/ArmenBaldryan/profile.jpg"
import image3 from "../../../../images/YeastLaboratory/profile.jpg"
import { FakeDataEntry } from "../../../../components/App/App"
import { useNavigate } from "react-router"





const LastProjects = ({fakeData}: {fakeData:FakeDataEntry[]}) => {

    const navigate: any = useNavigate()  

   

    

    const lastProjectsData = [
        {
            image: image1,
            id: 9
        },
        {
            image: image2,
            id: 1
        },
        {
            image: image3,
            id: 8
        }
    ]
  

    console.log(lastProjectsData);



    return (
        <div className={styles.lastProjects}>
            <h2>{LastProjectsContent.TITLE}</h2>
            {/* <p>{LastProjectsContent.DESCRIPTION}</p> */}
            <Container className={styles.container}>
                <Row>
                    {
                        lastProjectsData.map((i) => {
                            return <Col lg={4} md={4} sm={12} key={i.id} onClick={() => navigate(`/projects/${i.id}`)}>
                                <div className={styles.card}>
                                    <img alt='' src={i.image} style={{ height: "300px" }} />
                                    {/* <p>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt
                                        ut laboret dolore magna aliqua enim minim veniam exercitation
                                    </p> */}
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LastProjects
