const React = require( "react" );
const Link = require( "react-router-dom/Link" ).default;

const NavbarListItem = ( { label, path, isSelected } ) => {
    const className = isSelected ? 
        "navigation-bar__li-selected" : "navigation-bar__li";
    
    return (
        <li className={ className }>
            <Link className="link navigation-bar__link" to={ path }>
                { label }
            </Link>
        </li>
    );
};

module.exports = NavbarListItem;