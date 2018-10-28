const React = require( "react" );
const Button = require( "@material-ui/core/Button" ).default;
const Dialog = require( "@material-ui/core/Dialog" ).default;
const DialogTitle = require( "@material-ui/core/DialogTitle" ).default;
const DialogContent = require( "@material-ui/core/DialogContent" ).default;
const DialogContentText = require( "@material-ui/core/DialogContentText" ).default;
const DialogActions = require( "@material-ui/core/DialogActions" ).default;

const Alert = ( { open, onClose, title, text } ) => {
    return (
        <Dialog fullWidth open={ open } onClose={ onClose } data-test="alert">
            <DialogTitle data-test="alert__title">
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText data-test="alert__text">
                    { text }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={ onClose }
                    color="primary"
                    autoFocus
                    data-test="alert__button"
                >
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

module.exports = Alert;
