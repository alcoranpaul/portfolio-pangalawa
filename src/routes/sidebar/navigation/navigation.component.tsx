import { Fragment, ReactElement } from "react";
import { Stack } from "react-bootstrap";
import NavigationItem from "./navigation_item/navigation_item.component";
import './navigation.style.css';


function Navigation(): ReactElement {
    const navigationItems = [
        ['Home', ''],
        ['Projects', 'projects'],
        ['Work', 'work'],
        ['Skills', 'skills'],
        ['Education', 'education'],
        ['Contact', 'contact'],
        ['About', 'about'],
    ];

    const renderNavigationItems = (): ReactElement[] => {
        const elements: ReactElement[] = [];
        for (let i = 0; i < navigationItems.length; i++) {
            elements.push(<NavigationItem key={i} title={navigationItems[i][0]} linkTo={navigationItems[i][1]} />);
        }
        return elements;
    };

    return (
        <Fragment>
            <Stack gap={3}>
                {renderNavigationItems()}
            </Stack>
        </Fragment>
    );
}

export default Navigation;