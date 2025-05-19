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
import { Link } from "react-router-dom";
import { navigationItems } from "../class/navigations";
import {
    HeaderContainer,
    HeaderIcon,
    HeaderLeftContainer,
    HeaderProfile,
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
                    <HeaderProfile to={""}>
                        <FaRegUserCircle size={15} />
                    </HeaderProfile>
                    {navigationItems.slice(1).map((item, index) => (
                        <Link to={`${item[1].toLowerCase()}`} key={index}>
                            {item[0]}
                        </Link>
                    ))}
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
