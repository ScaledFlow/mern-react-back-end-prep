class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Add a "message" property
    this.code = errorCode; // Adds a "code" property
    console.log("error code " + errorCode);
  }
}

module.exports = HttpError;