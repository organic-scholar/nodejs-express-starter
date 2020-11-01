
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const name = err.constructor.name;
  const status = err.status || 500;
  res.status(status).json({
    error: {
      name: name,
      message: err.message,
    },
  });
};