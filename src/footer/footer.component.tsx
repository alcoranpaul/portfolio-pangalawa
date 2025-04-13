import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";

import { FaDiscord } from "react-icons/fa";
import { IoIosArrowRoundDown, IoIosArrowRoundUp, IoIosGitBranch, IoIosNotifications, IoIosSync } from "react-icons/io";
import { PiFileTsxDuotone } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";

import OverlayComponent from "../components/overlay_component/overlay.component";

import { GoCopilot } from "react-icons/go";
import "./footer.style.css";
function Footer() : ReactElement {
    return(
        <Fragment>
            <Stack direction="horizontal" className="footer_stack" gap={3}>
                <Stack direction="horizontal" gap={3} className='footer_left'>
                    <div className="footer_interactable">
                        <OverlayComponent
                            elements={<div>Version 2</div>}
                            tooltip_title={(<div>Website Version</div>)}
                            tooltip_body={(<>
                                <div>Hinahanap mo pa ba 'yung nakaraan?</div>
                                <div className="overlay_component_tooltip_english">
                                    (Are you still looking for something in the past?)
                                </div></>)}
                        />
                    </div>
                    <div className="footer_interactable">
                        <OverlayComponent
                            elements={  <div>
                                            <IoIosGitBranch size={20} />
                                            refactor-to-look-like-vs-code-ish
                                        </div>}
                            tooltip_title={<div>portfolio-pangalawa (Git)</div>}
                            tooltip_body={
                                <>
                                    <div>refactor-to-look-like-vs-code-ish*, Checkout Branch/Tag</div>
                                </>
                            }
                        />
                    </div>
                    <div className="footer_interactable">
                       <OverlayComponent
                            elements={<div>
                                        <IoIosSync size={20} /> 
                                        3<IoIosArrowRoundDown size={15} /> 
                                        23<IoIosArrowRoundUp size={15} />
                                        </div>}             
                            tooltip_title={<div>portfolio-pangalawa (Git)</div>}
                            tooltip_body={
                                <>
                                    <div>Pull 3 commits from origin/main</div>
                                    <div>Push 23 commits to origin/refactor-to-look-like-vs-code-ish</div>
                                    <br></br>
                                    <div>Should I sync the repo?</div>
                                </>
                            }
                        />
                    </div>
                    <div className="footer_interactable">
                        <OverlayComponent
                            elements={<div> <FaDiscord size={20} /> Connected to Discord</div>}
                            tooltip_title={(<div>Successfully connected to your Discord account!</div>)}
                            tooltip_body={(<>
                                Yes, you are actually connected to Discord 👀
                            </>)}
                        />
                    </div>
                </Stack>
                <Stack gap={3} className='footer_right' direction='horizontal'>
                    <div>UTF-8</div>
                    <div>CRLF</div>
                    <div className="footer_interactable">
                        <OverlayComponent
                            elements={<div><PiFileTsxDuotone size={15} />TypeScript JSX</div>}
                            tooltip_title={(<div>Made in</div>)}
                            tooltip_body={(<>
                                <ul>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>React Bootstrap</li>
                                    <li>React Icons</li>
                                    <li>CSS</li>
                                </ul>
                                </>)}
                        />
                    </div>
                    <div className="footer_interactable">
                        <OverlayComponent
                                elements={<GoCopilot size={20} />}
                                tooltip_title={(<>
                                                <div>GitHub Copilot</div>
                                                <h6>Your AI pair programmer</h6>
                                                </>)}
                                tooltip_body={(<> 
                                                <div>Walang forever... pero may forever sa Git history.</div>
                                                <div className="overlay_component_tooltip_english">
                                                    (There’s no forever... but there’s forever in Git history.)
                                                </div>
                                                </>)}
                        />
                    </div>
                    <div><RiCheckDoubleFill size={20}/>Prettier</div>
                    <div className="footer_interactable">
                        <OverlayComponent
                            elements={<IoIosNotifications size={20} />}
                            tooltip_title={(<div>No New Notifications</div>)}
                            tooltip_body={(<>
                                <div>May inaabangan ka bang notif? O baka naman wala talaga? 🤔</div>
                                <div className="overlay_component_tooltip_english" >
                                    (Are you waiting for a notification? Or maybe there’s really none? 🤔)
                                </div>
                                </>)} />
                          
                    </div>
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default Footer