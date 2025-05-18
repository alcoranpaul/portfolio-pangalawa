import { Fragment, ReactElement } from "react";

import "./image_banner.style.css";
import { BannerContainer, FullName, ImageContainer } from "./image_banner.styles";

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
function ImageBanner(): ReactElement {
    return (
        <Fragment>
            <BannerContainer gap={2}>
                <div className="profile_image">
                    <ImageContainer>
                        <img
                            src="/assets/Sonia_Nevermind_Halfbody_Sprite_29.webp"
                            alt="Profile"
                            className="profile"
                        />
                    </ImageContainer>
                </div>
                <FullName>Paul Adrian Alcoran Reyes</FullName>
            </BannerContainer>
        </Fragment>
    );
}

export default ImageBanner;
