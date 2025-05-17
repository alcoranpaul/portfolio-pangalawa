import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { WorkData, workDataList } from "../../class/work";
import {
    Button,
    DescriptionList,
    TableOfContentContainer,
    WorkContainer,
    WorkContent,
    WorkHeader,
    WorkItem,
} from "./work.styles";

export default function Work(): ReactElement {
    const workList: WorkData[] = workDataList;

    return (
        <WorkContainer direction="horizontal">
            <TableOfContentContainer>
                <nav>
                    <ul>
                        {workList.map((data) => (
                            <li key={data.title}>
                                <a href={`#${encodeURIComponent(data.title)}`}>{data.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </TableOfContentContainer>

            <WorkContent gap={3}>{workList.map((data) => RenderWorkItem(data))}</WorkContent>
        </WorkContainer>
    );
}

function RenderWorkItem(data: WorkData): ReactElement {
    return (
        <WorkItem>
            <WorkHeader>
                <h1 id={data.title}>{data.title}</h1>
                <div>{data.years}</div>
            </WorkHeader>
            <h3>{data.company}</h3>
            <DescriptionList>
                {data.description.map((item, index) => (
                    <li>
                        <ReactMarkdown key={index}>{item}</ReactMarkdown>
                    </li>
                ))}
            </DescriptionList>
            <Button to={`/work/${data.title}`}>View More Details</Button>
        </WorkItem>
    );
}
