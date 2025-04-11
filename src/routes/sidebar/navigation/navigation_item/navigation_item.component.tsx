import { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";
import './navigation_item.style.css';


/**
 * A functional component that renders a navigation item as a styled link.
 *
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the navigation item, which will be displayed as the link text.
 * @param {string} props.linkTo - The URL or path to navigate to when the link is clicked.
 * @returns {ReactElement} A React element representing the navigation item.
 *
 * @remarks
 * - The `title` is automatically formatted to capitalize the first letter and convert the rest to lowercase.
 * - The `linkTo` is converted to lowercase to ensure consistent URL formatting.
 *
 * @example
 * ```tsx
 * <NavigationItem title="Home" linkTo="/home" />
 * ```
 */
function NavigationItem({ title, linkTo }: { title: string;  linkTo: string}) : ReactElement {

    const capitalizeFirstLetter = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return(
        <Fragment>
            <Link to= {`${linkTo.toLowerCase()}`} className="navigation_item">
                {capitalizeFirstLetter(title)}
            </Link>
        </Fragment>
    )
}

export default NavigationItem;