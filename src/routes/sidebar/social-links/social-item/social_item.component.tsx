import { Fragment, ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
import "./social_item.style.css";
import { ItemContainer, ItemIcon, ItemText } from "./social_item.styles";

/**
 * A functional component that renders a social media item with an icon and title.
 * The component uses React Bootstrap for layout and React Router for navigation.
 *
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the social media item, used for display and CSS class naming.
 * @param {string} props.linkTo - The URL or route to navigate to when the item is clicked.
 * @param {ReactElement} props.icon - The icon to display alongside the title.
 *
 * @returns {ReactElement} A JSX element representing the social media item.
 */
function SocialItem({
    title,
    linkTo,
    icon,
}: {
    title: string;
    linkTo: string;
    icon: ReactElement;
}): ReactElement {
    return (
        <Fragment>
            <ItemContainer to={`${linkTo.toLowerCase()}`}>
                <Container>
                    <Row>
                        <ItemIcon xs={2} className="social_item_icon">
                            {icon}
                        </ItemIcon>
                        <ItemText xs={10} className="social_item_text">
                            {title}
                        </ItemText>
                    </Row>
                </Container>
            </ItemContainer>
        </Fragment>
    );
}

export default SocialItem;
