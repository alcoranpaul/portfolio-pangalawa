import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import OverlayComponent from "../../../components/overlay_component/overlay.component";
import {
    BibleVerseHighlight,
    HighlightContainer,
    HighlightItem,
    HighlightTitle,
    HorizontalLine,
    Profile,
    ProfileDescription,
    ProfileName,
    ProfilePicture,
    ProfileSubName,
    ProjectContainer,
    ShortDescription,
} from "./profile_section.styles";

function ProfileSection(): ReactElement {
    return (
        <Fragment>
            <ProjectContainer gap={3}>
                <Profile>
                    <ProfilePicture
                        src="src\assets\Sonia_Nevermind_Halfbody_Sprite_29.webp"
                        alt="Profile"
                    />
                </Profile>
                <ProfileDescription>
                    <ProfileName>Reyes, Paul Adrian Alcoran</ProfileName>
                    <ProfileSubName>Software Engineer &middot; paul/pol</ProfileSubName>
                </ProfileDescription>
                <ShortDescription>
                    <OverlayComponent
                        elements={<BibleVerseHighlight>Built by faith.</BibleVerseHighlight>}
                        tooltip_title={
                            <div>
                                23 Work willingly at whatever you do, as though you were working for
                                the Lord rather than for people.
                            </div>
                        }
                        tooltip_body={<div>Colossians 3:23</div>}
                    />
                    <span>Driven by curiosity. Creating with code.</span>
                </ShortDescription>

                <HorizontalLine />

                <Stack direction="vertical">
                    <HighlightTitle>Quick Links</HighlightTitle>
                    <HighlightContainer>
                        <HighlightItem>7+ game jam projects published on itch.io</HighlightItem>
                        <HighlightItem>
                            Full-stack development experience (MERN stack)
                        </HighlightItem>
                        <HighlightItem>Unity/Unreal Engine gameplay programmer</HighlightItem>
                        <HighlightItem>
                            Government tech internship experience (Agriculture Canada)
                        </HighlightItem>
                        <HighlightItem>Procedural generation (dungeons/cities)</HighlightItem>
                    </HighlightContainer>
                </Stack>
            </ProjectContainer>
        </Fragment>
    );
}

export default ProfileSection;
