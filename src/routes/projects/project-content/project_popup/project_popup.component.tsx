import { Fragment, ReactElement } from "react";
import { ProjectData } from "../project_class";

import { Stack } from "react-bootstrap";
import './project_popup.style.css';

function ProjectPopup({ setOpenedCard, selectedProject }: { setOpenedCard: (value: boolean) => void, selectedProject: ProjectData | null }): ReactElement {

    return(
        <Fragment>
            <div className="popup_overlay" onClick={() => setOpenedCard(false)}></div>
            <div className="popup">
                {/* <div className="popup_image_banner">asd</div> */}
                <Stack gap={1} direction="vertical" className="h-100">
                    <div className="popup_image_banner flex-grow-0">
                        <div className="popup_header">
                            <h2>{selectedProject?.name}</h2>
                            <p>{selectedProject?.description}</p>
                        </div>
                    </div>
                    <Stack direction="horizontal" gap={1} className="flex-grow-1 h-100">
                        <div className="popup_table_of_content flex-grow-1">asd
                        </div>
                        <div className="popup_content flex-grow-1">asd</div>
                    </Stack>
                </Stack>
                <button onClick={() => setOpenedCard(false)} className="project_popup_close_button">Close</button>
            </div>
        </Fragment>
    )
}

export default ProjectPopup;