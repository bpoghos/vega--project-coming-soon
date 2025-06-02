import { Modal } from "react-bootstrap";
import AdminAddForm from "../AdminAddForm/AdminAddForm";

interface AdminModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  adminData?: any | null; // Pass admin data if editing
}

const AdminModal: React.FC<AdminModalProps> = ({ showModal, setShowModal, adminData }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{adminData ? "Edit Admin Data" : "Add New Admin Data"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <AdminAddForm setShowModal={setShowModal}  />
      </Modal.Body>
    </Modal>
  );
};

export default AdminModal;