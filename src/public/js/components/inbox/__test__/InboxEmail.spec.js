const InboxEmail = require( "../InboxEmail" );

describe( "InboxEmail", () => {
    it( "has a module", () => {
        expect( InboxEmail ).toBeDefined();
        const expected = "function";
        const actual = typeof InboxEmail;
        expect( expected ).toEqual( actual );
    });

    it( "should return empty values for invalid email", () => {
        const email = {};
        const expected = {
            id: "",
            subject: "",
            content: "",
            timestamp: "",
            readAt: "",
            isImportant: false
        };
        const actual = InboxEmail( email );
        expect( expected ).toEqual( actual );
    });

    it( "should return correct values for a valid email", () => {
        const dateTime = "2018-10-23T00:00:00.000Z";
        const formattedDateTime = "2018-10-23 00:00";
        const incomingEmail = {
            id: "1",
            subject: "foo",
            content: "bar",
            isImportant: false,
            readAt: undefined,
            timestamp: Date.parse( dateTime )
        };
        const expected = {
            id: "1",
            subject: "foo",
            content: "bar",
            isImportant: false,
            readAt: "",
            timestamp: formattedDateTime
        };
        const actual = InboxEmail( incomingEmail );
        expect( expected ).toEqual( actual );
    });
});