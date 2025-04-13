import { ReactElement } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

import './overlay.style.css';

function OverlayComponent({ elements, tooltip_title, tooltip_body }:
            { elements: ReactElement, tooltip_title: ReactElement , tooltip_body: ReactElement}): ReactElement {
    

    const popover = (
        <Popover id="popover-basic" className="overlay_component_tooltip">
            <Popover.Header className="overlay_component_tooltip_header">{tooltip_title}</Popover.Header>
            <Popover.Body className="overlay_component_tooltip_body">
                {tooltip_body}
            </Popover.Body>
        </Popover>
        );
      return (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={popover}
        >
          {elements}
        </OverlayTrigger>
      );
}
export default OverlayComponent;