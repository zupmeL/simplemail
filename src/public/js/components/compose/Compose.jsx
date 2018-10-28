const React = require( "react" );
const Dialog = require( "@material-ui/core/Dialog" ).default;
const DialogTitle = require( "@material-ui/core/DialogTitle" ).default;
const DialogContent = require( "@material-ui/core/DialogContent" ).default;
const DialogActions = require( "@material-ui/core/DialogActions" ).default;
const Button = require( "@material-ui/core/Button" ).default;
const TextField = require( "@material-ui/core/TextField" ).default;

class Compose extends React.Component {

    constructor ( props ) {
        super( props );
    }

    render() {
        return (
            <Dialog fullWidth scroll="paper" open={ this.props.open } onClose={ this.props.onClose }>
                <DialogTitle>Compose a new email</DialogTitle>
                <form onSubmit={ this.props.onSubmit }>
                    <DialogContent>
                        <TextField required name="recipients" className="compose__text-field" label="Recipients" />
                        <TextField required name="subject" className="compose__text-field" label="Subject" />
                        <TextField
                            required
                            name="message"
                            className="compose__text-field--message"
                            label="Message"
                            fullWidth
                            multiline
                            rows="5"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={ this.props.onClose } color="secondary">
                            Cancel
                        </Button>
                        <Button variant="contained" type="submit" color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
        
    }

}

module.exports = Compose;