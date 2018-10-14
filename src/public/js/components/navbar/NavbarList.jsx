const React = require( "react" );
const NavbarListItem = require( "./NavbarListItem" );
const Paths = require("../../config/paths");


const isSelected = require( "./isSelected" );

class NavbarList extends React.Component {

    constructor() {
        super();
    }

    render() {
        const pathname = window.location.pathname;

        return (
            <nav className="navigation-bar__nav">
                <ul className="navigation-bar__ul">
                    <NavbarListItem 
                        label="Inbox"
                        isSelected={ isSelected( pathname, Paths.inbox ) }
                        path={ Paths.inbox }
                    />
                    <NavbarListItem
                        label="Spam"
                        isSelected={isSelected(pathname, Paths.spam)}
                        path={Paths.spam}
                    />
                    <NavbarListItem
                        label="Sent Emails"
                        isSelected={isSelected(pathname, Paths.sentEmails)}
                        path={Paths.sentEmails}
                    />
                    <NavbarListItem
                        label="Drafts"
                        isSelected={isSelected(pathname, Paths.drafts)}
                        path={Paths.drafts}
                    />
                </ul>
            </nav>
        )
    }

}

module.exports = NavbarList