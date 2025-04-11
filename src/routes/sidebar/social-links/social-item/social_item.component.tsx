import { Fragment, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './social_item.style.css';


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
function SocialItem({ title, linkTo, icon }: { title: string;  linkTo: string, icon: ReactElement}) : ReactElement {

    const _className = `social_item ${title}`;
    return(
        <Fragment>
            <Link to= {`${linkTo.toLowerCase()}`} className={_className}>
                <Container>
                    <Row>
                        <Col xs={2} className="social_item_icon">
                            {icon}
                        </Col>
                        <Col xs={10} className="social_item_text">
                            {title}
                        </Col>
                    </Row>
                </Container>
                
            </Link>
        </Fragment>
    )
}

export default SocialItem;