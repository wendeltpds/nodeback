import { FastifyInstance, FastifyPluginOptions, FastifyRequest , FastifyReply} from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustumersController } from "./controllers/ListCustumersController";
import { DeleteCustumerControlle } from "./controllers/DeleteCustumerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/custumer", async (request:FastifyRequest , reply:FastifyReply) => {
        return new CreateCustomerController().handle(request,reply)
    })

    fastify.get("/custumers", async (request:FastifyRequest , reply:FastifyReply) => {
        return new ListCustumersController().handle(request,reply)
    })

    fastify.delete("/custumers", async (request:FastifyRequest , reply:FastifyReply) => {
        return new DeleteCustumerControlle().handle(request,reply)
    })
}