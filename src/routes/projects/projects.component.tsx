import { Fragment, ReactElement, useState } from "react";
import { Stack } from "react-bootstrap";
import ProjectContent from "./project-content/project_content.component";
import ProjectFilter from "./project-filter/project_filter.component";
import './projects.style.css';

function Projects(): ReactElement {

    const [selectedFilterIndex, setSelectedFilterIndex] = useState<number>(0);

    const handleFilterSelect = (index: number): void => {
        setSelectedFilterIndex(index); // Update the selected filter index
        console.log(`Selected Filter Index: ${index}`); // Log the selected index
    };

    return(
        <Fragment>
            <Stack gap={4} className="projects_container">
                <ProjectFilter onFilterSelect={handleFilterSelect}/>
                <ProjectContent/>
            </Stack>
        </Fragment>
    )

}

export default Projects;