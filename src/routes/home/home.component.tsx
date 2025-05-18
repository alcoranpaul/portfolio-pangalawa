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
