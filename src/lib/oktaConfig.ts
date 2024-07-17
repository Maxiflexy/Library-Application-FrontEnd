export const oktaConfig = {
    clientId: "0oaiadh654KHMYTgm5d7", 
    issuer: "https://dev-61814843.okta.com/oauth2/default",
    redirectUri: "https://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}