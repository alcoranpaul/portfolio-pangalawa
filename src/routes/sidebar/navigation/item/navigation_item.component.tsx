import { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";
import './navigation_item.style.css';

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