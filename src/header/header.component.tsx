import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";
import { FaDiscord, FaGithub, FaItchIo, FaLinkedinIn, FaRegUserCircle, FaSteam, } from "react-icons/fa";
import { SiMyanimelist, SiRiotgames } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./header.style.css";


function Header(): ReactElement {
    return (
         <Fragment>
            <Stack direction="horizontal" className="header_stack" gap={3}>
                <Stack direction="horizontal" gap={3} className='header_left'>
                    <div><VscVscode size={20} style={{ color: "var(--color-link)" }} /></div>
                    <div className="header_icon">
                        <FaRegUserCircle size={15}  />
                    </div>
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Work</div>
                    <div>Skills</div>
                    <div>Education</div>
                    <div>Contact</div>
                    <div>About</div>
                </Stack>

                <Stack direction="horizontal" gap={2} className='header_right'>
                    <div className="header_icon"><FaLinkedinIn  size={19}/></div>
                    <div className="header_icon"><FaGithub  size={20} /></div>
                    <div className="header_icon"><FaItchIo size={20} /></div>
                    <div className="header_icon"><FaSteam size={20}/></div>
                    <div className="header_icon"><FaDiscord size={20}></FaDiscord></div>
                    <div className="header_icon"><SiRiotgames size={20}/></div>
                    <div className="header_icon"><SiMyanimelist size={20}/></div>
                    
                   
                   
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default Header;