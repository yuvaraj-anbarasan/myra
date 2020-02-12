const axios = require( 'axios' ).default;

class Myra {
    static getInProgressIssues( ) {
        return new Promise( ( resolve, reject ) => {
            let toDo = [ ];

            axios.get( 
                'https://yuvaraj-anbarasan.atlassian.net/rest/api/2/search?jql=assignee="Yuvaraj Anbarasan" and status="To Do"', 
                {
                    headers: {
                        Authorization: "Basic eXV2YXJhai5rbGVpQGdtYWlsLmNvbTpXa05hRVdMQ1JnZWhMVjFlTkphcjU3OUU="
                    }
                }
            )
            .then( response => {
                response.data.issues.map( issue => {
                    toDo.push( issue.fields.summary );
                });

                resolve( toDo );
            })
            .catch( err => {
                reject( err );
            });
        });
    }
    
    static getDoneIssues( ) {
        return new Promise( ( resolve, reject ) => {
            let done = [ ];
            axios.get( 
                'https://yuvaraj-anbarasan.atlassian.net/rest/api/2/search?jql=assignee="Yuvaraj Anbarasan" and status="DONE"', 
                {
                    headers: {
                        Authorization: "Basic eXV2YXJhai5rbGVpQGdtYWlsLmNvbTpXa05hRVdMQ1JnZWhMVjFlTkphcjU3OUU="
                    }
                }
            )
            .then( response => {
                response.data.issues.map( issue => {
                    done.push( issue.fields.summary );
                });

                resolve( done );
            })
            .catch( err => {
                reject( err );
            });
        });
    }
}

module.exports = Myra;