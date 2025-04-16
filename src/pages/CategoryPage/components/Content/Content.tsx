import { Container } from "react-bootstrap"
import styles from "./Content.module.css"
import { CategoryName } from "../../../../constants/constants"

const Content: React.FC = () => {
    return (
        <Container className={styles.content}>
            <h1>{CategoryName.RESIDENTAL}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation</p>
        </Container>
    )
}

export default Content
