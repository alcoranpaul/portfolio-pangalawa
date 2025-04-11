import { Fragment, ReactElement, useState } from 'react';
import { Stack } from 'react-bootstrap';
import './home_selection.style.css';



/**
 * A React functional component that renders a selection interface for developer types.
 * Allows users to select a developer type and triggers a callback when the selection changes.
 *
 * @param {Object} props - The props object.
 * @param {(selectedIndex: number) => void} props.onSelectionChange - A callback function
 * that is triggered when the selected developer type changes. The function receives the
 * index of the selected developer type as an argument.
 *
 * @returns {ReactElement} The rendered component.
 *
 * @component
 *
 * @example
 * ```tsx
 * const handleSelectionChange = (index: number) => {
 *     console.log(`Selected developer type index: ${index}`);
 * };
 *
 * <HomeSelection onSelectionChange={handleSelectionChange} />
 * ```
 */
function HomeSelection({onSelectionChange}: {onSelectionChange: (selectedIndex: number) => void}): ReactElement {
    const developer_types = [
        'Software Developer',
        'Full Stack Developer',
        'Desktop Application Developer',
        'Game Developer',
    ];

    // State to track the selected developer type
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

     // Function to handle selection change
    /**
    * The `HomeSelection` component renders a list of developer types and allows the user to select one.
    * It manages the selected state internally and notifies the parent component of selection changes
    * through a callback function.
    *
    * @param {Object} props - The props for the component.
    * @param {(selectedIndex: number) => void} props.onSelectionChange - A callback function that is triggered
    * when the selected developer type changes. It receives the index of the selected developer type as an argument.
    *
    * @returns {ReactElement} A React component that displays a selectable list of developer types.
    */
    const handleSelectionChange = (index: number): void => {
        setSelectedIndex(index); // Update the state
        onSelectionChange(index); // Trigger the callback
    };

    const RenderDeveloperTypes = (): ReactElement[] => {
        return developer_types.map((type, index) => (
            <div
                key={type}
                className={`home_selection_stack_item ${
                    selectedIndex === index ? 'selected' : ''
                }`}
                onClick={() => handleSelectionChange(index)} // Update the selected state
            >
                {type}
            </div>
        ));
    };

    return (
        <Fragment>
            <Stack gap={4} className="home_selection_stack">
                {RenderDeveloperTypes()}
            </Stack>
        </Fragment>
    );
}

export default HomeSelection;