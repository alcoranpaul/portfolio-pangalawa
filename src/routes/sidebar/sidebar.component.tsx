import { Fragment, ReactElement } from "react";
import { PiFolderStarFill } from "react-icons/pi";
import { Directory } from "../../class/directory_class.ts";
import { File } from "../../class/file.ts";
import DirectoryComponent from "../../components/directory_component/directory.component";

import { Content, Header, RepoName, SidebarContainer } from "./sidebar.styles.tsx";

/**
 * Sidebar component that serves as a container for the main sections of the sidebar.
 * It includes an image banner, navigation links, and social media links.
 *
 * @returns {ReactElement} A React fragment containing a stacked layout of the sidebar components.
 *
 * @component
 */
function Sidebar(): ReactElement {
    const directory_structure = new Directory("features", [
        new File("home", "/"),
        new File("projects", "/projects"),
        new File("work", "/work"),
        new File("skills", "/skills"),
        new File("education", "/education"),
        new File("contact", "/contact"),
        new File("about", "/about"),
    ]);

    return (
        <Fragment>
            <SidebarContainer gap={1}>
                <Header>&emsp; EXPLORER</Header>
                <Content>
                    <RepoName>&#x23F7; PORTFOLIO-PANGALAWA</RepoName>
                    <DirectoryComponent
                        directory={directory_structure}
                        icon={<PiFolderStarFill size={15} />}
                    />
                </Content>
            </SidebarContainer>
        </Fragment>
    );
}

export default Sidebar;
