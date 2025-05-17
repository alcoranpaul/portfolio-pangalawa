import { ReactElement, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getProjectData, ProjectData } from "../../../class/project_class";
import DetailsComponent, {
    DetailsComponentProps,
} from "../../../components/details_component/details.component";
import { ButtonContainer, Dates, TechStack, Title } from "./project_details.styles";

export default function ProjectDetails(): ReactElement {
    const { name } = useParams();

    const projectData: ProjectData | undefined = getProjectData(name);

    const [detailsComponentProps, setDetailsComponentProps] = useState<DetailsComponentProps>({
        data: {} as ProjectData,
        markdownContent: "",
        headings: [],
        idMap: {},
        headerContent: <></>, // Empty React fragment as default
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
                            <>
                                <Title>{projectData.name}</Title>
                                <Dates>
                                    {formatDateUTC(projectData.startDate)} -{" "}
                                    {projectData.endDate ? formatDateUTC(projectData.endDate) : ""}
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
                            </>
                        ), // or your actual ReactElement
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
    return `${monthNames[month]} ${year}`;
}

type Heading = {
    level: number;
    text: string;
    id: string;
};

function extractHeadings(markdown: string): {
    headings: Heading[];
    idMap: Record<string, string>;
} {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm;
    const headings: Heading[] = [];
    const idMap: Record<string, string> = {};
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const rawText = match[2]
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/\*(.*?)\*/g, "$1")
            .replace(/__(.*?)__/g, "$1")
            .replace(/_(.*?)_/g, "$1")
            .trim();
        const id = rawText
            .toLowerCase()
            .replace(/[^\w]+/g, "-")
            .replace(/(^-|-$)/g, "");

        headings.push({ level, text: rawText, id });
        idMap[rawText] = id;
    }

    return { headings, idMap };
}
