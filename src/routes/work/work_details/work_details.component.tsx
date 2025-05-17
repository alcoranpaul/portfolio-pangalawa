import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsComponent, {
    DetailsComponentProps,
} from "../../../components/details_component/details.component";
import { getWorkData, WorkData } from "../work";
import { CompanyName, FullTitle, TechStack, Years } from "./work_details.styles";

export default function WorkDetail(): ReactElement {
    const { title } = useParams();
    const workData: WorkData | undefined = getWorkData(title);
    const [detailsComponentProps, setDetailsComponentProps] = useState<DetailsComponentProps>({
        data: {} as WorkData,
        markdownContent: "",
        headings: [],
        idMap: {},
        headerContent: <></>, // Empty React fragment as default
    });

    useEffect(() => {
        if (workData?.markdown) {
            fetch(workData.markdown)
                .then((res) => res.text())
                .then((text) => {
                    const { headings, idMap } = extractHeadings(text);

                    setDetailsComponentProps({
                        data: workData, // or projectData if applicable
                        markdownContent: text,
                        headings: headings,
                        idMap: idMap,
                        headerContent: (
                            <>
                                <FullTitle>{workData.GetFullTitle()}</FullTitle>
                                <CompanyName>{workData.company}</CompanyName>
                                <Years>Date: {workData.years}</Years>
                                <TechStack>{workData.tech_stack}</TechStack>
                            </>
                        ), // or your actual ReactElement
                    });
                })
                .catch((err) => {
                    console.error("Error loading markdown:", err);
                });
        }
    }, [workData]);

    if (!workData) {
        return <div>Work not found</div>;
    }

    return (
        <>
            <DetailsComponent detailProps={detailsComponentProps} />
        </>
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
