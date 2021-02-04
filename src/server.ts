import "dotenv-flow/config";
import { app } from "./app";

const env = process.env;

const port = env.PORT || 3000;
const mode = env.APP_ENV || "dev";

console.log("DB_NAME", env.DB_NAME);

app.listen(port, () => {
  console.log("App is running at http://localhost:%d in %s mode", port, mode);
  console.log("  Press CTRL-C to stop\n");
});