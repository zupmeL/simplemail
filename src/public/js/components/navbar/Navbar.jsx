const React = require( "react" );
const Button = require( "@material-ui/core/Button" ).default;
const Compose = require( "../compose/Compose" );
const ComposeAlert = require( "../compose/ComposeAlert" );
const SendEmailRequest = require( "../compose/SendEmailRequest" );
const NavbarList = require( "./NavbarList" )

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            composeOpen: false,
            successAlertOpen: false,
            errorAlertOpen: false,
            errorMessage: "Something went wrong! WELP!"
        }
        this.onCompose = this.onCompose.bind( this );
        this.onClose = this.onClose.bind( this );
        this.onErrorAlertClose = this.onErrorAlertClose.bind( this );
        this.onSend = this.onSend.bind( this );
        this.onSuccessAlertClose = this.onSuccessAlertClose.bind( this );
    }

    onCompose( event ) {
        event.preventDefault();
        this.setState( { composeOpen: true } );
    }

    onClose() {
        this.setState( { composeOpen: false } );
    }

    onErrorAlertClose() {
        this.setState( { errorAlertOpen: false } );
    }

    async onSend( event ) {
        event.preventDefault();

        console.log( event );

        const recipients = event.target.recipients.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const request = SendEmailRequest( recipients, subject, message );

        try {
            const response = await fetch( "/emails", request );
            if ( !response.ok ) {
                const json = await response.json();
                throw new Error( json.error );
            }
            this.setState( { composeOpen: false, successAlertOpen: true } );
        } catch ( error ) {
            this.setState( { 
                composeOpen: false,
                errorAlertOpen: true,
                errorMessage: error.message
            } );
        }
    }

    onSuccessAlertClose() {
        this.setState( { successAlertOpen:false } );
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
                <Compose
                    open={ this.state.composeOpen }
                    onClose={ this.onClose }
                    onSubmit={ this.onSend }
                />
                <ComposeAlert
                    errorAlertOpen={ this.state.errorAlertOpen }
                    errorMessage={ this.state.errorMessage }
                    onErrorAlertClose={ this.onErrorAlertClose }
                    successAlertOpen={ this.state.successAlertOpen }
                    onSuccessAlertClose={ this.onSuccessAlertClose }
                />
            </aside>
        )
    }

}

module.exports = Navbar