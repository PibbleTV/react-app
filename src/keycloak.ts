import Keycloak from "keycloak-js";

const hostname = "http://localhost:8080/"; 
const keycloak = new Keycloak({
  url: `${hostname}`, 
  realm: "pibble-tv",
  clientId: "pibbletv-frontend",
});

export default keycloak;