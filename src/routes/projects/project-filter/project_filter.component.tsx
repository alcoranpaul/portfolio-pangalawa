import { ReactElement, useState } from "react";
import { FilterContainer, Item } from "./project_filter.styles";

function ProjectFilter({
    onFilterSelect,
}: {
    onFilterSelect: (index: number) => void;
}): ReactElement {
    const filters = ["All Softwares", "Websites", "Applications", "Games"];

    const [selectedFilterIndex, setSelectedFilterIndex] = useState<number>(0);

    return (
        <FilterContainer>
            {filters.map((filter, index) => (
                <Item
                    className={`${selectedFilterIndex === index ? "selected" : ""}`}
                    key={index}
                    onClick={() => {
                        setSelectedFilterIndex(index);
                        onFilterSelect(index); // Notify parent component of the selected filter
                    }}
                >
                    {filter}
                </Item>
            ))}
        </FilterContainer>
    );
}

export default ProjectFilter;
