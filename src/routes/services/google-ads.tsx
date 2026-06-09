import { createFileRoute } from "@tanstack/react-router";
import GoogleAdsPage from "../../pages/services/GoogleAds";

export const Route = createFileRoute("/services/google-ads")({
  component: GoogleAdsPage,
});
