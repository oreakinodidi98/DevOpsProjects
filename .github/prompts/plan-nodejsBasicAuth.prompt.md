# Plan: Build Node.js Service with Basic Auth

Create a minimal Node.js/Express service with a public root route and a Basic Auth-protected `/secret` route that reads credentials and messages from environment variables.

## Steps

1. Initialize Node.js project in `DockerizedService/` with `package.json` including `express`, `dotenv`, and `express-basic-auth` dependencies
2. Create `index.js` (or `server.js`) implementing `/` route returning "Hello, world!" and `/secret` route with Basic Auth middleware
3. Create `.env` file with `SECRET_MESSAGE`, `USERNAME`, and `PASSWORD` variables (add to `.gitignore`)
4. Create `.env.example` template file showing required variables without actual values
5. Test locally by running `npm install` and `node index.js`, verifying both routes work correctly

## Further Considerations

1. **Port configuration**: Should the server port be configurable via environment variable (e.g., `PORT=3000`) or hardcoded to 3000?
2. **Basic Auth library**: Use `express-basic-auth` for simplicity, or implement custom middleware for more control?
3. **Error responses**: Should unauthorized access to `/secret` return 401 with plain text, JSON error message, or HTML?
