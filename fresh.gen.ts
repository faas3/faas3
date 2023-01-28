// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" }
import * as $0 from "./routes/[name].tsx"
import * as $1 from "./routes/_404.tsx"
import * as $2 from "./routes/api/deploy.ts"
import * as $3 from "./routes/api/functions/[name].ts"
import * as $4 from "./routes/api/moverun.ts"
import * as $5 from "./routes/docs/[...slug].tsx"
import * as $6 from "./routes/gfm.css.ts"
import * as $7 from "./routes/index.tsx"
import * as $8 from "./routes/move.tsx"
import * as $$0 from "./islands/MoveFuncs.tsx"

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/api/deploy.ts": $2,
    "./routes/api/functions/[name].ts": $3,
    "./routes/api/moverun.ts": $4,
    "./routes/docs/[...slug].tsx": $5,
    "./routes/gfm.css.ts": $6,
    "./routes/index.tsx": $7,
    "./routes/move.tsx": $8,
  },
  islands: {
    "./islands/MoveFuncs.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
