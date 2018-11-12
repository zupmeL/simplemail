const alertReducer = require( "./components/alert/alert_reducer" );
// const inboxReducer = require( "./components/inbox/inbox_reducer" );
// const navbarListReducer = require( "./components/navbar/navbar_list/navbar_list_reducer" );
const { combineReducers } = require( "redux" );

module.exports = combineReducers({
    alert: alertReducer,
    // inbox: inboxReducer,
    // navbarList: navbarlistReducer,
} );