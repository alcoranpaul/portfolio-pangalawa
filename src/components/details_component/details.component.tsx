import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { ProjectData } from "../../routes/projects/project-content/project_class";
import { WorkData } from "../../routes/work/work";
import {
    Content,
    ContentContainer,
    DetailsContainer,
    Header,
    TableOfContent,
} from "./details.styles";

type Heading = {
    level: number;
    text: string;
    id: string;
};

export interface DetailsComponentProps {
    data: WorkData | ProjectData;
    markdownContent: string;
    headings: Heading[];
    idMap: Record<string, string>;
    headerContent: ReactElement;
}

export default function DetailsComponent({
    detailProps,
}: {
    detailProps: DetailsComponentProps;
}): ReactElement {
    return (
        <DetailsContainer direction="horizontal" gap={2}>
            <TableOfContent>
                {" "}
                <ul>
                    {detailProps.headings.map((heading) => (
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
                <Header>{detailProps.headerContent}</Header>
                <Content>
                    {" "}
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h1 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                            h2: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h2 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                            h3: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h3 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                            h4: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h4 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                            h5: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h5 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                            h6: ({ node, ...props }) => {
                                const text = getHeadingText(props.children);
                                return <h6 id={detailProps.idMap[text] || ""} {...props} />;
                            },
                        }}
                    >
                        {detailProps.markdownContent}
                    </ReactMarkdown>
                </Content>
            </ContentContainer>
        </DetailsContainer>
    );
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
