const React = require( "react" );
const Router = require( "react-router-dom/BrowserRouter" ).default;
const Route = require( "react-router-dom/Route" ).default;


const Header = require( "../header/Header" );
const Navbar = require( "../navbar/Navbar" );
const Inbox = require( "../inbox/Inbox" );

const Paths = require( "../../config/paths.js" );

module.exports = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="content">
                    <Navbar />
                    <Route exact path={ Paths.root } component={ Inbox } />
                    <Route path={ Paths.inbox } component={ Inbox } />
                    <Route path={ Paths.drafts } component={ Inbox } />
                    <Route path={ Paths.spam } component={ Inbox } />
                    <Route path={ Paths.sentEmails } component={ Inbox } />
                </div>
            </div>
        </Router>
    )
}