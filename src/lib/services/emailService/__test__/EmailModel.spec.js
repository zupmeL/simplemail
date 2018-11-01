const mongoose = require( "mongoose" );
const EmailModel = require( "../EmailModel" );

describe( "EmailModel", () => {
  let db;

  beforeAll( done => {
    db = mongoose.connect( "mongodb://localhost:27017/test", done );
  } );

  afterAll( done => {
    db.close( done );
  } );

  beforeEach( done => {
    EmailModel.remove( {}, done );
  } );

  it( "correctly serializes the model", async () => {
    const subject = "foo";
    const message = "bar";
    const created_at = new Date( "2018-11-01T12:00:00.000Z" );
    const recipients = [ "foo@bar.it" ];
    const email = new EmailModel( {
      recipients,
      subject,
      message,
      created_at
    } );
    await email.save();
    const emailInDatabase = await EmailModel.findById( email.id );
    const expected = {
      recipients,
      _id: email.id,
      subject,
      message,
      created_at,
      __v: 0
    };
    const expectedString = JSON.stringify( expected );
    const actual = JSON.stringify( emailInDatabase );
    expect( expectedString ).toEqual( actual );
  } );
} );
