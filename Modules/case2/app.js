import { endpoint, timeout } from "./config.js";
import errorHandler from "./errorHandler.js";

console.log("API Endpoint:", endpoint);
console.log("Timeout:", timeout, "ms");

// simulasi error handling
try {
    throw new Error("This is a simulated error");
} catch (err) {
    errorHandler(err);
}