import { ReactElement } from "react";

import { Stack } from "react-bootstrap";
import { FaFile } from "react-icons/fa";
import "./activity_bar.style.css";

function ActivityBar(): ReactElement {
  return (
    <Stack className="activity_bar_stack" gap={4}>
      <div className="activity_bar_icon">
        <FaFile size={30} />
      </div>
    </Stack>
  );
}

export default ActivityBar;