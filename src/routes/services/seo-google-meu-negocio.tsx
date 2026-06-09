import { createFileRoute } from "@tanstack/react-router";
import SEOPage from "../../pages/services/SEO";

export const Route = createFileRoute("/services/seo-google-meu-negocio")({
  component: SEOPage,
});
