"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderAnalytics = exports.getCoursesAnalytics = exports.getUsersAnalytics = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const catchAsyncError_1 = require("../middleware/catchAsyncError");
const analyrics_generator_1 = require("../utils/analyrics.generator");
const user_model_1 = __importDefault(require("../models/user.model"));
const course_model_1 = __importDefault(require("../models/course.model"));
const order_Model_1 = __importDefault(require("../models/order.Model"));
// get users analytics -- only for admin
exports.getUsersAnalytics = (0, catchAsyncError_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const users = await (0, analyrics_generator_1.generateLast12MonthsData)(user_model_1.default);
        res.status(201).json({
            success: true,
            users,
        });
    }
    catch (error) {
        // return next(new ErrorHandler(error.message, 500));
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get courses analytics -- only for admin
exports.getCoursesAnalytics = (0, catchAsyncError_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const courses = await (0, analyrics_generator_1.generateLast12MonthsData)(course_model_1.default);
        res.status(201).json({
            success: true,
            courses,
        });
    }
    catch (error) {
        // return next(new ErrorHandler(error.message, 500));
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
// get order analytics -- only for admin
exports.getOrderAnalytics = (0, catchAsyncError_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const orders = await (0, analyrics_generator_1.generateLast12MonthsData)(order_Model_1.default);
        res.status(201).json({
            success: true,
            orders,
        });
    }
    catch (error) {
        // return next(new ErrorHandler(error.message, 500));
        return next(new ErrorHandler_1.default(error.message, 500));
    }
});
