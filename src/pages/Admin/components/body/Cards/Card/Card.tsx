import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPencil, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import style from "./Card.module.scss";
import { NewDataProps } from "../../../../../../components/App/data";
import { formatDate } from "../../../../../../configs/dateConfig";

const Card = ({ building }: { building: NewDataProps }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  // const handleNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % building.images.length);
  // };

  // const handlePreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? building.images.length - 1 : prevIndex - 1
  //   );
  // };

  
  

  return (
    <>
      <tr className={style.cardRow}>
        <td>{building.title}</td>
        <td>{building.subtitle}</td>
        <td>{building.description}</td>
        <td>{building.category}</td>
        <td>
        <img
            src={building.profileImage}
            alt={building.title}
            className={style.profileImage}
            onClick={() => handleImageClick(0)} // Make profile image clickable
          />
        </td>
        <td>{formatDate(building.date)}</td>
        <td>{building.location}</td>
        <td>{building.area}</td>
        <td>{building.client}</td>
        <td>{building.architect}</td>
        <td>{building.stage}</td>
        <td>
          {/* {building.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${building.id} image ${index + 1}`}
              className={style.multipleImage}
              onClick={() => handleImageClick(index)} // Make image clickable
            />
          ))} */}
        </td>
        <td colSpan={12} className={style.actionButtons}>
          <Button
            className="mb-2"
            variant="outline-primary"
            onClick={() => console.log(`Edit ${building.id}`)}
          >
            <FaPencil />
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => console.log(`Delete ${building.id}`)}
          >
            <FaTrash />
          </Button>
        </td>
      </tr>

      {/* Modal for displaying larger image */}
      {/* <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className={style.modalBody}>
          <Button
            variant="outline-secondary"
            className={style.arrowButton}
            // onClick={handlePreviousImage}
          >
            <FaChevronLeft />
          </Button>
          <img
            src={building.images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={style.modalImage}
          />
          <Button
            variant="outline-secondary"
            className={style.arrowButton}
            onClick={handleNextImage}
          >
            <FaChevronRight />
          </Button>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Card;