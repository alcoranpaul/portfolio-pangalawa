import { ReactElement } from "react";
import { FaReact } from "react-icons/fa";
import {
    SiCplusplus,
    SiCss3,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiJson,
    SiKotlin,
    SiMarkdown,
    SiPhp,
    SiPython,
    SiRuby,
    SiRust,
    SiSharp,
    SiSwift,
    SiTypescript,
} from "react-icons/si";

import { File } from "../../class/file";
import { FileContainer } from "./file.styles";

interface FileComponentProps {
    file: File;
}

function FileComponent({ file }: FileComponentProps): ReactElement {
    const extensions = [
        ".tsx",
        ".ts",
        ".js",
        ".jsx",
        ".html",
        ".css",
        ".json",
        ".md", // Existing extensions
        ".py",
        ".cs",
        ".cpp",
        ".java",
        ".rb",
        ".php",
        ".go",
        ".swift",
        ".kt",
        ".rs", // Added extensions
    ];

    // Map extensions to corresponding icons
    const extensionIcons: { [key: string]: ReactElement } = {
        ".tsx": <FaReact size={15} style={{ color: "var(--color-link)" }} />,
        ".ts": <SiTypescript size={15} style={{ color: "#007ACC" }} />,
        ".js": <SiJavascript size={15} style={{ color: "#F7DF1E" }} />,
        ".jsx": <FaReact size={15} style={{ color: "var(--color-link)" }} />,
        ".html": <SiHtml5 size={15} style={{ color: "#E34F26" }} />,
        ".css": <SiCss3 size={15} style={{ color: "#1572B6" }} />,
        ".json": <SiJson size={15} style={{ color: "#CB3837" }} />,
        ".md": <SiMarkdown size={15} style={{ color: "#083FA1" }} />,
        ".py": <SiPython size={15} style={{ color: "#3776AB" }} />,
        ".cs": <SiSharp size={15} style={{ color: "#239120" }} />,
        ".cpp": <SiCplusplus size={15} style={{ color: "#00599C" }} />,
        ".java": <SiSharp size={15} style={{ color: "#007396" }} />, // Replace with a similar icon
        ".rb": <SiRuby size={15} style={{ color: "#CC342D" }} />,
        ".php": <SiPhp size={15} style={{ color: "#777BB4" }} />,
        ".go": <SiGo size={15} style={{ color: "#00ADD8" }} />,
        ".swift": <SiSwift size={15} style={{ color: "#FA7343" }} />,
        ".kt": <SiKotlin size={15} style={{ color: "#7F52FF" }} />,
        ".rs": <SiRust size={15} style={{ color: "#DEA584" }} />,
    };

    // Function to randomly select an extension
    const getRandomExtension = (): string => {
        return extensions[Math.floor(Math.random() * extensions.length)];
    };

    // Get the random extension and corresponding icon
    const randomExtension = getRandomExtension();
    const icon = extensionIcons[randomExtension] || (
        <FaReact size={15} style={{ color: "var(--color-link)" }} />
    ); // Default to React icon

    return (
        <FileContainer to={file.GetLink()}>
            &emsp;&emsp;&emsp;
            {icon} {/* Display the appropriate icon */} {file.Name()}
            {randomExtension} {/* Append random extension */}
        </FileContainer>
    );
}

export default FileComponent;
