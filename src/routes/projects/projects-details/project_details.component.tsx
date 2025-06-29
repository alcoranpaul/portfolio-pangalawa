import { ReactElement, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { extractHeadings } from "../../../class/helper_functions";
import { getProjectData, ProjectData } from "../../../class/project_class";
import DetailsComponent, {
    DetailsComponentProps,
} from "../../../components/details_component/details.component";
import {
    ButtonContainer,
    Dates,
    HeaderContainer,
    HeaderCover,
    TechStack,
    Title,
} from "./project_details.styles";

export default function ProjectDetails(): ReactElement {
    const { name } = useParams();

    const projectData: ProjectData | undefined = getProjectData(name);

    const [detailsComponentProps, setDetailsComponentProps] = useState<DetailsComponentProps>({
        data: {} as ProjectData,
        markdownContent: "",
        headings: [],
        idMap: {},
        headerContent: <></>, // Empty React fragment as default
        bannerImage: "",
    });
    useEffect(() => {
        if (projectData?.markdown) {
            fetch(projectData.markdown)
                .then((res) => res.text())
                .then((text) => {
                    const { headings, idMap } = extractHeadings(text);

                    setDetailsComponentProps({
                        data: projectData, // or projectData if applicable
                        markdownContent: text,
                        headings: headings,
                        idMap: idMap,
                        headerContent: (
                            <HeaderContainer imgUrl={projectData.image}>
                                <HeaderCover>
                                    <Title>{projectData.name}</Title>
                                    <Dates>
                                        {formatDateUTC(projectData.startDate)} -{" "}
                                        {projectData.endDate
                                            ? formatDateUTC(projectData.endDate)
                                            : ""}
                                    </Dates>
                                    <TechStack>{projectData.tech_stack}</TechStack>
                                    <ButtonContainer>
                                        <button
                                            disabled={!projectData.live_link}
                                            onClick={() => {
                                                if (projectData.live_link) {
                                                    window.open(projectData.live_link, "_blank"); // open external URL in new tab
                                                }
                                            }}
                                        >
                                            Live
                                        </button>

                                        <button
                                            disabled={!projectData.source_link}
                                            onClick={() => {
                                                if (projectData.source_link) {
                                                    window.open(projectData.source_link, "_blank"); // open external URL in new tab
                                                }
                                            }}
                                        >
                                            Source Code
                                        </button>
                                    </ButtonContainer>
                                </HeaderCover>
                            </HeaderContainer>
                        ), // or your actual ReactElement
                        bannerImage: projectData.image,
                    });
                })
                .catch((err) => {
                    console.error("Error loading markdown:", err);
                });
        }
    }, [projectData]);

    if (!projectData) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <DetailsComponent detailProps={detailsComponentProps} />
        </>
    );
}

function formatDateUTC(date: Date | string) {
    const d = typeof date === "string" ? new Date(date) : date;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const month = d.getUTCMonth();
    const year = d.getUTCFullYear();
    const day = d.getUTCDate();
    return `${monthNames[month]} ${day} ${year}`;
}
