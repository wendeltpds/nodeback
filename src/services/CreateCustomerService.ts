import prismaClient from "../prisma";

interface CreateCustumerProps{
    name: string;
    email:string;
}

class CreateCustomerService{
    async execute({name , email}: CreateCustumerProps){

        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        const Custumer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status:true
            }
        })

        return Custumer
    }
}


export {CreateCustomerService}