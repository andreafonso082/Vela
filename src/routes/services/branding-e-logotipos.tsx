import { createFileRoute } from "@tanstack/react-router";
import BrandingPage from "../../pages/services/Branding";

export const Route = createFileRoute("/services/branding-e-logotipos")({
  component: BrandingPage,
});
