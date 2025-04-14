import { Fragment, ReactElement } from 'react';
import { Stack } from 'react-bootstrap';

import './home.style.css';
import GitHubCalendar from 'react-github-calendar';



/**
 * The `Home` component represents the main home page of the application.
 * It displays a selection menu, a description, and an image (GIF) that updates
 * dynamically based on user interaction.
 *
 * @returns {ReactElement} The rendered `Home` component.
 *
 * ## Functions
 * - `handleSelectionChange(selectedIndex: number): void`:
 *   Updates the description and GIF based on the provided index.
 */
function Home() : ReactElement {
    const descriptions: string[] = [
        'Built by faith. Driven by curiosity. Creating with code.',
        'I build reliable, efficient systems from front to back. Every solution is tailored, no shortcuts, just clean, purposeful code.',
        'Clean, efficient, and reliable. If it’s on your desktop, it’s meant to help you get things done without the noise.',
        'From mechanics to storytelling, every detail is designed to deliver a challenging and rewarding experience.'
    ]

    const gifs_path: string[] = [
        'src\\assets\\goku vegeta.gif',
        'src\\assets\\banana.gif',
        'src\\assets\\killua.gif',
        'src\\assets\\obito.gif'
    ]


    return  (
        <Fragment>
            <Stack direction='horizontal' gap={1} className='home_container'>
                <Stack className='left' gap={3}>
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
                <Stack className='right' gap={2}>
                    <div className='ascii_content'>asd</div>
                    <div className='projects_favorites'>asd</div>
                    <div className='github_calendar'>
                        <GitHubCalendar
                            username="alcoranpaul"
                            year="last"
                            colorScheme="dark"
                            fontSize={14}
                            blockSize={9}
                        />
                    </div>
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default Home