export const oktaConfig = {
    clientId: "0oai9iatgq6LGbtVA5d7", 
    issuer: "https://dev-29265206.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}