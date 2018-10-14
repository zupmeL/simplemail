const React = require( "react" );
const Button = require( "@material-ui/core/Button").default;
const NavbarList = require( "./NavbarList" )

class Navbar extends React.Component {

    constructor() {
        super();
        this.onCompose = this.onCompose.bind( this );
    }

    onCompose( event ) {
        event.preventDefault();
        alert( "onCompose" );
    }

    render() {
        return (
            <aside className="navigation-bar">
                <Button 
                    className="navigation-bar__compose-button"
                    variant="contained"
                    color="secondary"
                    onClick={ this.onCompose }
                >
                    Compose
                </Button>
                <NavbarList />

            </aside>
        )
    }

}

module.exports = Navbar