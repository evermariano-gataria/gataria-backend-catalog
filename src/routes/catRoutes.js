import { Router } from "express";

import CatRegisterController from "../controllers/CatRegisterController.js";

const routes = new Router();
const apiPrefix = "/catalog"

routes.get(`${apiPrefix}/healthcheck`, (req, res) => res.json({ healthcheck: "OK" }));
routes.post(`${apiPrefix}/registercats`, CatRegisterController.store);
routes.get(`${apiPrefix}/allcats`, CatRegisterController.index);

export default routes;
