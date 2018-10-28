const React = require( "react" );
const Alert = require( "../alert/Alert" );

const ComposeAlert = props => {
    
    const { errorAlertOpen, errorMessage, onErrorAlertClose } = props;
    const { successAlertOpen, onSuccessAlertClose } = props;

    return (
        <div>
            <Alert
                title="Error"
                text={ errorMessage }
                open={ errorAlertOpen }
                onClose={ onErrorAlertClose }
            />
            <Alert
                title="Email successfully sent"
                text="Your email has been sent!"
                open={ successAlertOpen }
                onClose={ onSuccessAlertClose }
            />
        </div>
    );
}

module.exports = ComposeAlert;