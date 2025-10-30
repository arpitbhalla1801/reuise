/**
 * This file is the entry point for the Preview app
 */

import { createRoot } from "react-dom/client";
import { Preview } from "./Preview";

function start() {
  const root = createRoot(document.getElementById("preview-root")!);
  root.render(<Preview />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
