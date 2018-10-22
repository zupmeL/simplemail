const React = require( "react" );
const TableRow = require( "@material-ui/core/TableRow" ).default;
const TableCell = require( "@material-ui/core/TableCell" ).default;
// const InboxRowIcons = require( "./InboxRowIcons" );
const Link = require( "react-router-dom/Link" ).default;
const Paths = require( "../../config/paths" );



class InboxRow extends React.Component {

    constructor( props ) {
        super( props );
    }

    render() {
        const className = this.props.email.readAt
            ? "inbox__table-row-viewed"
            : "inbox__table-row";

        return (
            <TableRow className={ className }>
                <TableCell className="inbox__table-cell--bold">
                    <Link className="link inbox__link" to={ Paths.email( this.props.email.id ) }>
                        { this.props.email.subject }
                    </Link>
                </TableCell>
                <TableCell className="inbox__table-cell">
                    <Link className="link inbox__link" to={ Paths.email( this.props.email.id ) }>
                        {this.props.email.content}
                    </Link>
                </TableCell>
                <TableCell className="inbox__table-cell--bold">
                    <Link className="link inbox__link" to={ Paths.email( this.props.email.id ) }>
                        {this.props.email.timestamp}
                    </Link>
                </TableCell>
            </TableRow>
        );
    }
}

module.exports = InboxRow;