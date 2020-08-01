import auth from "auth0-js"

//init auth0 app
export default class Auth {
    auth0 = new auth.WebAuth({
        domain:'dapthedev.us.auth0.com',
        clientID: 'DFRzswSR7Bv4cZNF9havhPjjKx6Tsmoz',
        redirectUri:'http://3000-ca5829f2-4c7c-4896-9df6-1f386b235477.ws-us02.gitpod.io/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
        
    })

    login = () => {
        this.auth0.authorize()
    }
    
}