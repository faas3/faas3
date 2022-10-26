import { Markdown } from "../components/Markdown.tsx";
import { gfm } from "../utils/markdown.ts";
import { Head } from "$fresh/runtime.ts";
import { App } from "../components/App.tsx";
import Publisher from "../islands/Publisher.tsx";

export default function Upload() {
  return (
    <App activeLink="/upload">
      <Publisher />
    </App>
  );
}
