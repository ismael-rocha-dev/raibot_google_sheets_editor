import express from "express";
import "express-async-errors";
import saveReunionController from "../../modules/reunion/controllers/saveReunionController.js";
import AppError from "./errors/AppError.js";

const app = express();

app.use(express.json());

app.post("/", saveReunionController);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      module: error.module,
    });
  }
  return response.status(500).json({
    message: "internal server error",
    module: "default",
  });
});

export default app;
