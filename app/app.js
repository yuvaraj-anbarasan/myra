const express = require( 'express' );
const cron = require( 'node-cron' );
const MyraService = require( './service/myra' );

const app = express( );

app.get( '/myra', async ( req, res, next ) => {
     const { inProgress, done } = await MyraService.getMyIssues( );
     
     res.status( 200 ).json({
        inProgress: inProgress,
        done: done
     });
});

const task = cron.schedule( '* 08 11 * * *', async ( ) => {
   const { inProgress, done } = await MyraService.getMyIssues( );

   console.log( 'in progress:' );

   taskKill( );
}); 

function taskKill( ) {
task.stop( );
}

module.exports = app;