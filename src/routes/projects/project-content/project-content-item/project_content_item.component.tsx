import { ReactElement, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "../../../../class/project_class";
import { ContentItem, ImageContainer, ItemName } from "./project_content_item.styles";

function getRandomAnimeImage() {
    return `${import.meta.env.BASE_URL}assets/goku vegeta.gif`; // Fallback image
}

function ProjectContentItem({
    item,
    setAnimeImg,
}: {
    item: ProjectData;
    setAnimeImg: boolean; // Now correctly typed as boolean
}): ReactElement {
    const [imageUrl, setImageUrl] = useState<string>("assets/loading.webp"); // Default image URL
    const itemRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const MAX_ANGLE = 70;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = itemRef.current?.getBoundingClientRect();
        if (rect) {
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * MAX_ANGLE; // X rotation (-X-10 to X-10 degrees)
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -MAX_ANGLE; // Y rotation (-X-10 to X-10 degrees)
            if (itemRef.current) {
                itemRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`; // Apply 3D rotation
            }
        }
    };

    const handleMouseLeave = () => {
        if (itemRef.current) {
            itemRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset rotation
        }
    };

    const handleClick = () => {
        if (itemRef.current) {
            itemRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset rotation immediately
        }
        navigate(`/projects/${item.name}`);
    };

    useEffect(() => {
        if (setAnimeImg && imageUrl === "assets/loading.webp") setImageUrl(getRandomAnimeImage());
    }, []);
    useEffect(() => {
        if (setAnimeImg && imageUrl === "assets/loading.webp") setImageUrl(getRandomAnimeImage());
    }, [setAnimeImg]);

    return (
        <ContentItem
            ref={itemRef}
            gap={1}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <ImageContainer>
                {setAnimeImg ? (
                    <img
                        src={imageUrl}
                        alt={item.name}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                        }}
                    />
                ) : item.image !== "" ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                        }}
                    />
                ) : (
                    <div>N/A</div>
                )}
            </ImageContainer>
            <ItemName>{item.name}</ItemName>
        </ContentItem>
    );
}

export default ProjectContentItem;
