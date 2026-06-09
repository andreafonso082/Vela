// @ts-nocheck
import { createFileRoute, Outlet, useChildMatches } from "@tanstack/react-router";
import Services from "../pages/Services";

export const Route = createFileRoute("/services")({
  component: () => {
    const childMatches = useChildMatches();
    // If we are exactly at /services, render the list.
    // If there is a child match (like /$slug), render the outlet.
    if (childMatches.length === 0) {
      return <Services />;
    }
    return <Outlet />;
  },
});
