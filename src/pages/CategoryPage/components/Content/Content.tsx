import { Container } from "react-bootstrap"
import styles from "./Content.module.css"
import { useParams } from "react-router"
import { CategoryData, categoryDataArray } from "../../../../components/App/data"

const Content: React.FC = () => {

    const params = useParams<{ id: string }>();
    const categoryId = params.id;
    const findParams = categoryDataArray.find((item: CategoryData) => item.link === categoryId);

    return (
        <Container className={styles.content}>
            <h1>{findParams?.title}</h1>
            <p>{findParams?.description}</p>
        </Container>
    )
}

export default Content
