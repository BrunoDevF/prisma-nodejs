import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: 'ca77748e-ff5a-4924-9fda-3ce130108390'
        },
        data: {
            description: 'Curso de NODEJS'
        }
    });
    console.log(result);
}

main();