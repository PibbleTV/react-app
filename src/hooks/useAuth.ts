import { useContext } from "react";
import { KeycloakContext } from "../KeycloakProvider.tsx";

export const useAuth = () => {
  const context = useContext(KeycloakContext);
  if (!context) {
    throw new Error("useAuth must be used within a KeycloakProvider");
  }
  return context;
};