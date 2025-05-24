import Keycloak from "keycloak-js";

const hostname = "https://auth.pibbletv.com"; 
const keycloak = new Keycloak({
  url: `${hostname}`, 
  realm: "pibble-tv",
  clientId: "pibbletv-frontend",
});

export default keycloak;