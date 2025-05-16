import { Fragment, ReactElement } from "react";
import { ProjectData } from "../project_class";

import { Stack } from "react-bootstrap";
import {
    CloseButton,
    Content,
    ImageBanner,
    Popup,
    PopupHeader,
    PopupOverlay,
    TableOfContent,
} from "./project_popup.styles";

function ProjectPopup({
    setOpenedCard,
    selectedProject,
}: {
    setOpenedCard: (value: boolean) => void;
    selectedProject: ProjectData | null;
}): ReactElement {
    return (
        <Fragment>
            <PopupOverlay onClick={() => setOpenedCard(false)}></PopupOverlay>
            <Popup>
                <Stack gap={1} direction="vertical" className="h-100">
                    <ImageBanner className="flex-grow-0">
                        <PopupHeader>
                            <h2>{selectedProject?.name}</h2>
                            <p>{selectedProject?.description}</p>
                        </PopupHeader>
                    </ImageBanner>
                    <Stack direction="horizontal" gap={1} className="flex-grow-1 h-100">
                        <TableOfContent className="flex-grow-1">asd</TableOfContent>
                        <Content className="flex-grow-1">asd</Content>
                    </Stack>
                </Stack>
                <CloseButton onClick={() => setOpenedCard(false)}>Close</CloseButton>
            </Popup>
        </Fragment>
    );
}

export default ProjectPopup;
