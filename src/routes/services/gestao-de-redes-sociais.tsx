import { createFileRoute } from "@tanstack/react-router";
import SocialMediaPage from "../../pages/services/SocialMedia";

export const Route = createFileRoute("/services/gestao-de-redes-sociais")({
  component: SocialMediaPage,
});
