import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";
import { FaDiscord, FaGithub, FaLinkedin, FaSteam } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";
import SocialItem from "./social-item/social_item.component";


/**
 * A React functional component that renders a list of social media links
 * using the `SocialItem` component for each link. The links are displayed
 * in a stacked layout using `react-bootstrap`'s `Stack` component.
 *
 * @component
 * @returns {ReactElement} A fragment containing a stack of social media links.
 *
 * @remarks
 * - The social media links are defined in the `social_links` object, which
 *   includes the title, URL, and icon for each platform.
 * - The `renderSocialItems` function dynamically generates the list of
 *   `SocialItem` components by iterating over the `social_links` object.
 *
 */
function SocialLinks(): ReactElement {
    const social_links = {
        linkedIn: {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/paul-alcoran-4b6b3a1b0/",
            icon: <FaLinkedin />,
        },
        github: {
            title: "GitHub",
            link: "https://github.com/alcoranpaul",
            icon: <FaGithub />,
        },
        discord: {
            title: "Discord",
            link: "https://discordlookup.com/user/581876912377561089",
            icon: <FaDiscord />,
        },
        steam: {
            title: "Steam",
            link: "https://steamcommunity.com/id/alcoran/",
            icon: <FaSteam />,
        },
        riotGames: {
            title: "Riot Games",
            link: "https://op.gg/summoners/na/Alkoran-NA1",
            icon: <SiRiotgames />,
        },
    };

    const renderSocialItems = (): ReactElement[] => {
        return Object.entries(social_links).map(([key, value]) => (
            <SocialItem 
                key={key} 
                title={value.title} 
                linkTo={value.link} 
                icon={value.icon} 
            />
        ));
    };

    return (
        <Fragment>
            <Stack gap={1}> 
                {renderSocialItems()}
            </Stack>
        </Fragment>
    )
}

export default SocialLinks