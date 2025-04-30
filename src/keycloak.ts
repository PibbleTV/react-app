import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  
  url: "http://keycloak:8080/",
  realm: "pibble-tv",
  clientId: "pibbletv-frontend",

});

export default keycloak;
