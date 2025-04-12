import { ReactElement } from "react";

import { Stack } from "react-bootstrap";
import { FaRegFile } from "react-icons/fa";
import "./activity_bar.style.css";

interface ActivityBarProps {
  onActivityBarClick: () => void;
}

function ActivityBar({ onActivityBarClick }: ActivityBarProps): ReactElement {

  const handleClick =() => {
    onActivityBarClick();
  }

  return (
    <Stack className="activity_bar_stack" gap={4}>
      <div className="activity_bar_icon" onClick={handleClick}>
        <FaRegFile  size={30} />
      </div>
    </Stack>
  );
}

export default ActivityBar;