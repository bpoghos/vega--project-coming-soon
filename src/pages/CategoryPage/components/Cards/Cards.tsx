import { Button, Container, Row } from "react-bootstrap"
import styles from "./Cards.module.css"
import Card from "./Card/Card"
import { FakeDataEntry } from "../../../../components/App/App"
import { useState } from "react"

const Cards = ({fakeData}:{fakeData:FakeDataEntry[]}) => {


    const [visibleCount, setVisibleCount] = useState(9);

    const handleShowMore = () => {
      setVisibleCount(prevCount => prevCount + 3); 
    };


    return (
        <>
             <Container className={styles.container}>
      <Row>
        {
          fakeData.slice(0, visibleCount).map((project) => (
            <Card test={project.profile} key={project.id} project={project}/>
          ))
        }
      </Row>
      {
        visibleCount < fakeData.length && ( 
          <Button variant="secondary" onClick={handleShowMore}>MORE</Button>
        )
      }
    </Container>
        </>
    )
}

export default Cards
