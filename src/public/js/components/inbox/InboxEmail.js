const formatTimestamp = timestamp => {
    const isoString = new Date( timestamp ).toISOString();
    const arr = isoString.split( "T" );
    const date = arr[ 0 ];
    const time = arr[ 1 ].substring( 0, arr[ 1 ].length - 8 );

    return `${ date } ${ time }`;
};

const InboxEmail = email => {
    const id = email.id || "";
    const subject = email.subject || "";
    const content = email.content || "";
    const readAt = email.readAt || "";
    const isImportant = email.isImportant || false;

    let timestamp = email.timestamp || "";

    try {
        timestamp = formatTimestamp( timestamp );
    } catch ( err ) {
        console.error( err.message );
        timestamp = "";
    }

    return {
        id,
        subject,
        content,
        readAt,
        isImportant,
        timestamp
    }
}

module.exports = InboxEmail;