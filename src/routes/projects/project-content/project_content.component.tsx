import { Fragment, ReactElement } from "react";
import { projectDataList } from "../../../class/project_class";
import ProjectContentItem from "./project-content-item/project_content_item.component";
import { ItemContainer, ProjectContainer } from "./project_content.styles";

function ProjectContent(): ReactElement {
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
