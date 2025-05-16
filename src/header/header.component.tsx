import { Fragment, ReactElement } from "react";
import {
    FaDiscord,
    FaGithub,
    FaItchIo,
    FaLinkedinIn,
    FaRegUserCircle,
    FaSteam,
} from "react-icons/fa";
import { SiMyanimelist, SiRiotgames } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
    HeaderContainer,
    HeaderIcon,
    HeaderLeftContainer,
    HeaderRightContainer,
} from "./header.styles";

function Header(): ReactElement {
    return (
        <Fragment>
            <HeaderContainer direction="horizontal" gap={3}>
                <HeaderLeftContainer direction="horizontal" gap={3}>
                    <div>
                        <VscVscode size={20} style={{ color: "var(--color-link)" }} />
                    </div>
                    <HeaderIcon>
                        <FaRegUserCircle size={15} />
                    </HeaderIcon>
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Work</div>
                    <div>Skills</div>
                    <div>Education</div>
                    <div>Contact</div>
                    <div>About</div>
                </HeaderLeftContainer>

                <HeaderRightContainer direction="horizontal" gap={2}>
                    <HeaderIcon>
                        <FaLinkedinIn size={19} />
                    </HeaderIcon>
                    <HeaderIcon>
                        <FaGithub size={20} />
                    </HeaderIcon>
                    <HeaderIcon>
                        <FaItchIo size={20} />
                    </HeaderIcon>
                    <HeaderIcon>
                        <FaSteam size={20} />
                    </HeaderIcon>
                    <HeaderIcon>
                        <FaDiscord size={20}></FaDiscord>
                    </HeaderIcon>
                    <HeaderIcon>
                        <SiRiotgames size={20} />
                    </HeaderIcon>
                    <HeaderIcon>
                        <SiMyanimelist size={20} />
                    </HeaderIcon>
                </HeaderRightContainer>
            </HeaderContainer>
        </Fragment>
    );
}

export default Header;
