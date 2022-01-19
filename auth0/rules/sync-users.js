require('dotenv').config({path:"../../.env"});

function syncUsers(user, context, callback) {
    const username = user.name;
    const email = user.email;
    
    const admin_secret = process.env.ADMIN_SECRET;
    const url = process.env.HASURA_URL;
    const query = `mutation($username: String!, $email: String!) {
      insert_user(objects: {
                  name: $username, 
                  email: $email}) {
                      affected_rows
                  }
          }`;
  
    const query_variables = { "username": username, "email": email };
  
    request.post({
        url: url,
        headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': admin_secret},
        body: JSON.stringify({
          query: query,
          variables: query_variables
        })
    }, function(error, response, body){
         callback(null, user, context);
    });
  }
  