import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        const result = await prisma.courses.create({
            data: {
                name: 'Curso de ReactJS',
                duration: 250,
                description: "Um curso top de react.",
            }
        })
        console.log('adicionou', result);
    } catch (error) {
        
    }
}
main();