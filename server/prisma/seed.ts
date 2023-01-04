import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
   //crair o seed
   const pet = await prisma.pet.create({
        data:{
            nome: "Lorinho",    
            idade:"1 mês",
            tipo: "Passaro",
            raca: "Papagaio",
            donoPet: "Jose do Louro",
            telefoneDonoPet: "(11) 11111-1111", 
        }
   })
}

main();
