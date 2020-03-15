const express = require( 'express' );
const cron = require( 'node-cron' );
const axios = require( 'axios' ).default;
const MyraService = require( './service/myra' );

const app = express( );

const task = cron.schedule( '* 10 11 * * *', async ( ) => {
   const { message } = await MyraService.getMyIssues( );

   if ( message ) {
      axios.post( 'https://hooks.slack.com/services/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', { text: message } )
      .then( response => { 
         console.log( 'Message sent :)');
         taskKill( );
      } ) 
      .catch( err => console.log( err ) );
   } else {
      console.log( 'Could not send message to slack :)');
   } 
}); 

function taskKill( ) {
   task.stop( );
}

module.exports = app;