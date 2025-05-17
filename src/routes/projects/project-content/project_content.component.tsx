import { Fragment, ReactElement, useState } from "react";
import ProjectContentItem from "./project-content-item/project_content_item.component";
import { ProjectData, projectDataList } from "./project_class";
import { ItemContainer, ProjectContainer } from "./project_content.styles";

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
            rows.push(<ProjectContentItem key={i} item={projectDataList[i]} />);
        }
        return rows;
    };

    return (
        <Fragment>
            <ProjectContainer>
                <ItemContainer>{RenderProjectItems()}</ItemContainer>
            </ProjectContainer>
        </Fragment>
    );
}

export default ProjectContent;
