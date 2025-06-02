import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../configs/firebase/firebase";
import { categoryDataArray } from "../../../../components/App/data";

interface AdminDataProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  profileImage: string;
  date: string;
  location: string;
  area: string;
  client: string;
  architect: string;
  stage: string;
  multipleImages: string[];
}

const AdminAddForm = ({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) => {
  const [formData, setFormData] = useState<AdminDataProps>({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    profileImage: "",
    date: "",
    location: "",
    area: "",
    client: "",
    architect: "",
    stage: "",
    multipleImages: [],
  });
  const [isUpload, setIsUpload] = useState<boolean>(false);

  const stageOptions = ["Planning", "Construction", "Completed"]; // Predefined stage options

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUpload(true); // Show skeleton while uploading

    const storageRef = ref(storage, `adminPhotos/${file.name}_${Date.now()}`);
    try {
      await uploadBytes(storageRef, file); // Upload the file to Firebase storage
      const downloadURL = await getDownloadURL(storageRef); // Get the download URL

      setFormData((prevState) => ({
        ...prevState,
        profileImage: downloadURL, // Update the profileImage in formData
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUpload(false); // Remove skeleton after upload is complete
    }
  };

  const handleMultipleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUpload(true);

    const uploadedImages: string[] = [];
    for (const file of Array.from(files)) {
      const storageRef = ref(storage, `adminPhotos/${file.name}_${Date.now()}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        uploadedImages.push(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      multipleImages: [...prevState.multipleImages, ...uploadedImages],
    }));

    setIsUpload(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setShowModal(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formSubtitle" className="mb-3">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="formDescription" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          required
        />
      </Form.Group>

      <Row>
        <Form.Group as={Col} controlId="formCategory" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categoryDataArray.map((category) => (
              <option key={category.name} value={category.name}>
                {category.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formDate" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formLocation" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formArea" className="mb-3">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formClient" className="mb-3">
          <Form.Label>Client</Form.Label>
          <Form.Control
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formArchitect" className="mb-3">
          <Form.Label>Architect</Form.Label>
          <Form.Control
            type="text"
            name="architect"
            value={formData.architect}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="formStage" className="mb-3">
        <Form.Label>Stage</Form.Label>
        <Form.Select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          required
        >
          <option value="">Select Stage</option>
          {stageOptions.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formProfileImage" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <div className="mb-2">
          {isUpload ? (
            <div className="placeholder-glow" style={{ width: "150px", height: "100px" }}>
              <div className="placeholder col-12" style={{ height: "100%" }}></div>
            </div>
          ) : (
            formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Preview"
                className="img-thumbnail"
                style={{ width: "150px", height: "100px", objectFit: "cover" }}
              />
            )
          )}
        </div>
        <Form.Control type="file" name="profileImage" onChange={handleFileChange} />
      </Form.Group>

      <Form.Group controlId="formMultipleImages" className="mb-3">
        <Form.Label>Multiple Images</Form.Label>
        <div className="mb-2">
          {formData.multipleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="img-thumbnail"
              style={{ width: "150px", height: "100px", objectFit: "cover", marginRight: "5px" }}
            />
          ))}
        </div>
        <Form.Control type="file" name="multipleImages" onChange={handleMultipleFileChange} multiple />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="outline-dark" onClick={() => setShowModal(false)} className="me-2">
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AdminAddForm;