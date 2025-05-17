import { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getWorkData, WorkData } from "../../sidebar/work";
import {
    CompanyName,
    Content,
    ContentContainer,
    DetailsContainer,
    FullTitle,
    Header,
    TableOfContent,
    TechStack,
    Years,
} from "./work_details.styles";

export default function WorkDetail(): ReactElement {
    const { title } = useParams();
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [idMap, setIdMap] = useState<Record<string, string>>({});

    const workData: WorkData | undefined = getWorkData(title);
    const [markdownContent, setMarkdownContent] = useState<string>("");

    useEffect(() => {
        if (workData?.markdown) {
            fetch(workData.markdown)
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
    }, [workData]);

    if (!workData) {
        return <div>Work not found</div>;
    }

    return (
        <DetailsContainer direction="horizontal" gap={2}>
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
                                        }, 3000); // 3 seconds
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
                    <FullTitle>{workData.GetFullTitle()}</FullTitle>
                    <CompanyName>{workData.company}</CompanyName>
                    <Years>Date: {workData.years}</Years>
                    <TechStack>{workData.tech_stack}</TechStack>
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
        </DetailsContainer>
    );
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
