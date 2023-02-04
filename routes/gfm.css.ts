import { Handlers } from "$fresh/server.ts";
import { gfm } from "../utils/markdown.ts";

const CSS = `${gfm.CSS}
ol.nested {
	counter-reset: item;
}
ol.nested li {
	display: block;
}
ol.nested li:before {
	font-feature-settings: "kern" 1, "tnum" 1;
	-webkit-font-feature-settings: "kern" 1, "tnum" 1;
	-ms-font-feature-settings: "kern" 1, "tnum" 1;
	-moz-font-feature-settings: "kern" 1, "tnum" 1;
	content: counters(item, ".") ". ";
	counter-increment: item;
}
.markdown-body ul {
  list-style: disc;
}
.markdown-body ol {
  list-style: numeric;
}
.toggle:checked + .toggled {
	display: block;
}
.markdown-body h1 {
  border-bottom: none;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight:800;
  letter-spacing: -0.025em;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(CSS, {
      headers: {
        "content-type": "text/css",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  },
};
