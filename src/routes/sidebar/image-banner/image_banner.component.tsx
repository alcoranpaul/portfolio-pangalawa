import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import './image_banner.style.css';


/**
 * ImageBanner component displays a profile image and the full name of the user.
 * 
 * This component uses the `Stack` component from `react-bootstrap` to arrange
 * the elements vertically with a gap. It includes:
 * - A profile image wrapped in a container for styling purposes.
 * - A full name displayed below the profile image.
 * 
 * @returns {ReactElement} A React element containing the profile image and full name.
 */
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