function recipientsStringToRecipientsArray(recipientsString) {
    const regex = /(\s|,|;|\t)/;
    return recipientsString
        .split(regex)
        .filter(str => str.trim())
        .filter(str => regex.test(str) === false);
}

const SendEmailRequest = ( recipients, subject, message ) => {
    
    recipients = recipientsStringToRecipientsArray( recipients );

    const payload = { 
        recipients,
        subject,
        message
    };

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( payload )
    };

    return request;

}

module.exports = SendEmailRequest;