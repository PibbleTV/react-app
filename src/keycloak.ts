import Keycloak from "keycloak-js";

const hostname = "http://auth.pibbletv.com"; 
const keycloak = new Keycloak({
  url: `${hostname}`, 
  realm: "pibble-tv",
  clientId: "pibbletv-frontend",
});

export default keycloak;