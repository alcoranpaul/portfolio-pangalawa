import { Fragment, ReactElement } from 'react';
import { Stack } from 'react-bootstrap';

import { PiFolderStarFill } from "react-icons/pi";

import { Directory } from '../../class/directory_class.ts';
import { File } from '../../class/file.ts';
import DirectoryComponent from '../../components/directory_component/directory.component';
import './sidebar.style.css';


/**
 * Sidebar component that serves as a container for the main sections of the sidebar.
 * It includes an image banner, navigation links, and social media links.
 *
 * @returns {ReactElement} A React fragment containing a stacked layout of the sidebar components.
 *
 * @component 
 */
function Sidebar(): ReactElement {
    const directory_structure = new Directory("features",
        [
            new File("home", "/home"),
            new File("projects", "/projects"),
            new File("work", "/work"),
            new File("skills", "/skills"),
            new File("education", "/education"),
            new File("contact", "/contact"),
            new File("about", "/about"),
        ]
    )

    return (
        <Fragment>
            <Stack gap={1} className="sidebar_stack">
                <div className='sidebar_header'>&emsp; EXPLORER</div> 
                <div className='sidebar_content'>
                    <div className='sidebar_content_repo'>&#x23F7; PORTFOLIO-PANGALAWA</div>
                    <DirectoryComponent directory={directory_structure} icon={<PiFolderStarFill size={15} />} />
                </div>
            </Stack>
        </Fragment>
    );
}

export default Sidebar
