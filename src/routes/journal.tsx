import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>Daily Reflection</h1>
      <textarea></textarea>
    </div>
  );
}
