import { Container } from "react-bootstrap";
// import { FakeDataEntry } from "../../components/App/App";
import { useParams } from "react-router";
import styles from "./SinglePage.module.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CategoryData, categoryDataArray } from "../../components/App/data";
// import { fakeData } from "../../components/App/data";

const SinglePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams<{ id: string }>(); // Extracting id from the URL

  // Finding the relevant entry in fakeData based on id

  const params = useParams<{ id: string }>();
  const categoryId = params.id;

  console.log("categoryId", typeof categoryId);

  const projects = categoryDataArray.map((item) => item.projects).flat();

  const projectId = projects.find((item) => item.id === Number(categoryId));

  console.log("projectId", projectId);

  // console.log("findParams", findParams);



  // const selectedData = fakeData.find((item: { id: string | undefined; }) => item.id === id);

  // If selectedData is undefined, return a fallback or loading state
  // if (!findParams?.projects) {
  //   return (
  //     <Container>
  //       <h6>No data found for this entry</h6>
  //     </Container>
  //   );
  // }



  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % findParams.projects.images.length || 1);
  // };

  // // Function to go to the previous image
  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? findParams.images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div>
      {/* <Container className={styles.imagesContainer}> */}

      <img
          alt=""
          src={projectId?.images[0]}
          className={styles.image}
        />

      <h1>{projectId?.title}</h1>

      {/* <button onClick={prevImage} className={styles.arrowLeft}><FaArrowLeft /></button>
        <button onClick={nextImage} className={styles.arrowRight}><FaArrowRight /></button> */}
      {/* </Container> */}

      {/* <Container className={styles.textPart}>
        <h5>{findParams.title}</h5> 
        <p>{findParams.client}</p> 
        <p>{findParams.date}</p> 
        <p>{findParams.address}</p> 
      </Container> */}
    </div>
  );
};

export default SinglePage;
