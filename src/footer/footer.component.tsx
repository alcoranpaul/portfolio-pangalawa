import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import { FaDiscord } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { IoIosArrowRoundDown, IoIosArrowRoundUp, IoIosGitBranch, IoIosNotifications, IoIosSync } from "react-icons/io";
import { RiCheckDoubleFill } from "react-icons/ri";

import "./footer.style.css";
function Footer() : ReactElement {
    return(
        <Fragment>
            <Stack direction="horizontal" className="footer_stack" gap={3}>
                <Stack direction="horizontal" gap={3} className='footer_left'>
                    <div>Version 2</div>
                    <div><IoIosGitBranch size={20} /> portfolio-pangalawa</div>
                    <div><IoIosSync size={20} /> 3<IoIosArrowRoundDown size={15} /> 23<IoIosArrowRoundUp size={15} /></div>
                    <div><FaDiscord  size={20} /> Connected to Discord</div>
                </Stack>
                <Stack gap={3} className='footer_right' direction='horizontal'>
                    <div>UTF-8</div>
                    <div>LF</div>
                    <div>TypeScript JSX</div>
                    <div><GoCopilot size={20} /></div>
                    <div><RiCheckDoubleFill size={20}/>Prettier</div>
                    <div><IoIosNotifications size={20}/></div>
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default Footer