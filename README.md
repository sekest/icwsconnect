# icwsconnect
App for basic ICWS connection testing

The messaging retrival is based on a SSE(EventStream) model.  This means no client polling to server in a GET messages style of coding.

Be sure to create the config.js file with in the js folder and enter your own parameters:
    
   
    define(function(){
        let params = {
            //PARAM 1: URL for ICWS
            url : "https://acme.com/api/sessionmanager",
            //PARAM 2: ICWS Username
            username : "username",
            //PARAM 3: ICWS Password
            password : "password"
        }
        return params
    });