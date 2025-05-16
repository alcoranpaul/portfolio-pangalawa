import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { getWorkData, WorkData } from "../../sidebar/work";

export default function WorkDetail(): ReactElement {
    const { title } = useParams();
    const workData: WorkData | undefined = getWorkData(title);

    return (
        <>
            <div>{workData?.title}</div>
        </>
    );
}
