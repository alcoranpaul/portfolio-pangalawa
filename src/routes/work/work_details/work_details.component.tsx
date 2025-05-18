import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { extractHeadings } from "../../../class/helper_functions";
import { getWorkData, WorkData } from "../../../class/work";
import DetailsComponent, {
    DetailsComponentProps,
} from "../../../components/details_component/details.component";
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
