import { Fragment, ReactElement, useState } from "react";
import { Stack } from "react-bootstrap";
import { MdFolder } from "react-icons/md";
import { Directory } from "../../class/directory_class";

import FileComponent from "../file_component/file.component";
import './directory.style.css';

interface DirectoryComponentProps {
    directory: Directory;
    icon?: ReactElement;
}

function DirectoryComponent({ directory, icon }: DirectoryComponentProps): ReactElement {
    const [isSelected, setIsSelected] = useState(false);

    
    function RenderDirectory({ directory, icon }: DirectoryComponentProps): ReactElement {
        return <div className="directory_component_directory file" onClick={() => setIsSelected(prev => !prev)}>
            &emsp;{isSelected ? '⏷' : '⏵'}
            {icon || <MdFolder size={15} />}
            {' '}
            <div className="directory_component_name">
                {directory.Name()}
            </div>
        </div>;
    }

    return (
        <div className="directory_component">
            {RenderDirectory({ directory, icon })}
            {isSelected && (
                <Stack gap={1}>
                {directory.Children().map((file, index) => (
                    file instanceof Directory ? (
                        <Fragment>{RenderDirectory({ directory, icon })}</Fragment>
                    ) : (
                        <FileComponent key={index} file={file} />
                    )
                ))}
                </Stack>
            )}
        </div>
    );
}

export default DirectoryComponent;