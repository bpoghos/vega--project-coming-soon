import { Container } from "react-bootstrap";
// import { FakeDataEntry } from "../../components/App/App";
import { useParams } from "react-router";
import styles from "./SinglePage.module.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
// import { fakeData } from "../../components/App/data";

const SinglePage = (/* { fakeData }: { fakeData: FakeDataEntry[] } */) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const { id } = useParams<{ id: string }>(); // Extracting id from the URL

  // // Finding the relevant entry in fakeData based on id
  // const selectedData = fakeData.find((item: { id: string | undefined; }) => item.id === id);

  // // If selectedData is undefined, return a fallback or loading state
  // if (!selectedData) {
  //   return (
  //     <Container>
  //       <h6>No data found for this entry</h6>
  //     </Container>
  //   );
  // }

  // Function to go to the next image
  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedData.images.length);
  // };

  // // Function to go to the previous image
  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? selectedData.images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div>
      <Container className={styles.imagesContainer}>
{/* 
        <img
          alt=""
          src={selectedData.images[currentIndex]}
          className={styles.image}
        />


        <button onClick={prevImage} className={styles.arrowLeft}><FaArrowLeft /></button>
        <button onClick={nextImage} className={styles.arrowRight}><FaArrowRight /></button>
      </Container>

      <Container className={styles.textPart}>
        <h5>{selectedData.title}</h5> 
        <p>{selectedData.client}</p> 
        <p>{selectedData.date}</p> 
        <p>{selectedData.address}</p>  */}
      </Container>
    </div>
  );
};

export default SinglePage;
