import { ReactElement, useEffect, useState } from "react";
import { extractHeadings } from "../../class/helper_functions";
import DetailsComponent, {
    DetailsComponentProps,
} from "../../components/details_component/details.component";

export default function About(): ReactElement {
    const aboutPath = "src/json/about/about.md";

    const [detailsComponentProps, setDetailsComponentProps] = useState<DetailsComponentProps>({
        data: null,
        markdownContent: "",
        headings: [],
        idMap: {},
        headerContent: <></>, // Empty React fragment as default
    });
    useEffect(() => {
        fetch(aboutPath)
            .then((res) => res.text())
            .then((text) => {
                const { headings, idMap } = extractHeadings(text);

                setDetailsComponentProps({
                    data: null, // or projectData if applicable
                    markdownContent: text,
                    headings: headings,
                    idMap: idMap,
                    headerContent: (
                        <>
                            <h1>About me</h1>
                            <div>
                                Kamusta! I'm <strong>Paul Reyes</strong> — a passionate{" "}
                                <strong>Full-Stack Web Developer</strong> and{" "}
                                <strong>Gameplay Programmer</strong> based in Winnipeg, Manitoba.
                                With a strong foundation in computer science and hands-on experience
                                in both web and game development, I thrive on turning ideas into
                                functional, engaging digital experiences.
                            </div>
                        </>
                    ),
                });
            });
    }, []);
    return (
        <>
            <DetailsComponent detailProps={detailsComponentProps} />
        </>
    );
}
