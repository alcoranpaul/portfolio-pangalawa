import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import './profile_section.style.css';

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
                    <div className='short_description'>Devoted to crafting tech with purpose—building games and apps that reflect Christ’s wonder and meaning.</div>
                    
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