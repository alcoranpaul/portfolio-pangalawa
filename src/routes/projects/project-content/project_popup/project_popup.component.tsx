import { Fragment, ReactElement } from "react";
import './project_popup.style.css';

function ProjectPopup({ setOpenedCard }: { setOpenedCard: (value: boolean) => void }): ReactElement {

    return(
        <Fragment>
            <div className="popup_overlay" onClick={() => setOpenedCard(false)}></div>
            <div className="popup">
                <h2>Popup Title</h2>
                <p>This is a popup inside the parent container.</p>
                <button onClick={() => setOpenedCard(false)}>Close</button>
            </div>
        </Fragment>
    )
}

export default ProjectPopup;