import { FastifyRequest, FastifyReply} from "fastify"
import { ListCustumersServices } from "../services/ListCustumersServices"

class ListCustumersController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const ListCustumersService = new ListCustumersServices();

        const custumers = await ListCustumersService.execute();

        reply.send(custumers)
    }
}

export { ListCustumersController }