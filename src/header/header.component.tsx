import { Fragment, ReactElement } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import {
    VscChip,
    VscChromeMaximize,
    VscChromeMinimize,
    VscLayout,
    VscLayoutPanel,
    VscLayoutSidebarLeft,
    VscLayoutSidebarLeftOff,
    VscVscode,
} from "react-icons/vsc";
import { Link } from "react-router-dom";
import { navigationItems } from "../class/navigations";
import {
    HeaderContainer,
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
                    <VscLayout size={20} />
                    <VscLayoutSidebarLeft size={20} />
                    <VscLayoutPanel size={20} />
                    <VscLayoutSidebarLeftOff size={20} />
                    <VscChromeMinimize size={20} />
                    <VscChromeMaximize size={20} />
                    <VscChip size={20} />
                </HeaderRightContainer>
            </HeaderContainer>
        </Fragment>
    );
}

export default Header;
