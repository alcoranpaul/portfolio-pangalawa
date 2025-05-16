import { ReactElement } from "react";
import { FaRegFile } from "react-icons/fa";

import { Icon, StackContainer } from "./activity_bar.styles";

interface ActivityBarProps {
    onActivityBarClick: () => void;
}

function ActivityBar({ onActivityBarClick }: ActivityBarProps): ReactElement {
    const handleClick = () => {
        onActivityBarClick();
    };

    return (
        <StackContainer gap={4}>
            <Icon onClick={handleClick}>
                <FaRegFile size={30} />
            </Icon>
        </StackContainer>
    );
}

export default ActivityBar;
