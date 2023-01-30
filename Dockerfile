FROM denoland/deno:latest

WORKDIR /app

USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

CMD deno run --unstable -A main.ts