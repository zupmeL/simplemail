const paths = {
    root: "/",
    inbox: "/inbox",
    spam: "/spam",
    sentEmails: "/sent-emails",
    drafts: "/drafts",
    email: emailId => `/emails/${ emailId }`
}

module.exports = paths;