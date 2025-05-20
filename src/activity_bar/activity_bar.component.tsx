import { ReactElement } from "react";
import { FaGithub, FaItchIo, FaLinkedin, FaRegFile, FaSteam } from "react-icons/fa";
import { SiDiscord, SiMyanimelist, SiRiotgames } from "react-icons/si";
import { Icon, SocialIcon, StackContainer } from "./activity_bar.styles";

interface ActivityBarProps {
    onActivityBarClick: () => void;
}

function ActivityBar({ onActivityBarClick }: ActivityBarProps): ReactElement {
    const social_links = [
        {
            title: "LinkedIn",
            link: "https://linkedin.com/in/paul-adrian-reyes-338139241",
            icon: FaLinkedin,
            color: "#0077B5", // LinkedIn blue
        },
        {
            title: "GitHub",
            link: "https://github.com/alcoranpaul",
            icon: FaGithub,
            color: "#505050", // GitHub dark gray/black
        },
        {
            title: "Itch.io",
            link: "https://digitalino.itch.io",
            icon: FaItchIo,
            color: "#FA5C5C", // Itch.io red
        },
        {
            title: "Steam",
            link: "https://steamcommunity.com/id/alcoran/",
            icon: FaSteam,
            color: "#00adee", // Steam blue
        },
        {
            title: "Riot Games",
            link: "https://op.gg/summoners/na/Alkoran-NA1",
            icon: SiRiotgames,
            color: "#D13639", // Riot Games red
        },
        {
            title: "Discord",
            link: "https://discordlookup.com/user/581876912377561089",
            icon: SiDiscord,
            color: "#5865F2", // Discord blurple
        },
        {
            title: "MyAnimeList",
            link: "https://myanimelist.net/profile/GabingAgila",
            icon: SiMyanimelist,
            color: "#2E51A2", // MAL blue
        },
    ];

    const handleClick = () => {
        onActivityBarClick();
    };

    return (
        <StackContainer gap={4}>
            <Icon onClick={handleClick}>
                <FaRegFile size={30} />
            </Icon>
            {social_links.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <SocialIcon key={index} brandColor={item.color}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.title}
                        >
                            <IconComponent size={30} />
                        </a>
                    </SocialIcon>
                );
            })}
        </StackContainer>
    );
}

export default ActivityBar;
