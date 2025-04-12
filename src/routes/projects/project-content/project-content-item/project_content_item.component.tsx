import { ReactElement, useEffect, useRef, useState } from "react";
import { Stack } from "react-bootstrap";
import './project_content_item.style.css';



async function getRandomAnimeImage() {
    try {
        const response = await fetch('/api/v1/anime/gif/1'); // Use proxy
        const data = await response.json();
        return data.images[0]; // Return the first image URL
    } catch (error) {
        console.error("Error fetching image:", error);
        return "src/assets/goku_vegeta.gif"; // Fallback image
    }
}



function ProjectContentItem({ item, onCardSelected }: { item: string, onCardSelected: (item: string) => void }): ReactElement {
    const [imageUrl, setImageUrl] = useState<string>("src/assets/loading.webp"); // Default image URL
    const itemRef = useRef<HTMLDivElement>(null);

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
        onCardSelected(item); // Call the parent function with the selected item
    };

    useEffect(() => {
        getRandomAnimeImage().then(url => setImageUrl(url));
    }, []);

    return (
        <Stack
        ref={itemRef}
        gap={1}
        className="projects_content_item"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="projects_content_item_image">
          <img 
            src={imageUrl} 
            alt={item} 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            }}
          />
        </div>
        <div className="projects_content_item_name">{item}</div>
      </Stack>
    );
}

export default ProjectContentItem;