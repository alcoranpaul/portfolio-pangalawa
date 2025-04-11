import { Fragment, ReactElement } from 'react'
import { Stack } from 'react-bootstrap'
import ImageBanner from './image-banner/image_banner.component'
import Navigation from './navigation/navigation.component'
import './sidebar.style.css'
import SocialLinks from './social-links/social_links.component'


/**
 * Sidebar component that serves as a container for the main sections of the sidebar.
 * It includes an image banner, navigation links, and social media links.
 *
 * @returns {ReactElement} A React fragment containing a stacked layout of the sidebar components.
 *
 * @component 
 */
function Sidebar() : ReactElement {
    return(
        <Fragment>
            <Stack gap={5} className='sidebar_stack'>
                <div className='image_banner'><ImageBanner/></div>
                <div className='navigation'><Navigation/></div>
                <div className='social_links'><SocialLinks/></div>
            </Stack>
        </Fragment>
    )
}

export default Sidebar
