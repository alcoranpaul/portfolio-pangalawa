import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails(): ReactElement {
    const { name } = useParams();
    return (
        <>
            <div>Project detils: {name}</div>
        </>
    );
}
