"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFound(_req, res, _next) {
    res.status(404).json({
        status: "notFound",
        message: "Resource not found",
    });
}
exports.default = notFound;
