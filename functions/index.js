const functions = require("firebase-functions");
const next = require("next");

// Ensure that the app uses the correct configuration for production
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  console.log("Incoming request:", req.url); // Optional: Log requests for debugging
  return app
    .prepare()
    .then(() => handle(req, res))
    .catch((err) => {
      console.error("Error handling request:", err);
      res.status(500).send("Internal server error");
    });
});
