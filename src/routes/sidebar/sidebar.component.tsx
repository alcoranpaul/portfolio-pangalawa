import { Fragment, ReactElement } from 'react'
import { Stack } from 'react-bootstrap'
import ImageBanner from './image-banner/image_banner.component'
import Navigation from './navigation/navigation.component'
import './sidebar.style.css'

function Sidebar() : ReactElement {
    return(
        <Fragment>
            <Stack gap={5} className='sidebar_stack'>
                <div className='image_banner'><ImageBanner/></div>
                <div className='navigation'><Navigation/></div>
                <div className='social_links'>sxx</div>
            </Stack>
        </Fragment>
    )
}

export default Sidebar
