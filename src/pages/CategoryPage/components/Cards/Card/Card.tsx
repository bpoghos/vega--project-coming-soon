import { Col } from "react-bootstrap"
import styles from "./Card.module.css"
import { useNavigate } from "react-router"




const Card = ({ test, project }: { test: any, project: any }) => {

    const navigate: any = useNavigate()  
console.log(project);


    return (
        <Col lg={4} sm={12} xs={12} onClick={() => navigate(`/projects/${project.id}`)}>
            <div className={styles.card}>
                <img alt="" src={test} />
                <div className={styles.hover}>
                    <div className={styles.contentContainer}>
                        <div>
                            <p className={styles.title}>House</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsum
                                dolor sit amet consectetur adipiscing elit sed
                                magna aliqua enim minim veniam exercitation ipsum
                                dolor sit amet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card
