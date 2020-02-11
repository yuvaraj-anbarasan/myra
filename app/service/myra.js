const axios = require( 'axios' ).default;

class Myra {
    static getMySprints( ) {
        return new Promise( ( resolve, reject ) => {
            axios.get( '', {
                headers: {
                    Authorization: "Basic eXV2YXJhai5rbGVpQGdtYWlsLmNvbTpXa05hRVdMQ1JnZWhMVjFlTkphcjU3OUU="
                }
            })
            .then( response => {
                console.log( 'response:', response );
            })
            .catch( err => {
                console.log( 'err:', err );
            });
        });
    }
}