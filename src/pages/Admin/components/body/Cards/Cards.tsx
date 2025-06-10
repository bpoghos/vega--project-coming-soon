import { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import Card from "./Card/Card";
import { CategoryData, NewDataProps } from "../../../../../components/App/data";
import { useVegaData } from "../../../../../customHooks/useVegaData";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Tracks selected category
  const [filteredProjects, setFilteredProjects] = useState<NewDataProps[]>([]); // Tracks filtered projects

  const { data } = useVegaData(); // Access data from context

  // Show all projects initially
  useEffect(() => {
    if (data) {
      const allProjects = data.flatMap((category: CategoryData) => category.projects); // Combine all projects
      setFilteredProjects(allProjects);
    }
  }, [data]); // Run whenever `data` changes

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);

    if (!categoryName) {
      // Show all projects if no category is selected
      const allProjects = data?.flatMap((category: CategoryData) => category.projects) || [];
      setFilteredProjects(allProjects);
    } else {
      // Filter projects by selected category
      const selectedCategoryData = data?.find((category: CategoryData) => category.name === categoryName);
      setFilteredProjects(selectedCategoryData ? selectedCategoryData.projects : []);
    }
  };

  return (
    <>
      <div className="m-3 d-flex justify-content-end gap-2">
        {/* Category Dropdown */}
        <Form.Select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ maxWidth: "300px" }}
        >
          <option value="">All Categories</option>
          {data?.map((category: CategoryData) => (
            <option key={category.id} value={category.name}>
              {category.title}
            </option>
          ))}
        </Form.Select>
      </div>

      {/* Projects Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Description</th>
            <th>Category</th>
            <th>Profile Image</th>
            <th>Date</th>
            <th>Location</th>
            <th>Area</th>
            <th>Client</th>
            <th>Architect</th>
            <th>Stage</th>
            <th>Multiple Images</th>
          </tr>
        </thead>
        <tbody>
          {/* Show "No Data" if no projects are available */}
          {!filteredProjects.length ? (
            <tr>
              <td colSpan={12} className="text-center">
                No data
              </td>
            </tr>
          ) : (
            filteredProjects.map((building: NewDataProps) => (
              <Card building={building} key={building.id} />
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={12} className="text-start">
              <strong>Total Projects: {filteredProjects.length}</strong>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  );
};

export default Cards;