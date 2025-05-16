import { Fragment, ReactElement, useState } from "react";
import ProjectContentItem from "./project-content-item/project_content_item.component";
import { ProjectData, projectDataList } from "./project_class";
import "./project_content.style.css";
import ProjectPopup from "./project_popup/project_popup.component";

function ProjectContent(): ReactElement {
    const [openedCard, setOpenedCard] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const handleCardSelected = (item: ProjectData) => {
        setOpenedCard(true);
        setSelectedProject(item);
    };

    const RenderProjectItems = (): ReactElement[] => {
        const rows: ReactElement[] = [];

        for (let i = 0; i < projectDataList.length; i++) {
            rows.push(
                <ProjectContentItem
                    key={i}
                    item={projectDataList[i]}
                    onCardSelected={handleCardSelected}
                />
            );
        }
        return rows;
    };

    return (
        <Fragment>
            <div className="projects_content">
                {openedCard && (
                    <ProjectPopup setOpenedCard={setOpenedCard} selectedProject={selectedProject} />
                )}
                <div className={`projects_content_items ${openedCard ? "disabled" : ""}`}>
                    {RenderProjectItems()}
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectContent;
