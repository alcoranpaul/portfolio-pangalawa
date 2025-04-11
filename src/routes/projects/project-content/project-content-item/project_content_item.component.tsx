import { ReactElement, useRef, useState } from "react";
import { Stack } from "react-bootstrap";
import './project_content_item.style.css';

function ProjectContentItem({ item }: { item: string }): ReactElement {
    const itemRef = useRef<HTMLDivElement>(null);
    const [is3DEffectEnabled, setIs3DEffectEnabled] = useState<boolean>(true); // State to toggle 3D effect
    const MAX_ANGLE = 40;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!is3DEffectEnabled) return; // Skip 3D effect if disabled

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
        if (!is3DEffectEnabled) return; // Skip resetting if 3D effect is disabled

        if (itemRef.current) {
            itemRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset rotation
        }
    };

    const handleClick = () => {
        
        if (itemRef.current) {
            itemRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset rotation immediately
        }
        console.log(`3D effect ${is3DEffectEnabled ? "disabled" : "enabled"} for item: ${item}`);
    };

    return (
        <Stack
            ref={itemRef}
            gap={1}
            className={`projects_content_item ${is3DEffectEnabled ? "" : "disabled"}`} // Add a class if disabled
            onMouseMove={handleMouseMove} // Attach mouse move event
            onMouseLeave={handleMouseLeave} // Reset rotation on mouse leave
            onClick={handleClick} // Toggle 3D effect on click
        >
            <div className="projects_content_item_image">Image</div>
            <div className="projects_content_item_name">{item}</div>
        </Stack>
    );
}

export default ProjectContentItem;