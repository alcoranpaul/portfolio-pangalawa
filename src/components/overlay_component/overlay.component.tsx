import { ReactElement } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { TooltipBody, TooltipHeader } from "./overlay.styles";

function OverlayComponent({
    elements,
    tooltip_title,
    tooltip_body,
}: {
    elements: ReactElement;
    tooltip_title: ReactElement;
    tooltip_body: ReactElement;
}): ReactElement {
    const popover = (
        <Popover id="popover-basic" className="overlay_component_tooltip">
            <TooltipHeader>{tooltip_title}</TooltipHeader>
            <TooltipBody>{tooltip_body}</TooltipBody>
        </Popover>
    );
    return (
        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover}>
            {elements}
        </OverlayTrigger>
    );
}
export default OverlayComponent;
