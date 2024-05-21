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
exports.DeleteCustumerControlle = void 0;
const DeleteCustumerService_1 = require("../services/DeleteCustumerService");
class DeleteCustumerControlle {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.query;
            const custumerService = new DeleteCustumerService_1.DeleteCustumerService();
            const custumer = yield custumerService.execute({ id });
            reply.send(custumer);
        });
    }
}
exports.DeleteCustumerControlle = DeleteCustumerControlle;
