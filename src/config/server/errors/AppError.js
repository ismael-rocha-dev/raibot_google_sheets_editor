export default class AppError {
  constructor(message = "", statusCode = 400, module = "default") {
    this.message = message;
    this.statusCode = statusCode;
    this.module = module;
  }
}
