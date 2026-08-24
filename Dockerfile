# Glama / registry evaluation image: starts the stdio MCP server, which
# bridges to the hosted Streamable-HTTP endpoint (tools/list needs no key).
FROM node:20-slim
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY index.mjs ./
CMD ["node", "index.mjs"]
