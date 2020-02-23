const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const app = require( '../bin/Server' );
const mongoose = require( 'mongoose' );

//configure chai
chai.use( chaiHttp );
chai.should();

describe( 'Server Test', ( ) => {
    it( 'Test server health', ( done ) => { 
        chai.request( app )
            .get( '/serverHealth' )
            .end( ( err, res ) => {
                if ( err )
                    done( Error( err.message ) );
                    
                res.should.have.status( 200 );
                done( );
            });
    });
});
