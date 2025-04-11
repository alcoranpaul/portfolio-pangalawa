import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import './image_banner.style.css';

function ImageBanner() : ReactElement {
    return(
        <Fragment>
            <Stack gap={2} className="imageBanner_stack">
                <div className="profile_image">
                    <div className="image_container">
                        <img src="src\assets\Sonia_Nevermind_Halfbody_Sprite_29.webp" alt="Profile" className="profile" />
                    </div>
                </div>
                <div className="full_name">Paul Adrian Alcoran Reyes</div>
            </Stack>
        </Fragment>
    )
}

export default ImageBanner;