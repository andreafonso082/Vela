import { createFileRoute } from "@tanstack/react-router";
import WebsitesPage from "../../pages/services/Websites";

export const Route = createFileRoute("/services/criacao-de-websites")({
  component: WebsitesPage,
});
