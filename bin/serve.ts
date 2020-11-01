import "dotenv/config";
import { app } from "../src/App";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import serverless from "serverless-http";

const env = process.env;

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  const server = serverless(app);
  return server(event, context);
};

if (env.AWS_LAMBDA_FUNCTION_NAME == null) {
  const port = env.PORT || 3000;
  const mode = env.APP_ENV || "dev";
  app.listen(port, () => {
    /* eslint-disable */
    console.log("App is running at http://localhost:%d in %s mode", port, mode);
    console.log("  Press CTRL-C to stop\n");
    /* eslint-enable */
  });
}
