"use strict";
const express = require("express");

/* File upload */
const multer = require("multer");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const PaymentController = require("./controllers/PaymentController");
const FilePaymentController = require("./controllers/FilePaymentController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

routes.post("/sessions", SessionController.create);

routes.get("/payments", PaymentController.index);
routes.post("/payments", PaymentController.create);
routes.put("/payments/:id", PaymentController.update);
routes.delete("/payments/:id", PaymentController.delete);

// routes.post("/upload", FilePaymentController.create);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

routes.post("/upload", upload.single("file"), async function (req, res, next) {
  const file = req;
  res.send("File uploaded as");
});

module.exports = routes;
