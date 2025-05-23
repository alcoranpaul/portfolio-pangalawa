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
                        src={`${import.meta.env.BASE_URL}images/pfp.jpg`}
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
                    <HighlightTitle>Highlights</HighlightTitle>
                    <HighlightContainer>
                        <HighlightItem>
                            Full-stack development experience (MERN stack)
                        </HighlightItem>
                        <HighlightItem>
                            Government tech internship experience (Agriculture Canada)
                        </HighlightItem>
                        <HighlightItem>7+ game jam projects published on itch.io</HighlightItem>
                        <HighlightItem>
                            Unity/Unreal Engine/Flax Engine gameplay programmer
                        </HighlightItem>
                        <HighlightItem>Procedural generation (dungeons/cities)</HighlightItem>
                    </HighlightContainer>
                </Stack>
            </ProjectContainer>
        </Fragment>
    );
}

export default ProfileSection;
