import Express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../docs/swagger";
import initRoutes from "./init-routes";

import MongoDatabase from "./db";
import { requestLogger } from "../common/helper/logger";

const PORT = process.env.PORT || 8080;

const app = Express();

async function initServer() {
  app.use(cors());
  app.use(
    Express.json({
      type: ["json"],
    })
  );
  app.use(requestLogger);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  await MongoDatabase.connectToDatabase();
  await initRoutes();
  app.listen(PORT, () => {
    console.log("server is started ");
  });
}

export { initServer, app };
