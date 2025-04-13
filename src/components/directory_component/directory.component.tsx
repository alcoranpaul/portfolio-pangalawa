import { ReactElement, useState } from "react";
import { Stack } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { MdFolder } from "react-icons/md";
import { Directory } from "../../class/directory_class";
import './directory.style.css';

interface DirectoryComponentProps {
    directory: Directory;
    icon?: ReactElement;
}

function DirectoryComponent({ directory, icon }: DirectoryComponentProps): ReactElement {
    // List of possible extensions
    const extensions = [
        ".tsx", ".ts", ".js", ".jsx", ".html", ".css", ".json", ".md", // Existing extensions
        ".py", ".cs", ".cpp", ".java", ".rb", ".php", ".go", ".swift", ".kt", ".rs" // Added extensions
    ];

    const [isSelected, setIsSelected] = useState(false);

    // Function to randomly select an extension
    const getRandomExtension = (): string => {
        return extensions[Math.floor(Math.random() * extensions.length)];
    };

    return (
        <div className="directory_component">
            <div className="directory_component_directory file" onClick={() => setIsSelected(prev => !prev)} >
                &emsp;{isSelected ? '⏷' : '⏵'}
                {icon || <MdFolder size={15} />}
                {' '}   
                <div  className="directory_component_name">
                    {directory.Name()}
                </div>
            </div>
            {isSelected && (
                <Stack gap={1}>
                {directory.Children().map((file, index) => (
                    <div key={index} className="directory_component_file file">
                        &emsp;&emsp;&emsp;
                        <FaReact size={15} style={{ color: "var(--color-link)" }} />
                        {' '}{' '}{' '}
                        <div style={{ paddingLeft: "5px" }}>
                            {file.Name()}{getRandomExtension()} {/* Append random extension */}
                        </div>
                    </div>
                ))}
                </Stack>
            )}
        </div>
    );
}

export default DirectoryComponent;