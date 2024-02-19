import {onRequest} from "firebase-functions/v2/https";
import apiHandler from "./handlers/api";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest(apiHandler.callback());
