const express = require( 'express' );
const MyraService = require( './service/myra' );

const app = express( );

app.get( '/myra', async ( req, res, next ) => {
     const { inProgress, done } = await MyraService.getMyIssues( );
     
     res.status( 200 ).json({
        inProgress: inProgress,
        done: done
     });
});

module.exports = app;