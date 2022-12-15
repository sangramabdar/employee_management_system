import { Request, Response } from "express";
import path from "path";

class RootController {
  static async get(req: Request, res: Response) {
    res.send(path.join(__dirname, "../../../files/index.html"));
  }
}

export default RootController;
