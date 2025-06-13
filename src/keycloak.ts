import Keycloak from "keycloak-js";

const hostname = "https://auth.24.144.77.108.nip.io"; 
const keycloak = new Keycloak({
  url: `${hostname}`, 
  realm: "pibble-tv",
  clientId: "pibbletv-frontend",
});

export default keycloak;