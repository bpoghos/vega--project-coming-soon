import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPencil, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import style from "./Card.module.scss";
import { NewDataProps } from "../../../../../../components/App/data";
import { formatDate } from "../../../../../../configs/dateConfig";
import { useVegaData } from "../../../../../../customHooks/useVegaData";
import AdminModal from "../../../Modal/Modal";

const Card = ({ building }: { building: NewDataProps }) => {
  const [showImageModal, setShowImageModal] = useState(false); // State for image modal
  const [showAdminModal, setShowAdminModal] = useState(false); // State for AdminModal
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showProfileImageModal, setShowProfileImageModal] = useState(false); // State for profile image modal
  const [editPostData, setEditPostData] = useState<NewDataProps | null>(null); // State for editing post data

  const { deletePost } = useVegaData();

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageModal(true); // Open image modal
  };

  const handleProfileImageClick = () => {
    setShowProfileImageModal(true); // Open profile image modal
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (building.multipleImages?.length ?? 0));
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (building.multipleImages?.length ?? 0) - 1 : prevIndex - 1
    );
  };

  const handleEditClick = () => {
    setEditPostData(building); // Set the post data for editing
    setShowAdminModal(true); // Open AdminModal
  };



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
            onClick={handleProfileImageClick} // Separate click handler for profile image
          />
        </td>
        <td>{formatDate(building.date)}</td>
        <td>{building.location}</td>
        <td>{building.area}</td>
        <td>{building.client}</td>
        <td>{building.architect}</td>
        <td>{building.stage}</td>
        <td>
          {building.multipleImages?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${building.id} image ${index + 1}`}
              className={style.multipleImage}
              onClick={() => handleImageClick(index)} // Separate click handler for multiple images
            />
          ))}
        </td>
        <td colSpan={12} className={style.actionButtons}>
          <Button
            variant="outline-primary"
            onClick={handleEditClick} // Open edit modal
          >
            <FaPencil />
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => deletePost(building.id)} // Delete post
          >
            <FaTrash />
          </Button>
        </td>
      </tr>

      {/* Modal for displaying larger profile image */}
      <Modal show={showProfileImageModal} onHide={() => setShowProfileImageModal(false)} centered>
        <Modal.Body className={style.modalBody}>
          <img
            src={building.profileImage}
            alt={`Profile Image of ${building.title}`}
            className={style.modalImage}
          />
        </Modal.Body>
      </Modal>

      {/* Modal for displaying larger multiple images */}
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)} centered>
        <Modal.Body className={style.modalBody}>
          <Button
            variant="outline-secondary"
            className={style.arrowButton}
            onClick={handlePreviousImage}
          >
            <FaChevronLeft />
          </Button>
          <img
            src={building.multipleImages?.[currentImageIndex] ?? ""}
            alt={`Image ${currentImageIndex + 1} of ${building.title}`}
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
      </Modal>

      {/* Modal for adding/editing the post */}
      <AdminModal
        showModal={showAdminModal}
        setShowModal={setShowAdminModal}
        adminData={editPostData} // Pass the post data for editing
      />
    </>
  );
};

export default Card;