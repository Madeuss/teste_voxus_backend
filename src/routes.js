const express = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const PaymentController = require("./controllers/PaymentController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

routes.post("/sessions", SessionController.create);

routes.get("/payments", PaymentController.index);
routes.post("/payments", PaymentController.create);
routes.put("/payments/:id", PaymentController.update);
routes.delete("/payments/:id", PaymentController.delete);

module.exports = routes;
