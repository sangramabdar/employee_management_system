import Express from "express";
import cors from "cors";
import initRoutes from "./init-routes";

import MongoDatabase from "./db";
import { requestLogger } from "../common/helper/logger";

const PORT = 443;

const app = Express();

async function initServer() {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(Express.static("public"));
  app.use(
    Express.json({
      type: ["json"],
    })
  );
  app.use(requestLogger);
  await MongoDatabase.connectToDatabase();
  await initRoutes();
  app.listen(PORT, () => {
    console.log("server is started ");
  });
}

export { initServer, app };
