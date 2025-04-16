import { Col } from "react-bootstrap"
import styles from "./Card.module.css"
import { useNavigate } from "react-router"
import { NewDataProps } from "../../../../../components/App/data"




const Card = ({ test, projects }: { test: string[], projects: NewDataProps }) => {

    const navigate: any = useNavigate()  
console.log(projects);

console.log(test[0]);

    return (
        <Col lg={4} sm={12} xs={12} onClick={() => navigate(`/projects/${projects.id}`)}>
            <div className={styles.card}>
                <img alt="" src={test[0]} />
                <div className={styles.hover}>
                    <div className={styles.contentContainer}>
                        <div>
                            <p className={styles.title}>{projects.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card
