import { ReactElement, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getProjectData, ProjectData } from "../project-content/project_class";
import {
    Content,
    ContentContainer,
    Dates,
    Header,
    ProjectDetailContainer,
    TableOfContent,
    TechStack,
    Title,
} from "./project_details.styles";

export default function ProjectDetails(): ReactElement {
    const { name } = useParams();
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [idMap, setIdMap] = useState<Record<string, string>>({});
    const projectData: ProjectData | undefined = getProjectData(name);
    const [markdownContent, setMarkdownContent] = useState<string>("");

    useEffect(() => {
        if (projectData?.markdown) {
            fetch(projectData.markdown)
                .then((res) => res.text())
                .then((text) => {
                    setMarkdownContent(text);
                    const { headings, idMap } = extractHeadings(text);
                    setHeadings(headings);
                    setIdMap(idMap);
                })
                .catch((err) => {
                    console.error("Error loading markdown:", err);
                    setMarkdownContent("**Error loading content.**");
                });
        }
    }, [projectData]);

    if (!projectData) {
        return <div>Work not found</div>;
    }

    return (
        <ProjectDetailContainer direction="horizontal">
            <TableOfContent>
                {" "}
                <ul>
                    {headings.map((heading) => (
                        <li
                            key={heading.id}
                            className={heading.level > 1 ? "inner_heading" : "outer_heading"}
                            style={{ marginLeft: (heading.level - 1) * 10 }}
                        >
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(heading.id);
                                    if (el) {
                                        el.classList.add("highlight");
                                        el.scrollIntoView({ behavior: "smooth", block: "start" });

                                        setTimeout(() => {
                                            el.classList.remove("highlight");
                                        }, 1000); // 3 seconds
                                    }
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </TableOfContent>
            <ContentContainer>
                <Header>
                    <Title>{projectData.name}</Title>
                    <Dates>
                        {formatDateUTC(projectData.startDate)} -{" "}
                        {projectData.endDate ? formatDateUTC(projectData.endDate) : ""}
                    </Dates>
                    <TechStack>{projectData.tech_stack}</TechStack>
                    <div className="button_container">
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
                    </div>
                </Header>
                <Content>
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h1 id={idMap[text] || ""} {...props} />;
                            },
                            h2: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h2 id={idMap[text] || ""} {...props} />;
                            },
                            h3: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h3 id={idMap[text] || ""} {...props} />;
                            },
                            h4: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h4 id={idMap[text] || ""} {...props} />;
                            },
                            h5: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h5 id={idMap[text] || ""} {...props} />;
                            },
                            h6: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h6 id={idMap[text] || ""} {...props} />;
                            },
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </Content>
            </ContentContainer>
        </ProjectDetailContainer>
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

function getHeadingText(children: React.ReactNode): string {
    if (typeof children === "string") {
        return children;
    }

    if (Array.isArray(children)) {
        return children.map(getHeadingText).join("");
    }

    if (typeof children === "object" && children !== null && "props" in children) {
        return getHeadingText((children as any).props.children);
    }

    return "";
}
