import { createFileRoute } from "@tanstack/react-router";
import AgentesIAPage from "../../pages/services/AgentesIA";

export const Route = createFileRoute("/services/agentes-ia")({
  component: AgentesIAPage,
});
