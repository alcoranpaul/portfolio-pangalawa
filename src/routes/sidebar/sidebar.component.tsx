import { ReactElement } from 'react'
import { Stack } from 'react-bootstrap'
import ImageBanner from './image-banner/image_banner.component'
import './sidebar.style.css'

function Sidebar() : ReactElement {
    return(
    <Stack gap={5} className='sidebar_stack'>
        <div className='image_banner'><ImageBanner/></div>
        <div className='navigation'>asd</div>
        <div className='social_links'>sxx</div>
    </Stack>
    )
}

export default Sidebar
