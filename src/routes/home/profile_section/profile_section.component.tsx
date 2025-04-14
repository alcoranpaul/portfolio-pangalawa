import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import './profile_section.style.css';
import OverlayComponent from "../../../components/overlay_component/overlay.component";

function ProfileSection(): ReactElement {

    return (
        <Fragment>
            <Stack className='profile_section' gap={3}>
                    <div className="image_container">
                        <img src="src\assets\Sonia_Nevermind_Halfbody_Sprite_29.webp" alt="Profile" className="profile" />
                    </div>
                    <Stack className='name_description'>
                        <div className='name'>Reyes, Paul Adrian Alcoran</div>
                        <div className='name_sub'>Software Engineer &middot; paul/pol</div>
                    </Stack>
                    <div className='short_description'>
                        <OverlayComponent 
                            elements={<span className="bible_verse_highlight">Built by faith.</span>}
                            tooltip_title={<div>23 Work willingly at whatever you do, as though you were working for the Lord rather than for people.</div>}
                            tooltip_body={<div>Colossians 3:23</div>}
                        />
                        <span>Driven by curiosity. Creating with code.</span>
                    </div>
                    
                    <hr className="horizontal_line" />

                    <Stack direction='vertical'>
                    <div className='highlights_title'>Quick Links</div>
                        <ul className='highlights_container'>
                            <li className='highlight'>7+ game jam projects published on itch.io</li>
                            <li className='highlight'>Full-stack development experience (MERN stack)</li>
                            <li className='highlight'>Unity/Unreal Engine gameplay programmer</li>
                            <li className='highlight'>Government tech internship experience (Agriculture Canada)</li>
                            <li className='highlight'>Procedural generation (dungeons/cities)</li>
                        </ul>
                    </Stack>
                </Stack>
        </Fragment>

    )
}

export default ProfileSection;