import { ReactElement, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { projectDataList } from "../../../class/project_class";
import ProjectContentItem from "./project-content-item/project_content_item.component";
import { ItemContainer, ProjectContainer } from "./project_content.styles";

function ProjectContent(): ReactElement {
    const [isEnabled, setIsEnabled] = useState(false);
    const [renderedProjectItems, setRenderedProjectItems] = useState<ReactElement[]>();
    const RenderProjectItems = (setAnimeImg: boolean): ReactElement[] => {
        const rows: ReactElement[] = [];

        for (let i = 0; i < projectDataList.length; i++) {
            rows.push(
                <ProjectContentItem key={i} item={projectDataList[i]} setAnimeImg={setAnimeImg} />
            );
        }
        return rows;
    };

    const handleOnSwitchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = e.target.checked;
        setIsEnabled(newState);
    };

    useEffect(() => setRenderedProjectItems(RenderProjectItems(isEnabled)), [isEnabled]);
    useEffect(() => setRenderedProjectItems(RenderProjectItems(isEnabled)), []);

    return (
        <>
            <ProjectContainer>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={isEnabled ? "lololol.....q(≧▽≦q)" : "Click me....o(TヘTo)"}
                    checked={isEnabled}
                    onChange={handleOnSwitchChanged}
                />
                <ItemContainer>{renderedProjectItems}</ItemContainer>
            </ProjectContainer>
        </>
    );
}

export default ProjectContent;
