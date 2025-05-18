import { Fragment, ReactElement } from "react";
import GitHubCalendar from "react-github-calendar";
import { HomeContainer, RightContainer } from "./home.styles";
import ProfileSection from "./profile_section/profile_section.component";
import ProjectHighlights from "./project_highlight/project_highlight.component";

/**
 * The `Home` component represents the main home page of the application.
 * It displays a selection menu, a description, and an image (GIF) that updates
 * dynamically based on user interaction.
 *
 * @returns {ReactElement} The rendered `Home` component.
 *
 * ## Functions
 * - `handleSelectionChange(selectedIndex: number): void`:
 *   Updates the description and GIF based on the provided index.
 */
function Home(): ReactElement {
    const descriptions: string[] = [
        "Built by faith. Driven by curiosity. Creating with code.",
        "I build reliable, efficient systems from front to back. Every solution is tailored, no shortcuts, just clean, purposeful code.",
        "Clean, efficient, and reliable. If it’s on your desktop, it’s meant to help you get things done without the noise.",
        "From mechanics to storytelling, every detail is designed to deliver a challenging and rewarding experience.",
    ];

    const gifs_path: string[] = [
        "src\\assets\\goku vegeta.gif",
        "src\\assets\\banana.gif",
        "src\\assets\\killua.gif",
        "src\\assets\\obito.gif",
    ];

    return (
        <Fragment>
            <HomeContainer direction="horizontal" gap={1}>
                <ProfileSection />
                <RightContainer gap={2}>
                    <div className="project_highlights">
                        <ProjectHighlights />
                    </div>

                    <div className="github_calendar">
                        <GitHubCalendar
                            username="alcoranpaul"
                            year="last"
                            colorScheme="dark"
                            fontSize={14}
                            blockSize={9}
                        />
                    </div>
                </RightContainer>
            </HomeContainer>
        </Fragment>
    );
}

export default Home;
