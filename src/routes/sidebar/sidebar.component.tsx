import { ReactElement } from "react";
import { PiFolderStarFill } from "react-icons/pi";
import { Directory } from "../../class/directory_class.ts";
import { File } from "../../class/file.ts";

import DirectoryComponent from "../../components/directory_component/directory.component";

import { projectDataList } from "../../class/project_class.ts";
import { workDataList } from "../../class/work.ts";
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
    const features_directory = new Directory("features", [
        new File("home", "/"),
        new File("projects", "/projects"),
        new File("work", "/work"),
        // new File("skills", "/skills"),
        // new File("education", "/education"),
        // new File("contact", "/contact"),
        new File("about", "/about"),
    ]);

    const work_directory = new Directory(
        "work",
        workDataList.map((data) => new File(data.title, `/work/${data.title}`))
    );

    const project_directory = new Directory(
        "projects",
        projectDataList.map((data) => new File(data.name, `/projects/${data.name}`))
    );

    const directories: Directory[] = [features_directory, work_directory, project_directory];

    return (
        <SidebarContainer gap={1}>
            <Header>&emsp; EXPLORER</Header>
            <Content>
                <RepoName>&#x23F7; PORTFOLIO-PANGALAWA</RepoName>
                {directories.map((directory, index) => (
                    <DirectoryComponent
                        directory={directory}
                        key={index}
                        icon={<PiFolderStarFill size={15} />}
                        defaultState={index === 0}
                    />
                ))}
            </Content>
        </SidebarContainer>
    );
}

export default Sidebar;
