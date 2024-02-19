import {onRequest} from "firebase-functions/v2/https";
import apiHandler from "./handlers/api";

exports.api = onRequest(apiHandler.callback());
