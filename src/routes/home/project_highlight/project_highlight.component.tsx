import { ReactElement, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { ProjectData, projectDataList } from "../../../class/project_class";

export default function ProjectHighlights(): ReactElement {
    const [randomProjects, setRandomProjects] = useState<ProjectData[]>([]); // Initialize as an empty array of ProjectData

    useEffect(() => {
        const getRandomProjects = (list: ProjectData[], count: number): ProjectData[] => {
            // Create a copy of the original list to avoid modifying it directly
            const shuffled = [...list].sort(() => 0.5 - Math.random());

            // Take the first 'count' elements from the shuffled array
            return shuffled.slice(0, count);
        };

        const fiveRandomProjects = getRandomProjects(projectDataList, 5);
        setRandomProjects(fiveRandomProjects);
    }, []);

    return (
        <Carousel>
            {randomProjects.map((project, index) => (
                <Carousel.Item key={index}>
                    {/* Assuming each project object has an 'image', 'title', and 'description' property */}
                    {project.image !== "" ? (
                        <img
                            src={project.image}
                            alt={project.name}
                            style={{ height: "500px", objectFit: "contain", borderRadius: "50px" }}
                        />
                    ) : (
                        <img
                            src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
                            alt={project.name}
                            style={{ height: "500px", objectFit: "contain", borderRadius: "50px" }}
                        />
                    )}
                    <Carousel.Caption
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            borderRadius: "10px",
                            padding: "1rem",
                        }}
                    >
                        <h3 className="text-light fw-bold">{project.name}</h3>
                        <p className="text-light fst-italic">{project.getShortDescription()}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
