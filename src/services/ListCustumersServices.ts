import prismaClient from "../prisma";

class ListCustumersServices{
async execute(){
    const customers = await prismaClient.customer.findMany()

    return customers;
}

}

export  {ListCustumersServices }