import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { ProjectData } from "../../class/project_class";
import { WorkData } from "../../class/work";
import TableOfContent, { Heading } from "../table_of_content/table_of_content.component";
import { Content, ContentContainer, DetailsContainer, Header } from "./details.styles";

export interface DetailsComponentProps {
    data: WorkData | ProjectData | null;
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
            <TableOfContent headings={detailProps.headings} />

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
