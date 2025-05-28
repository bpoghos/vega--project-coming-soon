import { Spinner, Table, Form } from 'react-bootstrap';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import { NewDataProps, residentialCategoryData } from '../../../../../components/App/data';

const Cards = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [yearFilter, setYearFilter] = useState('');




    return (
        <>
            <div className="m-3 d-flex justify-content-end gap-2">
                <Form.Control
                    type="text"
                    placeholder="Search by year"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    style={{ maxWidth: '300px' }}
                />
                <Form.Control
                    type="text"
                    placeholder="Search by city or hall name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ maxWidth: '300px' }}
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Profile_image</th>

                        <th>Date</th>
                        <th>Location</th>
                        <th>Area</th>
                        <th>Client</th>
                        <th>Architect</th>
                        <th>Stage</th>
                        <th>Multiple_image</th>
                    </tr>
                </thead>
                <tbody>
                    {!residentialCategoryData.projects.length ? (
                        <tr>
                            <td className="text-center">
                                No data
                            </td>
                        </tr>
                    ) : residentialCategoryData.projects.map((building: NewDataProps) => (
                            <Card building={building} key={building.id} />
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6} className="text-start">
                            {/* <strong>Total Concerts: {filteredData.length}</strong> */}
                        </td>
                    </tr>
                </tfoot>
            </Table>
            {/* {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                </div>
            )}       */}
              </>
    );
}

export default Cards;
