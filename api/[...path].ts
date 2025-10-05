import serverless from "serverless-http";

import { createServer } from "../server";

const app = createServer();
const handler = serverless(app);

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  runtime: "nodejs20.x",
};

export default async function vercelHandler(req: any, res: any) {
  await handler(req, res);
}
