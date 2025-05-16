import { Fragment, ReactElement, useState } from "react";
import ProjectContentItem from "./project-content-item/project_content_item.component";
import { ProjectData, projectDataList } from "./project_class";
import { ItemContainer, ProjectContainer } from "./project_content.styles";
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
            <ProjectContainer>
                {openedCard && (
                    <ProjectPopup setOpenedCard={setOpenedCard} selectedProject={selectedProject} />
                )}
                <ItemContainer className={`${openedCard ? "disabled" : ""}`}>
                    {RenderProjectItems()}
                </ItemContainer>
            </ProjectContainer>
        </Fragment>
    );
}

export default ProjectContent;
