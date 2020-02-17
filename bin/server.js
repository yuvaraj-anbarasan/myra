const app = require( '../app/app' );
const config = require( 'config' );

const port = config.app.port;

app.listen( port, ( ) => {
    console.log( `server is running on port ${ port }` );
});