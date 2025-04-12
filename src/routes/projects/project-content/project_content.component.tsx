import { Fragment, ReactElement, useState } from "react";
import ProjectContentItem from "./project-content-item/project_content_item.component";

import './project_content.style.css';

function ProjectContent(): ReactElement {
    const [openedCard, setOpenedCard] = useState<boolean>(false);

    const projects = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    ]

    const handleCardSelected = (item: string) => {
        setOpenedCard(true);
        console.log(item);
    }
 

    const RenderProjectItems = (): ReactElement[] => {
        const rows: ReactElement[] = [];
        
        for (let i = 0; i < projects.length; i++) {
           rows.push(
                <ProjectContentItem key={i} item={projects[i]} onCardSelected={handleCardSelected} />
            )
        }
        return rows;
    };

    return(
        <Fragment>

                <div className="projects_content">
                {openedCard && (
                    <Fragment>
                        <div className="popup_overlay" onClick={() => setOpenedCard(false)}></div>
                        <div className="popup">
                            <h2>Popup Title</h2>
                            <p>This is a popup inside the parent container.</p>
                            <button onClick={() => setOpenedCard(false)}>Close</button>
                        </div>
                    </Fragment>
                )}
                <div
                    className={`projects_content_items ${openedCard ? "disabled" : ""}`}>
                    {RenderProjectItems()}
                </div>
            </div>
    
        </Fragment>
    )
}

export default ProjectContent;