import { Fragment, ReactElement } from "react";
import ProjectContentItem from "./project-content-item/project_content_item.component";

import './project_content.style.css';

function ProjectContent(): ReactElement {
    const projects = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    ]
 

    const RenderProjectItems = (): ReactElement[] => {
        const rows: ReactElement[] = [];
        
        for (let i = 0; i < projects.length; i++) {
           rows.push(
                <ProjectContentItem key={i} item={projects[i]} />
            )
        }
        return rows;
    };

    return(
        <Fragment>
            <div className="projects_content">
                {RenderProjectItems()}
            </div>
        </Fragment>
    )
}

export default ProjectContent;