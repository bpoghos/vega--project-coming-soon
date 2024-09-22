import { Container } from "react-bootstrap";
import { FakeDataEntry } from "../../components/App/App";
import { useParams } from "react-router";
import styles from "./SinglePage.module.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const SinglePage = ({ fakeData }: { fakeData: FakeDataEntry[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams<{ id: string }>(); // Extracting id from the URL

  // Finding the relevant entry in fakeData based on id
  const selectedData = fakeData.find(item => item.id === Number(id));

  // If selectedData is undefined, return a fallback or loading state
  if (!selectedData) {
    return (
      <Container>
        <h6>No data found for this entry</h6>
      </Container>
    );
  }

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedData.images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedData.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Container className={styles.imagesContainer}>
        {/* Show only one image based on currentIndex */}
        <img
          alt=""
          src={selectedData.images[currentIndex]}
          className={styles.image}
        />

        {/* Arrows for navigation */}
        <button onClick={prevImage} className={styles.arrowLeft}><FaArrowLeft /></button>
        <button onClick={nextImage} className={styles.arrowRight}><FaArrowRight /></button>
      </Container>

      <Container className={styles.textPart}>
        <h5>{selectedData.title}</h5> {/* Use dynamic title */}
        <p>{selectedData.client}</p> {/* Use dynamic description */}
        <p>{selectedData.date}</p> {/* Use dynamic description */}
        <p>{selectedData.address}</p> {/* Use dynamic description */}
      </Container>
    </div>
  );
};

export default SinglePage;
