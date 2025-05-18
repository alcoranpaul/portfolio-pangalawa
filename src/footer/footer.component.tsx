import { Fragment, ReactElement } from "react";

import { FaDiscord } from "react-icons/fa";
import {
    IoIosArrowRoundDown,
    IoIosArrowRoundUp,
    IoIosGitBranch,
    IoIosNotifications,
    IoIosSync,
} from "react-icons/io";
import { PiFileTsxDuotone } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";

import OverlayComponent from "../components/overlay_component/overlay.component";

import { GoCopilot } from "react-icons/go";
import { FooterContainer, Interactable, LeftContainer, RightContainer } from "./footer.styles";

function Footer(): ReactElement {
    return (
        <Fragment>
            <FooterContainer direction="horizontal" gap={3}>
                <LeftContainer direction="horizontal" gap={3}>
                    <Interactable>
                        <OverlayComponent
                            elements={<div>Version 2</div>}
                            tooltip_title={<div>Website Version</div>}
                            tooltip_body={
                                <>
                                    <div>Hinahanap mo pa ba 'yung nakaraan?</div>
                                    <div className="overlay_component_tooltip_english">
                                        (Are you still looking for something in the past?)
                                    </div>
                                </>
                            }
                        />
                    </Interactable>
                    <Interactable>
                        <OverlayComponent
                            elements={
                                <div>
                                    <IoIosGitBranch size={20} />
                                    refactor-to-look-like-vs-code-ish
                                </div>
                            }
                            tooltip_title={<div>portfolio-pangalawa (Git)</div>}
                            tooltip_body={
                                <>
                                    <div>
                                        refactor-to-look-like-vs-code-ish*, Checkout Branch/Tag
                                    </div>
                                </>
                            }
                        />
                    </Interactable>
                    <Interactable>
                        <OverlayComponent
                            elements={
                                <div>
                                    <IoIosSync size={20} />
                                    3<IoIosArrowRoundDown size={15} />
                                    23
                                    <IoIosArrowRoundUp size={15} />
                                </div>
                            }
                            tooltip_title={<div>portfolio-pangalawa (Git)</div>}
                            tooltip_body={
                                <>
                                    <div>Pull 3 commits from origin/main</div>
                                    <div>
                                        Push 23 commits to origin/refactor-to-look-like-vs-code-ish
                                    </div>
                                    <br></br>
                                    <div>Should I sync the repo?</div>
                                </>
                            }
                        />
                    </Interactable>
                    <Interactable>
                        <OverlayComponent
                            elements={
                                <div>
                                    {" "}
                                    <FaDiscord size={20} /> Connected to Discord
                                </div>
                            }
                            tooltip_title={
                                <div>Successfully connected to your Discord account!</div>
                            }
                            tooltip_body={<>Yes, you are actually connected to Discord 👀</>}
                        />
                    </Interactable>
                </LeftContainer>
                <RightContainer gap={3} direction="horizontal">
                    <div>UTF-8</div>
                    <div>CRLF</div>
                    <Interactable>
                        <OverlayComponent
                            elements={
                                <div>
                                    <PiFileTsxDuotone size={15} />
                                    TypeScript JSX
                                </div>
                            }
                            tooltip_title={<div>Made in</div>}
                            tooltip_body={
                                <>
                                    <ul>
                                        <li>React</li>
                                        <li>TypeScript</li>
                                        <li>React Bootstrap</li>
                                        <li>React Icons</li>
                                        <li>CSS</li>
                                    </ul>
                                </>
                            }
                        />
                    </Interactable>
                    <Interactable>
                        <OverlayComponent
                            elements={<GoCopilot size={20} />}
                            tooltip_title={
                                <>
                                    <div>GitHub Copilot</div>
                                    <h6>Your AI pair programmer</h6>
                                </>
                            }
                            tooltip_body={
                                <>
                                    <div>Walang forever... pero may forever sa Git history.</div>
                                    <div className="overlay_component_tooltip_english">
                                        (There’s no forever... but there’s forever in Git history.)
                                    </div>
                                </>
                            }
                        />
                    </Interactable>
                    <div>
                        <RiCheckDoubleFill size={20} />
                        Prettier
                    </div>
                    <Interactable>
                        <OverlayComponent
                            elements={<IoIosNotifications size={20} />}
                            tooltip_title={<div>No New Notifications</div>}
                            tooltip_body={
                                <>
                                    <div>
                                        May inaabangan ka bang notif? O baka naman wala talaga? 🤔
                                    </div>
                                    <div className="overlay_component_tooltip_english">
                                        (Are you waiting for a notification? Or maybe there’s really
                                        none? 🤔)
                                    </div>
                                </>
                            }
                        />
                    </Interactable>
                </RightContainer>
            </FooterContainer>
        </Fragment>
    );
}

export default Footer;
