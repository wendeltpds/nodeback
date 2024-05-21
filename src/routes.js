"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const createCustomerController_1 = require("./controllers/createCustomerController");
const ListCustumersController_1 = require("./controllers/ListCustumersController");
const DeleteCustumerController_1 = require("./controllers/DeleteCustumerController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.post("/custumer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new createCustomerController_1.CreateCustomerController().handle(request, reply);
        }));
        fastify.get("/custumers", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCustumersController_1.ListCustumersController().handle(request, reply);
        }));
        fastify.delete("/custumers", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteCustumerController_1.DeleteCustumerControlle().handle(request, reply);
        }));
    });
}
exports.routes = routes;
