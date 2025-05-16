import { Fragment, ReactElement, useState } from "react";
import { HomeSelectionContainer, HomeSelectionItem } from "./home_selection.styles";

function HomeSelection({
    onSelectionChange,
}: {
    onSelectionChange: (selectedIndex: number) => void;
}): ReactElement {
    const developer_types = [
        "Software Developer",
        "Full Stack Developer",
        "Desktop Application Developer",
        "Game Developer",
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
            <HomeSelectionItem
                key={type}
                className={`${selectedIndex === index ? "selected" : ""}`}
                onClick={() => handleSelectionChange(index)} // Update the selected state
            >
                {type}
            </HomeSelectionItem>
        ));
    };

    return (
        <Fragment>
            <HomeSelectionContainer gap={4}>{RenderDeveloperTypes()}</HomeSelectionContainer>
        </Fragment>
    );
}

export default HomeSelection;
