import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
// export const createAppContext = () => {
// const prisma = new PrismaClient();
//     return{
//         prisma,
//         stop: async()=>{
//             await prisma.$disconnect()
//         }
//     }
// }

// export type AppContext = ReturnType<typeof createAppContext>
