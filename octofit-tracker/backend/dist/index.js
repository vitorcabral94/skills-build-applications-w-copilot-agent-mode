"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const apiUrl_1 = require("./config/apiUrl");
require("./config/database");
const port = apiUrl_1.apiPort;
app_1.default.listen(port, () => {
    console.log(`OctoFit Tracker backend listening on port ${port}`);
    console.log(`API base URL: ${(0, apiUrl_1.getApiBaseUrl)()}`);
});
