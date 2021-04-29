const express = require("express");
const path = require("path");
// const createProxyMiddleware = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 5000;

// app.use(
//   "/v3",
//   createProxyMiddleware({
//     target: "https://api.spacexdata.com",
//     changeOrigin: true,
//   })
// );

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);
