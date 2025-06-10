import { Container } from "react-bootstrap"
import styles from "./Content.module.css"
import { useParams } from "react-router"
import { CategoryData } from "../../../../components/App/data"
import { useVegaData } from "../../../../customHooks/useVegaData"

const Content: React.FC = () => {

const { data } = useVegaData(); // Access data from context


    const params = useParams<{ id: string }>();
    const categoryId = params.id;
    const findParams = data.find((item: CategoryData) => item.link === categoryId);

    return (
        <Container className={styles.content}>
            <h1>{findParams?.title}</h1>
            <p>{findParams?.description}</p>
        </Container>
    )
}

export default Content
