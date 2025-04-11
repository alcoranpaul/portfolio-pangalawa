import { ReactElement, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './project_filter.style.css';

function ProjectFilter({ onFilterSelect }: { onFilterSelect: (index: number) => void }): ReactElement {
    const filters = [
        "All Softwares",
        "Websites",
        "Applications",
        "Games",
    ];

    const [selectedFilterIndex, setSelectedFilterIndex] = useState<number>(0);

    return (
        <Row className="projects_filter">
            {filters.map((filter, index) => (
                <Col
                    className={`projects_filter_item ${
                        selectedFilterIndex === index ? 'selected' : ''
                    }`}
                    key={index}
                    onClick={() => setSelectedFilterIndex(index)} // Attach the event handler
                    >
                    {filter}
                </Col>
            ))}
        </Row>
    );
}

export default ProjectFilter;