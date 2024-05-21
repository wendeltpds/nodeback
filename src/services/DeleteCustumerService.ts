import prismaClient from "../prisma"

interface DeleteCustumerProps{
    id: string
}

class DeleteCustumerService{
    async execute({id}: DeleteCustumerProps){
        if(!id){
            throw new Error("Solicitaçao invalida")
        }

        const findCustumer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        }
        )

        if(!findCustumer){
            throw new Error("cliente NAO EXISTE")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustumer.id
            }
        })

        return {message: "deletado com sucesso"}
    }
}

export {DeleteCustumerService}