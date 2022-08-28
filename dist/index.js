"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Route_1 = __importDefault(require("./app/Product/Route"));
const _404_1 = __importDefault(require("./middleware/404"));
const error_handler_1 = __importDefault(require("./middleware/error.handler"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/api/v1", Route_1.default);
app.use(_404_1.default, error_handler_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
