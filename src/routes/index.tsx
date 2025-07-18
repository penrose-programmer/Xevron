import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <Link to="/journal">Journal</Link>;
}
