import { Fragment, ReactElement, useState } from 'react';
import { Stack } from 'react-bootstrap';
import './home_selection.style.css';

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