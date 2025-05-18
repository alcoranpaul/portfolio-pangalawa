import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { WorkData, workDataList } from "../../class/work";
import TableOfContent, {
    Heading,
} from "../../components/table_of_content/table_of_content.component";
import {
    Button,
    DescriptionList,
    WorkContainer,
    WorkContent,
    WorkHeader,
    WorkItem,
} from "./work.styles";

export default function Work(): ReactElement {
    const workList: WorkData[] = workDataList;

    const headings: Heading[] = workList.map((work) => ({
        level: 1,
        text: work.title,
        id: encodeURIComponent(work.title),
    }));

    return (
        <WorkContainer direction="horizontal">
            <TableOfContent headings={headings} />

            <WorkContent gap={3}>
                {workList.map((data) => (
                    <WorkItem key={data.title}>
                        <WorkHeader>
                            <h1 id={encodeURIComponent(data.title)}>{data.title}</h1>
                            <div>{data.years}</div>
                        </WorkHeader>
                        <h3>{data.company}</h3>
                        <DescriptionList>
                            {data.description.map((item, index) => (
                                <li key={index}>
                                    <ReactMarkdown>{item}</ReactMarkdown>
                                </li>
                            ))}
                        </DescriptionList>
                        <Button to={`/work/${encodeURIComponent(data.title)}`}>
                            View More Details
                        </Button>
                    </WorkItem>
                ))}
            </WorkContent>
        </WorkContainer>
    );
}
