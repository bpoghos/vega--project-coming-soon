import { Button, Container, Row } from "react-bootstrap"
import styles from "./Cards.module.css"
import Card from "./Card/Card"
// import { FakeDataEntry } from "../../../../components/App/App"
import { useState } from "react"
import { CategoryData, categoryDataArray } from "../../../../components/App/data"
import { useParams } from "react-router"

const Cards = () => {


    const [visibleCount, setVisibleCount] = useState(9);

    const params = useParams<{ id: string }>();
    const categoryId = params.id;
    const findParams = categoryDataArray.find((item: CategoryData) => item.link === categoryId);

    
console.log(findParams?.projects);


    const handleShowMore = () => {
      setVisibleCount(prevCount => prevCount + 3); 
    };


    return (
        <>
             <Container className={styles.container}>
      <Row>
        {
          findParams?.projects?.map((project) => (
            <Card test={project.images} key={project.id} projects={project} />
          ))
        }
      </Row>
      {/* {
        visibleCount < fakeData.length && ( 
          <Button variant="secondary" onClick={handleShowMore}>MORE</Button>
        )
      } */}
    </Container>
        </>
    )
}

export default Cards
